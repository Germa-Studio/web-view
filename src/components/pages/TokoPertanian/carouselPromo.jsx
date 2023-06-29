import { Carousel } from "@mantine/carousel";

export default function Demo() {
  return (
    <Carousel mx="auto" className="pt-5">
      <Carousel.Slide>
        <div className="flex px-3 gap-5">
          <div className="cursor-pointer hover:py-2 hover:px-2 hover:bg-green-primary hover:rounded-md">
            <img
              src="/image/icon-merujaya.png"
              width="160"
              height="180"
              alt="Icon Merujaya"
            />
          </div>
          <div className="cursor-pointer hover:py-2 hover:px-2 hover:bg-green-primary hover:rounded-md">
            <img
              src="/image/icon-alamjayatani.png"
              width="160"
              height="180"
              alt="con Alam Jaya Tani"
            />
          </div>
        </div>
      </Carousel.Slide>
      <Carousel.Slide>
        <div className="flex px-3 gap-5">
          <div className="cursor-pointer hover:py-2 hover:px-2 hover:bg-green-primary hover:rounded-md">
            <img
              src="/image/icon-sida.png"
              width="160"
              height="180"
              alt="Icon Sida"
            />
          </div>
          <div className="cursor-pointer hover:py-2 hover:px-2 hover:bg-green-primary hover:rounded-md">
            <img
              src="/image/icon-sam.png"
              width="160"
              height="180"
              alt="con Syari'ah Mandiri Agro"
            />
          </div>
        </div>
      </Carousel.Slide>
      <Carousel.Slide>
        <div className="flex px-3 gap-5">
          <div className="cursor-pointer hover:py-2 hover:px-2 hover:bg-green-primary hover:rounded-md">
            <img
              src="/image/icon-mulyatani.png"
              width="160"
              height="180"
              alt="Icon Mulya Tani"
            />
          </div>
          <div className="cursor-pointer hover:py-2 hover:px-2 hover:bg-green-primary hover:rounded-md">
            <img
              src="/image/icon-jagoantani.png"
              width="160"
              height="180"
              alt="Icon Jagoan Tani"
            />
          </div>
        </div>
      </Carousel.Slide>
    </Carousel>
  );
}
