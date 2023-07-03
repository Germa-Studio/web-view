// eslint-disable-next-line no-unused-vars
import React from "react";
import MainCard from "../components/MainCard";
// eslint-disable-next-line no-unused-vars
import InputCrud from "../components/pages/infoTani/IconCrud";
import { Image } from "@mantine/core";
export default function InfoPertanian() {
  return (
    <section className="pb-5">
      {[...Array(3)]?.map((_, i) => (
        <MainCard row transparent center gap="0" key={i}>
          <MainCard
            width="60%"
            radius="0"
            gap="0"
            style={{ border: "solid 1px black" }}
          >
            <h1 className="font-bold">JUDUL TERLALU BESAR</h1>
            <MainCard transparent row>
              <Image
                width={200}
                height={120}
                src={null}
                alt="With default placeholder"
                withPlaceholder
              />
              <MainCard transparent noPadding>
                <MainCard row transparent noPadding>
                  <p>
                    <span className="font-medium">Dibuat Oleh : </span>Mr.
                    Surono
                  </p>
                  <p>26/10/2023</p>
                  <p>
                    <span className="font-medium">Status : </span>
                    Lewat/Sudah/AkanTerlakasana
                  </p>
                </MainCard>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  ex corrupti veniam ut et officiis in omnis minima culpa sit
                  dignissimos consequuntur, tempora asperiores eum molestiae
                  ratione deserunt consectetur nisi suscipit sint! Nostrum
                  fugiat provident laudantium, unde et saepe ratione eligendi
                  mollitia aut tempore quod ullam animi id pariatur totam.
                  <span className="italic cursor-pointer">
                    ... (Baca Selengkapnya)
                  </span>
                </p>
              </MainCard>
            </MainCard>
          </MainCard>
        </MainCard>
      ))}
    </section>
  );
}
