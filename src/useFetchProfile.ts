import { useQuery } from "react-query";

type Alamat = [
  {
    nama: string;
    nomor_telepon: string;
    nama_provinsi: string;
    nama_kota: string;
    nama_kecamatan: string;
    kode_pos: string;
    alamat_lengkap: string;
  },
  {
    nama: string;
    nomor_telepon: string;
    nama_provinsi: string;
    nama_kota: string;
    nama_kecamatan: string;
    kode_pos: string;
    alamat_lengkap: string;
  },
  {
    nama: string;
    nomor_telepon: string;
    nama_provinsi: string;
    nama_kota: string;
    nama_kecamatan: string;
    kode_pos: string;
    alamat_lengkap: string;
  }
];

type Data = {
  nama_lengkap: string;
  nomor_hp: string;
  email: string;
  daftar_alamat: Alamat;
};

type Profile = {
  data: Data;
};

const requestGetProfile = async () => {
  const res = await fetch(`${process.env.REACT_APP_PROFILE_URL}/1`);
  return res.json();
};

export default function useFetchProfile() {
  const { data: profiles } = useQuery<Profile>("profile", requestGetProfile);

  return {
    profiles,
  };
}
