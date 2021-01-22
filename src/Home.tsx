import React, { useState } from "react";
import { Card, Row, Col, List, Space, Badge, Typography } from "antd";
import Meta from "antd/lib/card/Meta";
import { Link } from "react-router-dom";
import { LikeOutlined, StarOutlined } from "@ant-design/icons";

type Products = {
  title: string;
  image: string;
  price: number;
};

function Home() {
  const [products, setProducts] = useState<Products[]>([
    {
      title: "Baju Muslim",
      image:
        "https://s0.bukalapak.com/img/00513450051/large/Baju_Koko_Modern_Semi_Slimfit___Kemeja_Muslim___Gamis_Pria__.jpg",
      price: 120.0,
    },
    {
      title: "Headphone Gaming",
      image: "https://cf.shopee.co.id/file/9fdbe553e78b4485dc4de6913392a5fe",
      price: 320.0,
    },
    {
      title: "Mie Gacoan",
      image:
        "https://www.malang-guidance.com/wp-content/uploads/2020/01/Mie-Iblis-Mie-Gacoan-Malang-Guidance.jpg",
      price: 15.0,
    },
    {
      title: "Baby Doll",
      image: "https://wallpapercave.com/wp/wp2565586.jpg",
      price: 85.0,
    },
    {
      title: "Mini Kulkas",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPEPY6MOgIGmj6CAHLOO2iZ4g6tr-YcekeJw&usqp=CAU",
      price: 425.0,
    },
    {
      title: "Note Book",
      image:
        "https://www.findmeagift.co.uk/site_media/images/products/p_main/sou077_magic_notebook_lifestyle_2000_1.jpg",
      price: 28.0,
    },
    {
      title: "Canon Predator",
      image: "https://www.adorama.com/images/Large/ica90dk.jpg",
      price: 970.0,
    },
    {
      title: "Nike L3600",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfPGNPYCoepBmOMBiFmMbi-padfG0QpAqZkw&usqp=CAU",
      price: 560.0,
    },
    {
      title: "Penyedot Debu",
      image: "https://blogpictures.99.co/img610-1459745071.jpg",
      price: 367.2,
    },
    {
      title: "Key Board ROG",
      image:
        "https://bayuramadhanis.com/wp-content/uploads/2019/04/ASUS-ROG-Strix-Scope-Mechanical-Keyboard-1024x578.jpg",
      price: 157.0,
    },
    {
      title: "Paket Pemuda Tersesat",
      image: "https://pbs.twimg.com/media/Eq9frXPVoAA9UBe.jpg",
      price: 350.0,
    },
    {
      title: "Tepak Pensil",
      image:
        "https://ecs7.tokopedia.net/img/cache/700/product-1/2020/4/6/99008496/99008496_ba039ea7-1a9e-4e4c-a211-47d6340ec1ff_892_892.jpg",
      price: 75.0,
    },
  ]);

  const IconText = ({ icon, text }: any) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  const { Title } = Typography;

  return (
    <div>
      <div>
        <Title level={2}>Category</Title>
        <Row gutter={[8, 8]}>
          <Col span={6}>
            <Link to="/fashion">
              <Card
                hoverable
                style={{ width: 250 }}
                cover={
                  <img
                    style={{ width: 250, height: 200 }}
                    alt="Fashion"
                    src="https://dqg5fqdy33g0r.cloudfront.net/photos/event-planner/null/spyne/1536769630868/logo_t9jK10010d."
                  />
                }
              >
                <Meta title="Fashion" style={{ textAlign: "center" }} />
              </Card>
            </Link>
          </Col>
          <Col span={6}>
            <Link to="/handphoneaccesories">
              <Card
                hoverable
                style={{ width: 250 }}
                cover={
                  <img
                    style={{ width: 250, height: 200 }}
                    alt="Handphone & Aksesoris"
                    src="https://i0.wp.com/republikseo.net/wp-content/uploads/2020/04/Macam-Macam-Aksesoris-HP-Kekinian.jpg"
                  />
                }
              >
                <Meta
                  title="Handphone & Aksesoris"
                  style={{ textAlign: "center" }}
                />
              </Card>
            </Link>
          </Col>
          <Col span={6}>
            <Link to="/makananminuman">
              <Card
                hoverable
                style={{ width: 250 }}
                cover={
                  <img
                    style={{ width: 250, height: 200 }}
                    alt="Makanan & Minuman"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0F-su33RqDtUXXM4iJauQ65Sqt7s15GAEqg&usqp=CAU"
                  />
                }
              >
                <Meta
                  title="Makanan & Minuman"
                  style={{ textAlign: "center" }}
                />
              </Card>
            </Link>
          </Col>
          <Col span={4}>
            <Link to="/perlengkapanbayi">
              <Card
                hoverable
                style={{ width: 250 }}
                cover={
                  <img
                    style={{ width: 250, height: 200 }}
                    alt="Perlengkapan Bayi"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4s9ySR-WvmYuCt_96RyvTW9iLg15ANexXPw&usqp=CAU"
                  />
                }
              >
                <Meta
                  title="Perlengkapan Bayi"
                  style={{ textAlign: "center" }}
                />
              </Card>
            </Link>
          </Col>
        </Row>
        <Row gutter={[8, 8]}>
          <Col span={6}>
            <Link to="/elektronik">
              <Card
                hoverable
                style={{ width: 250 }}
                cover={
                  <img
                    style={{ width: 250, height: 200 }}
                    alt="Elektronik"
                    src="https://i0.wp.com/f1-styx.imgix.net/article/2019/09/23230000/pulverit-it.jpg?fit=1200%2C750&ssl=1"
                  />
                }
              >
                <Meta title="Elektronik" style={{ textAlign: "center" }} />
              </Card>
            </Link>
          </Col>
          <Col span={6}>
            <Link to="/fotografi">
              <Card
                hoverable
                style={{ width: 250 }}
                cover={
                  <img
                    style={{ width: 250, height: 200 }}
                    alt="Fotografi"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt3YmDPBRfFcU7u0CgQjJ17vLOr2EHrnxxiQ&usqp=CAU"
                  />
                }
              >
                <Meta title="Fotografi" style={{ textAlign: "center" }} />
              </Card>
            </Link>
          </Col>
          <Col span={6}>
            <Link to="/perlengkapansekolah">
              <Card
                hoverable
                style={{ width: 250 }}
                cover={
                  <img
                    style={{ width: 250, height: 200 }}
                    alt="Perlengkapan Sekolah"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz2jXDyJw9gBnVo9MYZaOMkX5OP8zInZuDsA&usqp=CAU"
                  />
                }
              >
                <Meta
                  style={{ textAlign: "center" }}
                  title="Perlengkapan Sekolah"
                />
              </Card>
            </Link>
          </Col>
          <Col span={6}>
            <Link to="/komputeraccesories">
              <Card
                hoverable
                style={{ width: 250 }}
                cover={
                  <img
                    style={{ width: 250, height: 200 }}
                    alt="Komputer & Aksesoris"
                    src="https://ecs7.tokopedia.net/img/cache/700/product-1/2015/11/21/6114769/6114769_666f5d4e-1628-4c41-af69-5d0cf1e8f50d.png"
                  />
                }
              >
                <Meta
                  style={{ textAlign: "center" }}
                  title="Komputer & Aksesoris"
                />
              </Card>
            </Link>
          </Col>
        </Row>
      </div>
      <div style={{ marginTop: 25 }}>
        <Title level={2}>Rekomendasi</Title>
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 6,
            xxl: 3,
          }}
          dataSource={products}
          renderItem={(item) => (
            <List.Item
              key={item.title}
              actions={[
                <IconText
                  icon={StarOutlined}
                  text="156"
                  key="list-vertical-star-o"
                />,
                <IconText
                  icon={LikeOutlined}
                  text="90"
                  key="list-vertical-like-o"
                />,
              ]}
            >
              <Badge style={{ backgroundColor: "#52c41a" }} count={15} />
              <Card
                style={{ width: 170, textAlign: "center" }}
                hoverable
                cover={
                  <img
                    style={{ width: 170, height: 120 }}
                    alt="product"
                    src={item.image}
                  />
                }
              >
                <Meta style={{ textAlign: "center" }} title={item.title} />
                {item.price}
              </Card>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}

export default Home;
