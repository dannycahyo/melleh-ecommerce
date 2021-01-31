import React, { useState } from "react";
import useFetchProfile from "./useFetchProfile";
import useFetchProducts from "./useFetchProducts";
import { Link } from "react-router-dom";
import {
  Tabs,
  Typography,
  Image,
  Input,
  Form,
  Button,
  Upload,
  List,
  Modal,
  Divider,
  Space,
  Avatar,
  Badge,
  Card,
} from "antd";
import {
  ShoppingCartOutlined,
  DeleteOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import Meta from "antd/lib/card/Meta";

function Profile() {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const handleShowModal = () => {
    setIsModalVisible(true);
  };

  const handleOkModal = () => {
    setIsModalVisible(false);
  };

  const handleCancelModal = () => {
    setIsModalVisible(false);
  };

  const { profile } = useFetchProfile();

  const { products } = useFetchProducts();

  const { TabPane } = Tabs;

  const { Title } = Typography;

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  return (
    <div>
      <Tabs tabPosition="left">
        <TabPane tab="Profile" key="1">
          <Title level={2}>Profile</Title>
          <div style={{ display: "flex" }}>
            <div style={{ display: "block" }}>
              <Image
                height={170}
                width={200}
                alt="Profile"
                src="https://cdn.popbela.com/content-images/post/20191203/15-cf52087c67641b6524bfd9f5b757bdae_750x500.jpg"
              />
              <Button
                style={{
                  width: 150,
                  marginTop: 20,
                  marginRight: 25,
                  marginLeft: 25,
                }}
                type="primary"
                onClick={handleShowModal}
              >
                Ganti Password
              </Button>
              <Modal
                title={<Title level={2}>Ganti Password</Title>}
                visible={isModalVisible}
                onCancel={handleCancelModal}
                onOk={handleOkModal}
              >
                <Form {...layout}>
                  <Form.Item>
                    <Input.Password placeholder="Password Lama" />
                  </Form.Item>
                  <Form.Item>
                    <Input.Password placeholder="Password Baru" />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" {...tailLayout}>
                      SIMPAN
                    </Button>
                  </Form.Item>
                </Form>
              </Modal>
            </div>
            <Form style={{ width: "40%" }} {...layout}>
              <Form.Item label="Nama Lengkap">
                <Input value={profile?.data.nama_lengkap} />
              </Form.Item>
              <Form.Item label="Nomor HP">
                <Input value={profile?.data.nomor_hp} />
              </Form.Item>
            </Form>
            <Form style={{ width: "40%" }} {...layout}>
              <Form.Item label="Email">
                <Input value={profile?.data.email} />
              </Form.Item>
              <Form.Item label="Foto">
                <Upload>
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
              </Form.Item>
            </Form>
          </div>
          <Button
            style={{
              display: "block",
              marginTop: 15,
              marginBottom: 15,
              marginLeft: 300,
              marginRight: "auto",
              width: "50%",
            }}
            type="primary"
            size="large"
          >
            SIMPAN
          </Button>
        </TabPane>
        <TabPane tab="Transaksi" key="2">
          <Tabs tabPosition="top">
            <TabPane tab="Belum Bayar" key="1">
              <Divider orientation="left">
                {
                  <Title type="danger" level={2}>
                    Belum Bayar
                  </Title>
                }
              </Divider>
              <List
                itemLayout="vertical"
                bordered
                dataSource={products}
                renderItem={(product) => (
                  <List.Item
                    extra={
                      <Image
                        alt="Product"
                        height={140}
                        width={150}
                        src={`http://mp.comdev.id/assets/foto_produk/${product.foto[0].foto_produk}`}
                      />
                    }
                  >
                    <List.Item.Meta
                      avatar={
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                      }
                      title={
                        <Title level={4}>{product.pelapak.nama_toko}</Title>
                      }
                    />
                    <Space>
                      <Space direction="vertical">
                        <Typography.Text style={{ fontSize: 26 }}>
                          {product.nama_produk}
                        </Typography.Text>
                        <Title level={3}>{`Rp. ${product.harga_jual}`}</Title>
                      </Space>
                      <Typography.Text style={{ fontSize: 26 }}>
                        Total
                      </Typography.Text>
                      <Title level={3}>{`Rp. ${product.harga_jual}`}</Title>
                    </Space>
                  </List.Item>
                )}
              />
            </TabPane>
            <TabPane tab="Dikemas" key="2">
              <Divider orientation="left">
                {
                  <Title type="warning" level={2}>
                    Dikemas
                  </Title>
                }
              </Divider>
              <List
                itemLayout="vertical"
                bordered
                dataSource={products}
                renderItem={(product) => (
                  <List.Item
                    extra={
                      <Image
                        alt="Product"
                        height={140}
                        width={150}
                        src={`http://mp.comdev.id/assets/foto_produk/${product.foto[0].foto_produk}`}
                      />
                    }
                  >
                    <List.Item.Meta
                      avatar={
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                      }
                      title={
                        <Title level={4}>{product.pelapak.nama_toko}</Title>
                      }
                    />
                    <Space>
                      <Space direction="vertical">
                        <Typography.Text style={{ fontSize: 26 }}>
                          {product.nama_produk}
                        </Typography.Text>
                        <Title level={3}>{`Rp. ${product.harga_jual}`}</Title>
                      </Space>
                      <Typography.Text style={{ fontSize: 26 }}>
                        Total
                      </Typography.Text>
                      <Title level={3}>{`Rp. ${product.harga_jual}`}</Title>
                    </Space>
                  </List.Item>
                )}
              />
            </TabPane>
            <TabPane tab="Dikirim" key="3">
              <Divider orientation="left">
                {
                  <Title type="success" level={2}>
                    Dikirim
                  </Title>
                }
              </Divider>
              <List
                itemLayout="vertical"
                bordered
                dataSource={products}
                renderItem={(product) => (
                  <List.Item
                    extra={
                      <Image
                        alt="Product"
                        height={140}
                        width={150}
                        src={`http://mp.comdev.id/assets/foto_produk/${product.foto[0].foto_produk}`}
                      />
                    }
                  >
                    <List.Item.Meta
                      avatar={
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                      }
                      title={
                        <Title level={4}>{product.pelapak.nama_toko}</Title>
                      }
                    />
                    <Space>
                      <Space direction="vertical">
                        <Typography.Text style={{ fontSize: 26 }}>
                          {product.nama_produk}
                        </Typography.Text>
                        <Title level={3}>{`Rp. ${product.harga_jual}`}</Title>
                      </Space>
                      <Typography.Text style={{ fontSize: 26 }}>
                        Total
                      </Typography.Text>
                      <Title level={3}>{`Rp. ${product.harga_jual}`}</Title>
                    </Space>
                  </List.Item>
                )}
              />
            </TabPane>
            <TabPane tab="Selesai" key="4">
              <Divider orientation="left">
                {
                  <Title type="success" level={2}>
                    Selesai
                  </Title>
                }
              </Divider>
              <List
                itemLayout="vertical"
                bordered
                dataSource={products}
                renderItem={(product) => (
                  <List.Item
                    extra={
                      <Image
                        alt="Product"
                        height={140}
                        width={150}
                        src={`http://mp.comdev.id/assets/foto_produk/${product.foto[0].foto_produk}`}
                      />
                    }
                  >
                    <List.Item.Meta
                      avatar={
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                      }
                      title={
                        <Title level={4}>{product.pelapak.nama_toko}</Title>
                      }
                    />
                    <Space>
                      <Space direction="vertical">
                        <Typography.Text style={{ fontSize: 26 }}>
                          {product.nama_produk}
                        </Typography.Text>
                        <Title level={3}>{`Rp. ${product.harga_jual}`}</Title>
                      </Space>
                      <Space direction="vertical">
                        <Typography.Text style={{ fontSize: 26 }}>
                          Total
                        </Typography.Text>
                        <Title level={3}>{`Rp. ${product.harga_jual}`}</Title>
                      </Space>
                    </Space>
                  </List.Item>
                )}
              />
            </TabPane>
          </Tabs>
        </TabPane>
        <TabPane tab="Alamat" key="3">
          <Divider orientation="left">
            {<Title level={2}>Data Alamat</Title>}
          </Divider>
          <Button style={{ marginBottom: 20 }} type="primary">
            Tambah+
          </Button>
          <List
            itemLayout="vertical"
            bordered
            dataSource={profile?.data.daftar_alamat}
            renderItem={(profile) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title={<a href="https://ant.design">{profile.nama}</a>}
                />
                <Space direction="vertical">
                  <Space>
                    <Typography.Title style={{ fontSize: 16 }}>
                      Nomor HP
                    </Typography.Title>
                    <Typography.Text style={{ fontSize: 16 }}>
                      {profile.nomor_telepon}
                    </Typography.Text>
                  </Space>
                  <Space>
                    <Typography.Title style={{ fontSize: 16 }}>
                      Alamat
                    </Typography.Title>
                    <Typography.Text style={{ fontSize: 16 }}>
                      {profile.alamat_lengkap}
                    </Typography.Text>
                  </Space>
                  <Space>
                    <Button style={{ marginRight: 20 }} type="primary">
                      Edit
                    </Button>
                    <Button danger type="primary">
                      Hapus
                    </Button>
                  </Space>
                </Space>
              </List.Item>
            )}
          />
        </TabPane>
        <TabPane tab="Wishlist" key="4">
          <Divider orientation="left">
            {<Title level={2}>Wishlist Anda</Title>}
          </Divider>
          <List
            grid={{
              gutter: 16,
              column: 4,
            }}
            dataSource={products?.filter((product) => {
              return product.id_produk === 1;
            })}
            renderItem={(product) => (
              <List.Item
                style={{ alignItems: "center" }}
                key={product.nama_produk}
                actions={[
                  <Space>
                    <Button style={{ width: 50 }} type="primary">
                      <ShoppingCartOutlined />
                    </Button>
                    <Button style={{ width: 50 }} type="primary">
                      <DeleteOutlined />
                    </Button>
                  </Space>,
                ]}
              >
                <Badge
                  style={{ backgroundColor: "#52c41a" }}
                  count={product.terjual}
                />
                <Link to="/detailproduct1">
                  <Card
                    style={{ width: 240, textAlign: "center" }}
                    hoverable
                    cover={
                      <img
                        style={{ width: 240, height: 190 }}
                        alt="product"
                        src={`http://mp.comdev.id/assets/foto_produk/${product.foto[0].foto_produk}`}
                      />
                    }
                  >
                    <Meta
                      style={{ textAlign: "center" }}
                      title={product.nama_produk}
                    />
                    {`Rp.${product.harga_jual}`}
                  </Card>
                </Link>
              </List.Item>
            )}
          />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Profile;
