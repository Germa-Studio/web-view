import { useEffect, useState } from "react";
import MainCard from "../../MainCard";
import { Image } from "@mantine/core";
import {GetInfoTani} from "../../../infrastructure"
const BeritaTani = () => {
  const [datas, setDatas] = useState([
    {
      judul       : "Sate Ponorogo A",
      fotoBerita  : 'https://th.bing.com/th/id/OIP.kNkzv0e_cYqG9YcJbYoC9gHaHa?rs=1&pid=ImgDetMain',
      createdBy   : "Kang Sate",
      tanggal      : "25 September 2023",
      isi         : 'Sate Ponorogo is a type of satay originating from Ponorogo, East Java. The chicken meat is very tender and the seasoning is absorbed. Sate Ponorogo is made through the process of soaking the spices, after which the roasting process will be carried out. Once it’s well grilled, the satay is placed on a plate and seasoned again with special spices. Once cooked, the satay is covered with peanut sauce.It is difficult to find a restaurant or seller of Sate Ayam Ponorogo outside of town in East Java, besides that it does not necessarily meet the original taste.'
    },
    {
      judul       : "Sate Ponorogo B",
      fotoBerita  : 'https://th.bing.com/th/id/OIP.kNkzv0e_cYqG9YcJbYoC9gHaHa?rs=1&pid=ImgDetMain',
      createdBy   : "Kang Sate",
      tanggal      : "25 September 2023",
      isi         : 'Sate Ponorogo is a type of satay originating from Ponorogo, East Java. The chicken meat is very tender and the seasoning is absorbed. Sate Ponorogo is made through the process of soaking the spices, after which the roasting process will be carried out. Once it’s well grilled, the satay is placed on a plate and seasoned again with special spices. Once cooked, the satay is covered with peanut sauce.It is difficult to find a restaurant or seller of Sate Ayam Ponorogo outside of town in East Java, besides that it does not necessarily meet the original taste.'
    },
    {
      judul       : "Sate Ponorogo C",
      fotoBerita  : 'https://th.bing.com/th/id/OIP.kNkzv0e_cYqG9YcJbYoC9gHaHa?rs=1&pid=ImgDetMain',
      createdBy   : "Kang Sate",
      tanggal      : "25 September 2023",
      isi         : 'Sate Ponorogo is a type of satay originating from Ponorogo, East Java. The chicken meat is very tender and the seasoning is absorbed. Sate Ponorogo is made through the process of soaking the spices, after which the roasting process will be carried out. Once it’s well grilled, the satay is placed on a plate and seasoned again with special spices. Once cooked, the satay is covered with peanut sauce.It is difficult to find a restaurant or seller of Sate Ayam Ponorogo outside of town in East Java, besides that it does not necessarily meet the original taste.'
    }
  ])
  // useEffect(() => {
  //   GetInfoTani().then((data)=>setDatas(data))
  // }, [])
  console.log(datas)
  return (
    <>
      {datas?.map((data, i) => (
          <MainCard row transparent center gap="0" key={i}>
            <MainCard
              width="80%"
              radius="0"
              gap="0"
            >
              <h1 className="font-bold underline text-center text-green-primary">
                {data?.judul}
              </h1>
              <MainCard transparent row>
                <Image
                  width={200}
                  height={120}
                  src={data?.fotoBerita}
                  alt="With default placeholder"
                />
                <MainCard transparent noPadding>
                  <div className="flex justify-between">
                    <p className="text-gray-primary">
                      <span className="font-bold">Dibuat Oleh : </span>
                      {data?.createdBy}
                    </p>
                    <p>
                      <span className="font-bold">Terbit : </span>{data?.tanggal?.split("T")[0]}
                      {/* <span className="font-bold">Terbit : </span>{data?.tanggal?.split("T")[0]} */}
                    </p>
                  </div>
                  <div className="text-justify">
                    {data?.isi}
                    {/* <span dangerouslySetInnerHTML={{ __html: data?.isi }} /> */}
                  </div>
                </MainCard>
              </MainCard>
            </MainCard>
          </MainCard>
        ))}
    </>
      
  )
}

export default BeritaTani