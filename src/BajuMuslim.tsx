import React from "react";
import { Image, Typography, Button, InputNumber, Collapse } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

type Products = {
  title: string;
  image: string;
  price: number;
};

function BajuMuslim() {
  const { Title } = Typography;

  const { Panel } = Collapse;

  const product: Products = {
    title: "Baju Muslim",
    image:
      "https://s0.bukalapak.com/img/00513450051/large/Baju_Koko_Modern_Semi_Slimfit___Kemeja_Muslim___Gamis_Pria__.jpg",
    price: 120.0,
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: 600, marginRight: 10 }}>
        <Image height={500} width={600} src={product.image} />
        <Button style={{ marginRight: 15, marginTop: 40 }} type="primary">
          {" "}
          <ShoppingCartOutlined /> Tambahkan Keranjang
        </Button>
        <InputNumber size="small" min={0} max={20} defaultValue={1} />
      </div>
      <div>
        <Title level={1}>{product.title}</Title>
        <Title level={2}>{product.price}</Title>
        <Collapse style={{ width: 600 }} defaultActiveKey={["1", "2", "3"]}>
          <Panel header="Deskripsi 1" key="1">
            <p>
              Nama produk, photo dan deskripsi dari toko kami yang di pakai toko
              lain dengan harga murah, kakak harus lebih smart, teliti dan
              berhati hati. Orderan langsung dikirim di hari pemesanan setelah
              melakukan transaksi atau transfer.
            </p>
          </Panel>
          <Panel header="Deskripsi 2" key="2">
            <p>
              Queen_wedges309 mengutamakan kepuasan customer ( silahkan kakak
              cek di ulasan kami ya kak). Harga menjamin kualitas
              barang.Pengemasan dijamin rapih.Barang yang dikirim sesuai dengan
              pesanan dan gambar.
            </p>
          </Panel>
          <Panel header="Deskripsi 3" key="3">
            <p>
              100% barang baru melalui kualitas kontrol yang baik.Kami jual
              produk lokal dengan harga kompetitif dan kualitas terbaik ya kak,
              dan bisa di bandingkan dengan sebelah.Melayani 24 jam, dengan fast
              respon dan ramah. Utamakan tanyakan dulu barang yang mau dipesan,
              karena barang tidak selalu ready.
            </p>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
}

export default BajuMuslim;
