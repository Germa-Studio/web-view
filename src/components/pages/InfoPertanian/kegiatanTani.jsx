import { useEffect, useState, useRef } from "react";
import MainCard from "../../MainCard";
import { Image } from "@mantine/core";
import {getEventTani} from "../../../infrastructure"
import {motion} from "framer-motion"
const KegiatanTani = () => {
  const [width, setWidth] = useState(0)
  const carousel = useRef()
  const [datas, setDatas] = useState([
    {
      namaKegiatan  : "Kegiatan a",
      fotoKegiatan  : 'https://cdn.idntimes.com/content-images/community/2021/08/photo-1521841313031-a1485f842d34-08019ae11deb84b03f6baff2c7b6601c-9715d48c6ead6920e0b69419f17bd601.jpg',
      tanggalAcara  : "10 Desember 2023",
      waktuAcara    : "09:00-14:00",
      tempat        : "ruang tak terbatas" 
    },
    {
      namaKegiatan  : "Kegiatan b",
      fotoKegiatan  : 'https://cdn.idntimes.com/content-images/community/2021/08/photo-1521841313031-a1485f842d34-08019ae11deb84b03f6baff2c7b6601c-9715d48c6ead6920e0b69419f17bd601.jpg',
      tanggalAcara  : "10 Desember 2023",
      waktuAcara    : "09:00-14:00",
      tempat        : "ruang tak terbatas" 
    },
    {
      namaKegiatan  : "Kegiatan c",
      fotoKegiatan  : 'https://cdn.idntimes.com/content-images/community/2021/08/photo-1521841313031-a1485f842d34-08019ae11deb84b03f6baff2c7b6601c-9715d48c6ead6920e0b69419f17bd601.jpg',
      tanggalAcara  : "10 Desember 2023",
      waktuAcara    : "09:00-14:00",
      tempat        : "ruang tak terbatas" 
    },
    {
      namaKegiatan  : "Kegiatan d",
      fotoKegiatan  : 'https://cdn.idntimes.com/content-images/community/2021/08/photo-1521841313031-a1485f842d34-08019ae11deb84b03f6baff2c7b6601c-9715d48c6ead6920e0b69419f17bd601.jpg',
      tanggalAcara  : "10 Desember 2023",
      waktuAcara    : "09:00-14:00",
      tempat        : "ruang tak terbatas" 
    },
    {
      namaKegiatan  : "Kegiatan e",
      fotoKegiatan  : 'https://cdn.idntimes.com/content-images/community/2021/08/photo-1521841313031-a1485f842d34-08019ae11deb84b03f6baff2c7b6601c-9715d48c6ead6920e0b69419f17bd601.jpg',
      tanggalAcara  : "10 Desember 2023",
      waktuAcara    : "09:00-14:00",
      tempat        : "ruang tak terbatas" 
    }
  ])
  // useEffect(() => {
  //   getEventTani().then((data)=>setDatas(data))
  // }, [])
  // const formatedDate = (date)=>{
  //   const currentDate = new Date(date)
  //   return currentDate.getDate() + " " + currentDate.toLocaleString('id', { month: 'long' }) + " " + currentDate.getFullYear();
  // }
  useEffect(() => {
    // console.log(carousel.current.scrollWidth - carousel.current.offsetWidth)
    // console.log(carousel.current.scrollWidth, carousel.current.offsetWidth)
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
      <MainCard row transparent noPadding center className="flex-wrap">
        <motion.div className="carousel overflow-hidden cursor-grab" ref={carousel}>
          <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className="inner-carousel inline-flex">
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
                  />
                  <div className="pl-3">
                    <p className="font-bold text-gray-primary">{data.tanggalAcara}</p>
                    <p className="font-bold text-orange-primary">
                      Waktu Mulai : {data?.waktuAcara.split("-")[0].trim() !== '' ? `${data?.waktuAcara.split("-")[0]} WIB` : "-"}
                    </p>
                    <p className="font-bold text-orange-primary">
                      Waktu Pulang : {data?.waktuAcara.split("-")[1].trim() !== '' ? `${data?.waktuAcara.split("-")[1]} WIB` : "-"}
                    </p>
                    <p className="underline font-bold text-green-secondary">
                      Tempat : {data?.tempat}
                    </p>
                    {/* <p className="font-bold text-gray-primary">{data?.tanggalAcara ? formatedDate(data?.tanggalAcara.split("T")):''}</p>
                    <p className="font-bold text-orange-primary">
                      Waktu Mulai : {data?.waktuAcara.split("-")[0].trim() !== '' ? `${data?.waktuAcara.split("-")[0]} WIB` : "-"}
                    </p>
                    <p className="font-bold text-orange-primary">
                      Waktu Pulang : {data?.waktuAcara.split("-")[1].trim() !== '' ? `${data?.waktuAcara.split("-")[1]} WIB` : "-"}
                    </p>
                    <p className="underline font-bold text-green-secondary">
                      Tempat : {data?.tempat}
                    </p> */}

                  </div>
                </div>
              </MainCard>
            ))}
          </motion.div>
        </motion.div>
      </MainCard>
  )
}

export default KegiatanTani