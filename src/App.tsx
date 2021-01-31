import React from "react";
import Home from "./Home";
import Elektronik from "./Category/Elektronik";
import Fashion from "./Category/Fashion";
import HPAccesories from "./Category/HpAccesories";
import Makananminuman from "./Category/MakananMinuman";
import Fotografi from "./Category/Fotografi";
import PerlengkapanSekolah from "./Category/PerlengkapanSekolah";
import KomputerAccesories from "./Category/KomputerAccesories";
import PerlengkapanBayi from "./Category/PerlengkapanBayi";
import DetailProduct1 from "./DetailProduct1";
import Profile from "./Profile";
import Keranjang from "./Keranjang";
import { Layout, Breadcrumb, Input, Form, Button, Typography } from "antd";
import {
  ShoppingCartOutlined,
  HomeOutlined,
  ProfileOutlined,
  ShopOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Switch, Route, Link } from "react-router-dom";

export type bestSelling = {
  href: string;
  title: string;
  overView: string;
  description: string;
  avatar: string;
  image: string;
};

function App() {
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
              <Link to="/">
                <ShopOutlined />
                MELLEH
              </Link>
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
              <Link to="/profile">
                <UserOutlined />
                Profile
              </Link>
            </Title>
            <Title style={{ marginLeft: 30, marginTop: 15 }} level={3}>
              <Link to="/keranjang">
                <ShoppingCartOutlined />
                Keranjang
              </Link>
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
              <Route exact path="/" component={Home} />
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
              <Route exact path="/detailproduct1" component={DetailProduct1} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/keranjang" component={Keranjang} />
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
