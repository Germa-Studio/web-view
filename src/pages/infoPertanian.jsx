// eslint-disable-next-line no-unused-vars
import React from "react";
import MainCard from "../components/MainCard";
// eslint-disable-next-line no-unused-vars
import InputCrud from "../components/pages/infoTani/IconCrud";
import { Image } from "@mantine/core";
export default function InfoPertanian() {
  return (
    <section className="pb-5">
      <MainCard row transparent center>
        <MainCard width="80%">
          <Image src="/image/icon-sawah.png" alt="Icon Sawah" />
        </MainCard>
      </MainCard>

      <MainCard transparent center>
        <MainCard width="80%">
          <p className="text-center text-xl font-bold underline text-green-primary ">
            ACARA KEGIATAN PERTANIAN
          </p>
          <MainCard row transparent noPadding center>
            {[...Array(3)]?.map((_, i) => (
              <MainCard width="30%" key={i}>
                <p className="text-2xl font-bold underline text-green-primary">
                  Penyuluhan Tembakau
                </p>
                <div className="flex">
                  <Image
                    src="/image/icon-penyuluhan.png"
                    width={50}
                    height={100}
                    alt="Icon Penyuluhan"
                  />
                  <div className="pl-3">
                    <p className="font-bold text-gray-primary">31 JUNI 2023</p>
                    <p className="font-bold text-orange-primary">
                      Waktu Mulai : 08.00 WIB
                    </p>
                    <p className="font-bold text-orange-primary">
                      Waktu Pulang : 16.00 WIB
                    </p>
                    <p className="underline font-bold text-green-secondary">
                      Tempat : Balai Merdeka Jaya
                    </p>
                  </div>
                </div>
              </MainCard>
            ))}
          </MainCard>
        </MainCard>
      </MainCard>

      {[...Array(3)]?.map((_, i) => (
        <MainCard row transparent center gap="0" key={i}>
          <MainCard
            width="80%"
            radius="0"
            gap="0"
            // style={{ border: "solid 1px black" }}
          >
            <h1 className="font-bold underline text-center text-green-primary">
              JUDUL TERLALU BESAR
            </h1>
            <MainCard transparent row>
              <Image
                width={200}
                height={120}
                src={null}
                alt="With default placeholder"
                withPlaceholder
              />
              <MainCard transparent noPadding>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  ex corrupti veniam ut et officiis in omnis minima culpa sit
                  dignissimos consequuntur, tempora asperiores eum molestiae
                  ratione deserunt consectetur nisi suscipit sint! Nostrum
                  fugiat provident laudantium, unde et saepe ratione eligendi
                  mollitia aut tempore quod ullam animi id pariatur totam.
                  <span className="italic cursor-pointer font-bold text-green-primary">
                    ... (Baca Selengkapnya)
                  </span>
                </p>
                <div className="flex justify-between">
                  <p className="text-gray-primary">
                    <span className="font-bold">Dibuat Oleh : </span>
                    Mr. Surono
                  </p>
                  <p>
                    <span className="font-bold">Terbit : </span>26/10/2023
                  </p>
                </div>
              </MainCard>
            </MainCard>
          </MainCard>
        </MainCard>
      ))}
    </section>
  );
}
