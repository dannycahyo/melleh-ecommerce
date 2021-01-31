import React from "react";
import useFetchProducts from "./useFetchProducts";
import { Image, Typography, Button, InputNumber } from "antd";
import {
  ShoppingCartOutlined,
  MessageOutlined,
  LikeOutlined,
} from "@ant-design/icons";

function DetailProduct1() {
  const { products } = useFetchProducts();

  const { Title, Paragraph } = Typography;

  const product1 = products?.find((product) => {
    return product.id_produk === 1;
  });

  return (
    <div style={{ display: "flex", marginBottom: 30 }}>
      <div style={{ width: 450, marginRight: 50 }}>
        <Image
          width={450}
          height={450}
          src={`http://mp.comdev.id/assets/foto_produk/${product1?.foto[0].foto_produk}`}
        />
      </div>
      <div>
        <Title level={1}>{product1?.nama_produk}</Title>
        <Title level={2}>Harga Produk {`Rp. ${product1?.harga_jual}`}</Title>
        <Paragraph style={{ fontSize: 17 }}>{product1?.keterangan}</Paragraph>
        <Button style={{ marginRight: 15, marginTop: 20 }} type="primary">
          {" "}
          <ShoppingCartOutlined /> Tambahkan Keranjang
        </Button>
        <InputNumber size="small" min={0} max={20} defaultValue={1} />
        <div style={{ marginTop: 30 }}>
          <Title level={1}>Informasi Pelapak</Title>
          <div style={{ display: "flex" }}>
            <Image
              width={120}
              height={70}
              src={product1?.pelapak.foto_pelapak}
            />
            <Title style={{ marginLeft: 10 }} level={3}>
              {product1?.pelapak.nama_toko}
            </Title>
          </div>
          <Title type="secondary" level={5}>
            {product1?.pelapak.alamat}
          </Title>
          <Button type="primary">
            <MessageOutlined />
            Hubungi Pelapak
            <LikeOutlined />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DetailProduct1;
