import { useEffect, useState } from "react";
import MainCard from "../../MainCard";
import { Image } from "@mantine/core";
import {getEventTani} from "../../../infrastructure"
const KegiatanTani = () => {
  const [datas, setDatas] = useState([])
  useEffect(() => {
    getEventTani().then((data)=>setDatas(data))
  }, [])
  const formatedDate = (date)=>{
    const currentDate = new Date(date)
    return currentDate.getDate() + " " + currentDate.toLocaleString('id', { month: 'long' }) + " " + currentDate.getFullYear();
  }
  return (
      <MainCard row transparent noPadding center className="flex-wrap">
        {datas?.map((data, i) => (
          <MainCard width="350px" key={i}>
            <p className="text-2xl font-bold underline text-green-primary">
              {data?.namaKegiatan}
            </p>
            <div className="flex">
              <Image
                src={data.fotoKegiatan}
                width={50}
                height={100}
                alt={data?.namaKegiatan}
                withPlaceholder
              />
              <div className="pl-3">
                <p className="font-bold text-gray-primary">{data?.tanggalAcara ? formatedDate(data?.tanggalAcara.split("T")):''}</p>
                <p className="font-bold text-orange-primary">
                  Waktu Mulai : {data?.waktuAcara.split("-")[0].trim() !== '' ? `${data?.waktuAcara.split("-")[0]} WIB` : "-"}
                </p>
                <p className="font-bold text-orange-primary">
                  Waktu Pulang : {data?.waktuAcara.split("-")[1].trim() !== '' ? `${data?.waktuAcara.split("-")[1]} WIB` : "-"}
                </p>
                <p className="underline font-bold text-green-secondary">
                  Tempat : {data?.tempat}
                </p>
              </div>
            </div>
          </MainCard>
        ))}
      </MainCard>
  )
}

export default KegiatanTani