import MainCard from "../components/MainCard";
import { Image } from "@mantine/core";
import KegiatanTani from "../components/pages/InfoPertanian/kegiatanTani"
import BeritaTani from "../components/pages/InfoPertanian/beritaTani";
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
          <KegiatanTani/>
        </MainCard>
      </MainCard>
      <BeritaTani/>
    </section>
  );
}
