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
} from "antd";
import { ColumnsType } from "antd/lib/table";

function Checkout() {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const handleShowModal = () => {
    setIsModalVisible(true);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  const handleModalOk = () => {
    setIsModalVisible(false);
  };

  const { profile } = useFetchProfile();

  const { products } = useFetchProducts();

  const product1 = products?.find((product) => {
    return product.id_produk === 1;
  });

  const columns: ColumnsType<Products> = [
    {
      title: <Typography.Title level={5}>Produk</Typography.Title>,
    },
    {
      title: <Typography.Title level={5}>Berat</Typography.Title>,
    },
    {
      title: <Typography.Title level={5}>Harga</Typography.Title>,
    },
    {
      title: <Typography.Title level={5}>Jumlah</Typography.Title>,
    },
    {
      title: <Typography.Title level={5}>Sub Harga</Typography.Title>,
    },
  ];

  const columns2: ColumnsType<object> = [
    {
      title: <Typography.Title level={5}>Kurir</Typography.Title>,
    },
    {
      title: <Typography.Title level={5}>Service</Typography.Title>,
    },
    {
      title: <Typography.Title level={5}>Ongkir</Typography.Title>,
    },
    {
      title: <Typography.Title level={5}>Etd</Typography.Title>,
    },
  ];

  return (
    <div>
      <div style={{ marginBottom: 15 }}>
        <Typography.Title level={4}>Pilih Alamat Pengiriman</Typography.Title>
        <Divider type="vertical" />
        <Button type="primary" onClick={handleShowModal}>
          Ubah
        </Button>
        <Modal
          title={
            <Typography.Title level={3}>
              Pilih Alamat Pengiriman
            </Typography.Title>
          }
          visible={isModalVisible}
          onCancel={handleModalCancel}
          onOk={handleModalOk}
        >
          <List />
        </Modal>
        <Divider />
        <Typography.Text style={{ fontSize: 16 }}>
          {profile?.data.daftar_alamat[1].alamat_lengkap}
        </Typography.Text>
      </div>
      <Divider>
        <Typography.Title level={3}>{product1?.pelapak}</Typography.Title>
      </Divider>
      <div>
        <Table
          dataSource={products?.filter((product) => {
            return product.id_produk === 1;
          })}
          columns={columns}
        />
        <Card
          title={
            <Space direction="vertical">
              <Space></Space>
              <Space></Space>
              <Space></Space>
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
      <div>
        <Button type="primary">Pilih Kurir</Button>
        <Table columns={columns2} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button type="primary">Batal</Button>
        <Button type="primary">Bayar Sekarang</Button>
      </div>
    </div>
  );
}

export default Checkout;
