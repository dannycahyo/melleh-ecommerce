import React, { useState } from "react";
import Home from "./Home";
import Elektronik from "./Category/Elektronik";
import Fashion from "./Category/Fashion";
import HPAccesories from "./Category/HpAccesories";
import Makananminuman from "./Category/MakananMinuman";
import Fotografi from "./Category/Fotografi";
import PerlengkapanSekolah from "./Category/PerlengkapanSekolah";
import KomputerAccesories from "./Category/KomputerAccesories";
import PerlengkapanBayi from "./Category/PerlengkapanBayi";
import BajuMuslim from "./BajuMuslim";
import { Layout, Breadcrumb, Input, Form, Button, Typography } from "antd";
import {
  ShoppingCartOutlined,
  HomeOutlined,
  ProfileOutlined,
  ShopOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Switch, Route, Link } from "react-router-dom";
import { nanoid } from "nanoid";

export type bestSelling = {
  href: string;
  title: string;
  overView: string;
  description: string;
  avatar: string;
  image: string;
};
export type Products = {
  title: string;
  image: string;
  price: number;
  id: string;
};

function App() {
  const [products, setProducts] = useState<Products[]>([
    {
      title: "Baju Muslim",
      image:
        "https://s0.bukalapak.com/img/00513450051/large/Baju_Koko_Modern_Semi_Slimfit___Kemeja_Muslim___Gamis_Pria__.jpg",
      price: 120.0,
      id: nanoid(),
    },
    {
      title: "Headphone Gaming",
      image: "https://cf.shopee.co.id/file/9fdbe553e78b4485dc4de6913392a5fe",
      price: 320.0,
      id: nanoid(),
    },
    {
      title: "Mie Gacoan",
      image:
        "https://www.malang-guidance.com/wp-content/uploads/2020/01/Mie-Iblis-Mie-Gacoan-Malang-Guidance.jpg",
      price: 15.0,
      id: nanoid(),
    },
    {
      title: "Baby Doll",
      image: "https://wallpapercave.com/wp/wp2565586.jpg",
      price: 85.0,
      id: nanoid(),
    },
    {
      title: "Mini Kulkas",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPEPY6MOgIGmj6CAHLOO2iZ4g6tr-YcekeJw&usqp=CAU",
      price: 425.0,
      id: nanoid(),
    },
    {
      title: "Note Book",
      image:
        "https://www.findmeagift.co.uk/site_media/images/products/p_main/sou077_magic_notebook_lifestyle_2000_1.jpg",
      price: 28.0,
      id: nanoid(),
    },
    {
      title: "Canon Predator",
      image: "https://www.adorama.com/images/Large/ica90dk.jpg",
      price: 970.0,
      id: nanoid(),
    },
    {
      title: "Nike L3600",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfPGNPYCoepBmOMBiFmMbi-padfG0QpAqZkw&usqp=CAU",
      price: 560.0,
      id: nanoid(),
    },
    {
      title: "Penyedot Debu",
      image: "https://blogpictures.99.co/img610-1459745071.jpg",
      price: 367.2,
      id: nanoid(),
    },
    {
      title: "Key Board ROG",
      image:
        "https://bayuramadhanis.com/wp-content/uploads/2019/04/ASUS-ROG-Strix-Scope-Mechanical-Keyboard-1024x578.jpg",
      price: 157.0,
      id: nanoid(),
    },
    {
      title: "Paket Pemuda Tersesat",
      image: "https://pbs.twimg.com/media/Eq9frXPVoAA9UBe.jpg",
      price: 350.0,
      id: nanoid(),
    },
    {
      title: "Tepak Pensil",
      image:
        "https://ecs7.tokopedia.net/img/cache/700/product-1/2020/4/6/99008496/99008496_ba039ea7-1a9e-4e4c-a211-47d6340ec1ff_892_892.jpg",
      price: 75.0,
      id: nanoid(),
    },
  ]);

  const { Header, Content, Footer } = Layout;

  const { Search, TextArea } = Input;

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 23 },
  };

  const { Title } = Typography;

  return (
    <div>
      <Layout>
        <Header
          style={{
            position: "fixed",
            zIndex: 1,
            width: "100%",
            backgroundColor: "whitesmoke",
          }}
        >
          <div style={{ display: "flex" }}>
            <Title style={{ marginRight: 35, marginTop: 15 }} level={2}>
              <ShopOutlined />
              MELLEH
            </Title>
            <Search
              style={{
                width: "50%",
                marginTop: 10,
                marginBottom: 10,
                marginRight: 60,
                marginLeft: 30,
              }}
              size="large"
              enterButton
              placeholder="What Products Are You Looking For ?"
            />
            <Title
              style={{ marginLeft: 50, marginRight: 25, marginTop: 15 }}
              level={3}
            >
              <UserOutlined />
              Profile
            </Title>
            <Title style={{ marginLeft: 30, marginTop: 15 }} level={3}>
              <ShoppingCartOutlined />
              Keranjang
            </Title>
          </div>
        </Header>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>
              <Link to="/">
                Home <HomeOutlined />{" "}
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              Profile <ProfileOutlined />{" "}
            </Breadcrumb.Item>
            <Breadcrumb.Item>Wishlist</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            <Switch>
              <Route exact path="/">
                <Home products={products} />
              </Route>
              <Route exact path="/fashion" component={Fashion} />
              <Route exact path="/elektronik" component={Elektronik} />
              <Route
                exact
                path="/handphoneaccesories"
                component={HPAccesories}
              />
              <Route exact path="/makananminuman" component={Makananminuman} />
              <Route exact path="/fotografi" component={Fotografi} />
              <Route
                exact
                path="/perlengkapansekolah"
                component={PerlengkapanSekolah}
              />
              <Route
                exact
                path="/komputeraccesories"
                component={KomputerAccesories}
              />
              <Route
                exact
                path="/perlengkapanbayi"
                component={PerlengkapanBayi}
              />
              <Route exact path="/bajumuslim" component={BajuMuslim} />
            </Switch>
          </div>
        </Content>
        <Footer>
          <h1 style={{ textAlign: "center" }}>Contact Us</h1>
          <div style={{ display: "flex" }}>
            <Form {...layout} style={{ width: "70%" }}>
              <Form.Item>
                <Input allowClear placeholder="Your Name" />
              </Form.Item>
              <Form.Item>
                <Input allowClear placeholder="Your Email" />
              </Form.Item>
              <Form.Item>
                <Input allowClear placeholder="Your Phone" />
              </Form.Item>
            </Form>
            <TextArea allowClear placeholder="Your Message" />
          </div>
          <Button
            style={{
              display: "block",
              marginTop: 15,
              marginBottom: 15,
              marginLeft: "auto",
              marginRight: "auto",
            }}
            type="primary"
            size="large"
          >
            SEND MESSAGES
          </Button>
          <h1 style={{ textAlign: "center" }}>
            Melleh ©2021 Created by Danny GG
          </h1>
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
