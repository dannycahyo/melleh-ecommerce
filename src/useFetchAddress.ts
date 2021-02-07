import { useQuery } from "react-query"

type RajaOngkir = {
    query:[],
    status: {
        code: number,
        description: string
    },
    results: [
        {
            province_id:string,
            province:string
        },                                      
    ]
}

type Provinsi = {
    rajaongkir: RajaOngkir
}

export type Address = {
    provinsi: Provinsi
}

const requestGetAddress = async () => {
    const res = await fetch("http://mp.comdev.id/api/gateway/provinsi")
    return res.json()
}

export default function useFetchAddres () {
    const { data: address } = useQuery<Address>("address", requestGetAddress)

    return {
        address
    }
}