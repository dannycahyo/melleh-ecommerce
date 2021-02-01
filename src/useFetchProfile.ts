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
  const res = await fetch("http://mp.comdev.id/api/konsumen/profil/1");
  return res.json();
};

export default function useFetchProfile() {
  const { data: profiles } = useQuery<Profile>("profile", requestGetProfile);

  return {
    profiles,
  };
}
