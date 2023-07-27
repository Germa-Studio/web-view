import { useEffect, useState } from "react";
import MainCard from "../../MainCard";
import { Image } from "@mantine/core";
import {GetInfoTani} from "../../../infrastructure"
const BeritaTani = () => {
  const [datas, setDatas] = useState([])
  useEffect(() => {
    GetInfoTani().then((data)=>setDatas(data))
  }, [])
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
                  withPlaceholder
                />
                <MainCard transparent noPadding>
                  <div className="flex justify-between">
                    <p className="text-gray-primary">
                      <span className="font-bold">Dibuat Oleh : </span>
                      {data?.createdBy}
                    </p>
                    <p>
                      <span className="font-bold">Terbit : </span>{data?.tanggal?.split("T")[0]}
                    </p>
                  </div>
                  <p>
                    <span dangerouslySetInnerHTML={{ __html: data?.isi }} />
                  </p>
                </MainCard>
              </MainCard>
            </MainCard>
          </MainCard>
        ))}
    </>
      
  )
}

export default BeritaTani