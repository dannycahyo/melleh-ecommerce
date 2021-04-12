import { useQuery } from "react-query";

export type Results = [
  {
    province_id: string;
    province: string;
  }
];

type RajaOngkir = {
  query: [];
  status: {
    code: number;
    description: string;
  };
  results: Results;
};

type Provinsi = {
  rajaongkir: RajaOngkir;
};

type Address = {
  provinsi: Provinsi;
};

const requestGetAddress = async () => {
  const res = await fetch(`${process.env.REACT_APP_ADDRESS_URL}`);
  return res.json();
};

export default function useFetchAddres() {
  const { data: address } = useQuery<Address>("address", requestGetAddress);

  return {
    address,
  };
}
