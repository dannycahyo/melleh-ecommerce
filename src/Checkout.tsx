import React, { useState } from "react";
import useFetchProducts, { Products } from "./useFetchProducts";
import useFetchProfile from "./useFetchProfile";
import {
  Divider,
  Button,
  Typography,
  Table,
  Modal,
  Card,
  Image,
  Space,
  List,
  Avatar,
  Select,
} from "antd";
import { ColumnsType } from "antd/lib/table";

function Checkout() {
  const [isAddressModalVisible, setIsAddressModalVisible] = useState<boolean>(
    false
  );

  const [isCourierModalVisible, setIsCourierModalVisible] = useState<boolean>(
    false
  );

  const handleShowAddressModal = () => {
    setIsAddressModalVisible(true);
  };

  const handleCancelAddressModal = () => {
    setIsAddressModalVisible(false);
  };

  const handleOkAddressModal = () => {
    setIsAddressModalVisible(false);
  };

  const handleShowCourierModal = () => {
    setIsCourierModalVisible(true);
  };

  const handleCancelCourierModal = () => {
    setIsCourierModalVisible(false);
  };

  const handleOkCourierModal = () => {
    setIsCourierModalVisible(false);
  };

  const { profiles } = useFetchProfile();

  const { products } = useFetchProducts();

  const product1 = products?.find((product) => {
    return product.id_produk === 1;
  });

  const { Option } = Select;

  const columns: ColumnsType<Products> = [
    {
      title: <Typography.Title level={5}>Produk</Typography.Title>,
      render: () => {
        return (
          <Image
            height={130}
            width={140}
            src={`http://mp.comdev.id/assets/foto_produk/${product1?.foto[0].foto_produk}`}
          />
        );
      },
    },
    {
      title: "",
      dataIndex: "nama_produk",
    },
    {
      title: <Typography.Title level={5}>Berat</Typography.Title>,
      render: () => {
        return <Typography.Text>{`${product1?.berat}gram`}</Typography.Text>;
      },
    },
    {
      title: <Typography.Title level={5}>Harga</Typography.Title>,
      render: () => {
        return (
          <Typography.Text>{`Rp.${product1?.harga_jual}`}</Typography.Text>
        );
      },
    },
    {
      title: <Typography.Title level={5}>Jumlah</Typography.Title>,
      render: () => {
        return <Typography.Text>1(satu)</Typography.Text>;
      },
    },
    {
      title: <Typography.Title level={5}>Sub Harga</Typography.Title>,
      render: () => {
        return (
          <Typography.Text>{`Rp.${product1?.harga_jual}`}</Typography.Text>
        );
      },
    },
  ];

  const columns2 = [
    {
      title: <Typography.Title level={5}>Kurir</Typography.Title>,
      render: () => {
        return <Typography.Title>-</Typography.Title>;
      },
    },
    {
      title: <Typography.Title level={5}>Service</Typography.Title>,
      render: () => {
        return <Typography.Title>-</Typography.Title>;
      },
    },
    {
      title: <Typography.Title level={5}>Ongkir</Typography.Title>,
      render: () => {
        return <Typography.Title>-</Typography.Title>;
      },
    },
    {
      title: <Typography.Title level={5}>Etd</Typography.Title>,
      render: () => {
        return <Typography.Title>-</Typography.Title>;
      },
    },
  ];

  return (
    <div>
      <div style={{ marginBottom: 15 }}>
        <Space>
          <Typography.Title level={4}>Pilih Alamat Pengiriman</Typography.Title>
          <Button type="primary" onClick={handleShowAddressModal}>
            Ubah
          </Button>
          <Modal
            title={
              <Typography.Title level={3}>
                Pilih Alamat Pengiriman
              </Typography.Title>
            }
            visible={isAddressModalVisible}
            onCancel={handleCancelAddressModal}
            onOk={handleOkAddressModal}
          >
            <List
              style={{ width: "100%" }}
              itemLayout="vertical"
              size="large"
              bordered
              dataSource={profiles?.data.daftar_alamat}
              renderItem={(profile) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title={<a href="https://ant.design">{profile.nama}</a>}
                  />
                  <Space direction="vertical">
                    <Typography.Paragraph>
                      {`${profile.nomor_telepon},${profile.alamat_lengkap},${profile.nama_kota},${profile.nama_provinsi},${profile.kode_pos}`}
                    </Typography.Paragraph>
                    <Button type="primary">Pilih</Button>
                  </Space>
                </List.Item>
              )}
            />
          </Modal>
        </Space>
        <Divider />
        <Typography.Paragraph style={{ fontSize: 16 }}>
          {`${profiles?.data.daftar_alamat[0].nomor_telepon},${profiles?.data.daftar_alamat[0].alamat_lengkap},${profiles?.data.daftar_alamat[0].nama_kota},${profiles?.data.daftar_alamat[0].nama_provinsi},${profiles?.data.daftar_alamat[0].kode_pos}`}
        </Typography.Paragraph>
        <Typography.Title level={4}>
          {product1?.pelapak.nama_toko}
        </Typography.Title>
      </div>

      <div style={{ display: "flex" }}>
        <div style={{ width: "60%" }}>
          <Table
            dataSource={products?.filter((product) => {
              return product.id_produk === 1;
            })}
            columns={columns}
          />
          <div style={{ display: "flex" }}>
            <Button
              style={{ marginTop: 20 }}
              onClick={handleShowCourierModal}
              type="primary"
            >
              Pilih Kurir
            </Button>
            <Modal
              title={
                <Typography.Title level={3}>
                  {`Pilih Kurir Untuk ${product1?.pelapak.nama_toko}`}
                </Typography.Title>
              }
              visible={isCourierModalVisible}
              onOk={handleOkCourierModal}
              onCancel={handleCancelCourierModal}
            >
              <Select style={{ width: "100%" }}>
                <Option value="jne">JNE</Option>
                <Option value="jnt">JNT</Option>
                <Option value="wahana">Wahana</Option>
              </Select>
            </Modal>

            <Table
              dataSource={products?.filter((product) => {
                return product.id_produk === 1;
              })}
              columns={columns2}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button style={{ width: 100 }} type="primary">
              Batal
            </Button>
            <Button type="primary">Bayar Sekarang</Button>
          </div>
        </div>
        <div style={{ width: "30%", marginLeft: 20 }}>
          <Card
            title={
              <Space direction="vertical">
                <Space size={150}>
                  <Typography.Text>Sub Total:</Typography.Text>
                  <Typography.Text>{`Rp.${product1?.harga_jual}`}</Typography.Text>
                </Space>
                <Space size={180}>
                  <Typography.Text>Ongkir:</Typography.Text>
                  <Typography.Text>Rp. 0</Typography.Text>
                </Space>
                <Space size={185}>
                  <Typography.Text>Total:</Typography.Text>
                  <Typography.Title
                    level={4}
                  >{`Rp.${product1?.harga_jual}`}</Typography.Title>
                </Space>
              </Space>
            }
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Image
                height={40}
                width={120}
                src="http://mp.comdev.id/assets/mpnj/images/misc/payments.png"
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
