import AppLayout from "components/layouts/AppLayout";
import { Card } from "antd";
import { Menu, Input, Row, Col, Button } from "antd";
import styled from "styled-components";
import UserCard from "components/feature/index/UserCard";
import { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import api from "utils/api";

const { Meta } = Card;

const XUserList = styled.div``;

function Home() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await axios.get(`${api.users}/all`, {
      withCredentials: true,
    });
    console.log(response.data.data);
    setUsers(response.data.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <AppLayout>
      <XUserList>
        <Row gutter={10}>
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </Row>
      </XUserList>
    </AppLayout>
  );
}

export default Home;
