import { useQuery } from "react-query";

type Foto = [
  {
    id_foto_produk: number;
    foto_produk: string;
  },
  {
    id_foto_produk: number;
    foto_produk: string;
  }
];

type Pelapak = {
  id_pelapak: number;
  nama_toko: string;
  foto_pelapak: string;
  alamat: string;
};

export type Products = {
  nama_produk: string;
  id_produk: number;
  harga_jual: string;
  berat: string;
  stok: string;
  terjual: string;
  foto: Foto;
  keterangan: string;
  pelapak: Pelapak;
};

const requestGetProducts = async () => {
  const res = await fetch("http://mp.comdev.id/api/produk");
  return res.json();
};

export default function useFetchProducts() {
  const { data: products } = useQuery<Products[]>(
    "products",
    requestGetProducts
  );

  return { products };
}
