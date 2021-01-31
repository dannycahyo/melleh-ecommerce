import React from "react";
import useFetchProducts, { Products } from "./useFetchProducts";
import { ColumnsType } from "antd/lib/table";
import {
  Table,
  Button,
  InputNumber,
  Image,
  Typography,
  Card,
  Checkbox,
} from "antd";

function Keranjang() {
  const { products } = useFetchProducts();

  const product1 = products?.find((product) => {
    return product.id_produk === 1;
  });

  const columns: ColumnsType<Products> = [
    {
      title: "",
      render: () => {
        return <Checkbox />;
      },
    },
    {
      title: "Produk",
      render: () => {
        return (
          <Image
            height={130}
            width={140}
            src={`http://mp.comdev.id/assets/foto_produk/${product1?.foto[0].foto_produk}`}
            children={
              <Typography.Title level={4}>
                {product1?.nama_produk}
              </Typography.Title>
            }
          />
        );
      },
    },
    {
      title: "Harga",
      dataIndex: "harga_jual",
    },
    {
      title: "Jumlah",
      render: () => {
        return <InputNumber min={1} max={100} defaultValue={1} />;
      },
    },
    {
      title: "Sub Harga",
      dataIndex: "harga_jual",
    },
    {
      title: "",
      render: () => {
        return (
          <Button type="primary" danger>
            Hapus
          </Button>
        );
      },
    },
  ];

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "60%", marginRight: 40 }}>
        <Table
          dataSource={products?.filter((product) => {
            return product.id_produk === 1;
          })}
          columns={columns}
        />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button type="primary">Lanjut Belanja</Button>
          <Button type="primary">Lanjut Checkout</Button>
        </div>
      </div>
      <div style={{ width: "30%", height: 130, marginLeft: 50 }}>
        <Card
          title="Total"
          extra={
            <Typography.Title>{`Rp. ${product1?.harga_jual}`}</Typography.Title>
          }
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Image
              height={50}
              width={150}
              src="http://mp.comdev.id/assets/mpnj/images/misc/payments.png"
            />
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Keranjang;
