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

export type Products = {
  nama_produk: string;
  id_produk: number;
  harga_jual: string;
  stok: string;
  terjual: string;
  foto: Foto;
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