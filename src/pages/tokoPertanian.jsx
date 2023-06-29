// import React from 'react'
// import MainCard from "../components/MainCard"
import SearchBar from "../components/pages/TokoPertanian/searchBar";
// import HeadBar from "../components/pages/TokoPertanian/headBar"
import { Radio, Group } from "@mantine/core";
// export default function TokoPertanian() {
//   return (
//     <MainCard transparent noPadding>
//       <MainCard transparent noPadding row center width="100%">
//       <MainCard transparent noPadding row center gap={100} width="50%">
//         <SearchBar/>
//         <MainCard transparent noPadding width="50%">
//         <Radio.Group
//         size="xs"
//         >
//           <Group mt="xs">
//             <Radio value="populer" label="Populer" />
//             <Radio value="baru" label="Baru" />
//           </Group>
//         </Radio.Group>
//         </MainCard>
//         </MainCard>
//       </MainCard>
//       <MainCard transparent noPadding row center>
//         <HeadBar/>
//       </MainCard>
//       <MainCard transparent noPadding>

//       </MainCard>
// //     </MainCard>
//   )
// }
// eslint-disable-next-line no-unused-vars
import React from "react";
import MainCard from "../components/MainCard";
import { Image } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faContactBook } from "@fortawesome/free-solid-svg-icons";

export default function InfoPertanian() {
  return (
    <section>
      <MainCard transparent noPadding row center width="100%">
        <MainCard transparent noPadding row center gap={100} width="50%">
          <SearchBar />
          <MainCard>
            <Radio.Group>
              <Group>
                <Radio value="baru" label="Baru" />
                <Radio value="populer" label="Populer" />
              </Group>
            </Radio.Group>
          </MainCard>
        </MainCard>
      </MainCard>
      {[...Array(3)]?.map((_, i) => (
        <MainCard row transparent center gap="0" key={i}>
          <MainCard
            width="80%"
            radius="0"
            gap="0"
            style={{ border: "solid 1px black" }}
          >
            <MainCard transparent row>
              <MainCard transparent noPadding>
                <MainCard row transparent noPadding>
                  <p className="font-bold pl-12 md:pr-28">Nama Penjual</p>
                  <p className="font-bold pl-5 md:pr-40">Kecamatan</p>
                  <p className="font-bold md:pr-64">Produk</p>
                  <p className="font-bold pl-3">Kontak Telepon</p>
                </MainCard>
                <MainCard row transparent noPadding center>
                  <Image
                    width={200}
                    height={120}
                    src={null}
                    alt="With default placeholder"
                    withPlaceholder
                  />
                  <p className="font-medium md:pt-10 px-0 md:px-20">
                    Karanganyar
                  </p>
                  <Image
                    width={200}
                    height={120}
                    src={null}
                    alt="With default placeholder"
                    withPlaceholder
                  />
                  <a
                    href="wa.me/081223445667"
                    className="font-medium md:pt-10 px-0 md:text-3xl"
                  >
                    <FontAwesomeIcon
                      icon={faContactBook}
                      width={500}
                      className="text-green-600 ml-2"
                    />
                  </a>
                </MainCard>
              </MainCard>
            </MainCard>
          </MainCard>
        </MainCard>
      ))}
    </section>
  );
}
