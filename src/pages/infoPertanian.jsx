import MainCard from "../components/MainCard";
import { Image } from "@mantine/core";
import KegiatanTani from "../components/pages/InfoPertanian/kegiatanTani"
import BeritaTani from "../components/pages/InfoPertanian/beritaTani";
import Slider from "../components/pages/InfoPertanian/Slider";

export default function InfoPertanian() {
  return (
    <section className="pb-5 max-w-[90%] mx-auto">
      <MainCard row transparent center>
        <MainCard width="80%">
          {/* <Image src="/image/icon-sawah.png" alt="Icon Sawah" /> */}
          <Slider/>
        </MainCard>
      </MainCard>
      <MainCard transparent center>
        <MainCard width="80%">
          <p className="text-center text-xl md:text-2xl font-bold text-green-primary ">
            ACARA KEGIATAN PERTANIAN
          </p>
          <KegiatanTani/>
        </MainCard>
      </MainCard>
      <BeritaTani/>
    </section>
  );
}
