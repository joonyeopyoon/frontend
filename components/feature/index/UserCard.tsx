import { Card } from "antd";
import { Menu, Input, Row, Col } from "antd";
import { MeType } from "utils/store";
const { Meta } = Card;

type Props = {
  user: MeType;
};

function UserCard({ user }: Props) {
  console.log(user);
  return (
    <Col xs={24} sm={12} md={8}>
      <Card
        hoverable
        style={{ width: 300, marginBottom: 50 }}
        cover={<img alt="user" src={user.imgUrl} />}
      >
        <Meta title={user.email} description={user.name} />
      </Card>
    </Col>
  );
}

export default UserCard;
