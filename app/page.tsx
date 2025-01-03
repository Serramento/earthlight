"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { VideoBackground } from "@/components/ui/video-background";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { StaticImageData } from "next/image";
import Alacati from "../components/images/KayanFotolar/Alacati.jpg";
import BicycleAlacati from "../components/images/KayanFotolar/BicycleAlacati.jpg";
import blueVoyage from "../components/images/KayanFotolar/blueVoyage.jpg";
import Bodrum from "../components/images/KayanFotolar/Bodrum.jpg";
import CappadociaLandscape from "../components/images/KayanFotolar/CappadociaLandscape.jpg";
import cappadociaReligiousHistory from "../components/images/KayanFotolar/cappadociaReligiousHistory.jpg";
import EphesusCelsiusLibrary from "../components/images/KayanFotolar/EphesusCelsiusLibrary.jpg";
import EphesusRuins from "../components/images/KayanFotolar/EphesusRuins.jpg";
import HouseofVirginMary from "../components/images/KayanFotolar/HouseofVirginMary.jpg";
import LocalCuisine from "../components/images/KayanFotolar/LocalCuisine.jpg";
import ReligiousIstanbul from "../components/images/KayanFotolar/ReligiousIstanbul.jpg";
import seafood from "../components/images/KayanFotolar/seafood.jpg";
import SpiceBazaar from "../components/images/KayanFotolar/SpiceBazaar.jpg";
import Dilara from "../components/images/WhoWeAre/Dilara.png";
import Ugur from "../components/images/WhoWeAre/Ugur.png";
import DilarasLogo from "../components/images/DilarasLogo.png";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import CataDeVino from "../components/images/Carousel/CataDeVino.jpg";
import CeramoniaDeLosDerviches from "../components/images/Carousel/CeramoniaDeLosDerviches.jpg";
import ClaseDeCocinaPrivada from "../components/images/Carousel/ClaseDeCocinaPrivada.jpg";
import CulinariosDeEstambul from "../components/images/Carousel/CulinariosDeEstambul.jpg";
import DesayunaConLosGlobos from "../components/images/Carousel/DesayunaConLosGlobos.jpg";
import ExperienciaDeBicicletaEnCapadocia from "../components/images/Carousel/ExperienciaDeBicicletaEnCapadocia.jpg";
import ExperienciaDeBañoTurco from "../components/images/Carousel/ExperienciaDeBañoTurco.jpg";
import HelicopteroViajePorEncimaDeEstambul from "../components/images/Carousel/HelicopteroViajePorEncimaDeEstambul.png";
import ViajeEnGoleta from "../components/images/Carousel/ViajeEnGoleta.jpg";
import VisitaPrivadaDelAzoteaDeGranBazar from "../components/images/Carousel/VisitaPrivadaDelAzoteaDeGranBazar.jpeg";
import { InstagramEmbed } from "react-social-media-embed";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { FormField } from "@/components/contact/form-field";
import { contactFormSchema } from "@/lib/validations/contact";
import type { z } from "zod";
import { Instagram, Linkedin } from "lucide-react";

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<FormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // TODO: Implement EmailJS integration
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Message sent successfully!");
      form.reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <VideoBackground
          src="https://video.wixstatic.com/video/31fb8b_ff06ce69847e4497be30ffd66b923974/480p/mp4/file.mp4"
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-black/30" />{" "}
        {/* Reduced overlay opacity for better video visibility */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-row justify-between text-center text-white space-y-6 max-w-4xl px-4">
            <div className="-rotate-90 opacity-75">
              <Link href="/destinations">VOLUTA</Link>
              <div
                style={{
                  borderTop: "2px solid #fff opacity-75",
                  marginRight: 50,
                  height: 50,
                }}
              ></div>
            </div>
            <div className="relative ml-96">
              <h1 className="text-4xl md:text-6xl font-bold">Santa Sofia</h1>
              <div className="flex flex-row absolute right-0 mt-20">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="h-6 opacity-75 mt-1"
                />
                <p className="text-xl md:text-2xl opacity-75 pl-2">Estambul</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section>
        <div className="py-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#FAFAFA]">
          <div className="text-center">
            <h5 className="text-lg font-bold text-[#98B8DF]">SOBRE NOSOTROS</h5>
            <h2 className="text-5xl font-bold text-[#39405A] px-96">
              Somos su Socia Local en Turquia
            </h2>
            <p className="mt-4 text-lg text-[#C0BABA] px-48">
              Contarán con nosotros para crear sus itinerarios y poder dejar
              todo en manos de nuestro equipo dedicado y profesional. ¡Le
              aseguramos que nuestro apasionado equipo estará a su disposición
              para hacer realidad sus sueños! Somos una empresa de Agencia de
              Viajes de lujo ubicada en Estambul que ofrece un servicio
              impecable a sus estimados huéspedes de todo el mundo. Creamos
              experiencias de viaje exquisitas y nos ocupamos de cada aspecto de
              sus necesidades para que su viaje sea el más memorable.
            </p>
          </div>
        </div>
      </section>

      <section>
        <Swiper
          slidesPerView={5}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          speed={5000}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide>
            <Image src={Alacati as StaticImageData} alt="Alacati" />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={BicycleAlacati as StaticImageData}
              alt="BicycleAlacati"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={blueVoyage as StaticImageData} alt="blueVoyage" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Bodrum as StaticImageData} alt="Bodrum" />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={CappadociaLandscape as StaticImageData}
              alt="CappadociaLandscape"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={cappadociaReligiousHistory as StaticImageData}
              alt="cappadociaReligiousHistory"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={EphesusCelsiusLibrary as StaticImageData}
              alt="EphesusCelsiusLibrary"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={EphesusRuins as StaticImageData} alt="EphesusRuins" />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={HouseofVirginMary as StaticImageData}
              alt="HouseofVirginMary"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={LocalCuisine as StaticImageData} alt="LocalCuisine" />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={ReligiousIstanbul as StaticImageData}
              alt="ReligiousIstanbul"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={seafood as StaticImageData} alt="seafood" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={SpiceBazaar as StaticImageData} alt="SpiceBazaar" />
          </SwiperSlide>
        </Swiper>
      </section>

      {/* What We Offer */}
      <section className="">
        <div className="py-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#FAFAFA]">
          <div className="text-center">
            <h5 className="text-lg font-bold text-[#98B8DF]">
              ¿QUE OFRECEMOS?
            </h5>
            <h2 className="text-5xl font-bold text-[#39405A] px-96">
              Somos su Socia Local en Turquia
            </h2>
            <p className="mt-4 text-lg text-[#C0BABA] px-48">
              Contarán con nosotros para crear sus itinerarios y poder dejar
              todo en manos de nuestro equipo dedicado y profesional. ¡Le
              aseguramos que nuestro apasionado equipo estará a su disposición
              para hacer realidad sus sueños! Somos una empresa de Agencia de
              Viajes de lujo ubicada en Estambul que ofrece un servicio
              impecable a sus estimados huéspedes de todo el mundo. Creamos
              experiencias de viaje exquisitas y nos ocupamos de cada aspecto de
              sus necesidades para que su viaje sea el más memorable.
            </p>
          </div>
        </div>
      </section>

      {/* Carousel */}
      <section>
        <CarouselProvider
          naturalSlideWidth={200}
          naturalSlideHeight={125}
          totalSlides={10}
          className="max-w-7xl mx-auto"
          infinite={true}
        >
          <Slider>
            <Slide index={0}>
              <Image
                src={CataDeVino as StaticImageData}
                alt="CataDeVino"
                className="z-0"
              />
              <div className="text-xl font-bold z-10">Cata de Vino</div>
            </Slide>
            <Slide index={1}>
              <Image
                src={CeramoniaDeLosDerviches as StaticImageData}
                alt="CeramoniaDeLosDerviches"
              />
            </Slide>
            <Slide index={2}>
              <Image
                src={ClaseDeCocinaPrivada as StaticImageData}
                alt="ClaseDeCocinaPrivada"
              />
            </Slide>
            <Slide index={3}>
              <Image
                src={CulinariosDeEstambul as StaticImageData}
                alt="CulinariosDeEstambul"
              />
            </Slide>
            <Slide index={4}>
              <Image
                src={DesayunaConLosGlobos as StaticImageData}
                alt="DesayunaConLosGlobos"
              />
            </Slide>
            <Slide index={5}>
              <Image
                src={ExperienciaDeBañoTurco as StaticImageData}
                alt="ExperienciaDeBañoTurco"
              />
            </Slide>
            <Slide index={6}>
              <Image
                src={ExperienciaDeBicicletaEnCapadocia as StaticImageData}
                alt="ExperienciaDeBicicletaEnCapadocia"
              />
            </Slide>
            <Slide index={7}>
              <Image
                src={HelicopteroViajePorEncimaDeEstambul as StaticImageData}
                alt="HelicopteroViajePorEncimaDeEstambul"
              />
            </Slide>
            <Slide index={8}>
              <Image
                src={ViajeEnGoleta as StaticImageData}
                alt="ViajeEnGoleta"
              />
            </Slide>
            <Slide index={9}>
              <Image
                src={VisitaPrivadaDelAzoteaDeGranBazar as StaticImageData}
                alt="VisitaPrivadaDelAzoteaDeGranBazar"
              />
            </Slide>
          </Slider>
          <ButtonBack>
            <FontAwesomeIcon
              icon={faChevronLeft}
              size="3x"
              className="hover:text-[#737373] z-10"
            />
          </ButtonBack>
          <ButtonNext>
            <FontAwesomeIcon
              icon={faChevronRight}
              size="3x"
              className="hover:text-[#737373] z-10"
            />
          </ButtonNext>
        </CarouselProvider>
      </section>

      {/* Who we are */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h5 className="text-lg font-bold text-[#98B8DF]">
              ¿QUIENES SOMOS?
            </h5>
            <div>
              <div className="flex flex-row">
                <Image
                  src={Dilara as StaticImageData}
                  alt="Dilara"
                  className="w-60"
                />
                <div>
                  <h5 className="text-lg font-bold text-[#39405A]">
                    Dilara Bayramoglu
                  </h5>
                  <p className="text-lg text-[#39405A]">Creativa de la Marca</p>
                  <p className="mt-4 text-md text-[#C0BABA]">
                    ¡Hola! Soy Dilara. Me gradué del Liceo Francés Sainte
                    Pulchérie y termine mis estudios en la Universidad de
                    Istanbul sobre traducción Francés y Español.  Después de
                    graduarme tuve oportunidad de empezar con el sector turismo
                    en el segmento de lujo y llevo más de 15 años trabajando con
                    las agencias de viajes más reconocidas de Sudamérica, Mexico
                    y el Caribe brindando un servicio personalizado. Participé
                    en varios eventos internacionales como Travel Week, ILTM São
                    Paulo, Virtuoso Events y Virtuoso Roadshows en Mexico y Pure
                    Life Experiences en Marruecos. Me gusta conocer las
                    diferentes culturas y expectativas de mis futuros ‘posibles’
                    viajeros. Estamos ofreciendo experiencias extraordinarias en
                    todo Turquía. Soy perfeccionista, detallista y amante de
                    explorar las últimas tendencias. Y siempre  me fascina tener
                    buenos comentarios de los huéspedes. Me consideró ser una
                    persona empática y creo firmemente que es una de las claves
                    para cumplir los sueños de los que viajarán a Turquía
                    conmigo.
                  </p>
                </div>
              </div>
              <div className="flex flex-row">
                <Image
                  src={Ugur as StaticImageData}
                  alt="Ugur"
                  className="w-60"
                />
                <div>
                  <h5 className="text-lg font-bold text-[#39405A]">
                    Ugur Kiyici
                  </h5>
                  <p className="text-[#39405A] text-lg">Chief of Operations</p>
                  <p className="mt-4 text-md text-[#C0BABA]">
                    ¡Hola! Soy Uğur.  Bienvenidos a mi rincón de mundo digital,
                    donde los daré una idea de quién soy y qué me motiva.Siempre
                    me ha apasionado el turismo y siempre es un camino lleno de
                    emociones. Mi camino desde el principio hasta ahora ha sido
                    una mezcla de aprendizaje, desafíos y crecimiento en el
                    sentido de superación personal. Soy curioso por aprender
                    nuevas cosas y descubrir lugares nuevos. Yo creo que
                    curiosidad es la esencia del aprendizaje continuo. Disfruto
                    explorar el mundo que nos rodea profundizando en las
                    complejidades de las temas turismo ,educación y trabajo. He
                    tenido el privilegio de trabajar en todos los campos de la
                    industria del turismo en mis 12 años de carrera. A través de
                    estas experiencias logré mantener mi determinación de
                    aprender más. El cielo es el límite! Gracias acompañarme en
                    este sección y aprender un poco sobre mí. ¡El viaje que
                    tienen por delante está lleno de curiosidad, crecimiento y
                    experiencias únicas!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-lg font-bold text-[#98B8DF]">
              PUBLICACIONES DESTACADAS
            </h2>
            <h2 className="text-5xl font-bold text-[#39405A] px-96">
              Viajeros Satisfechos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDestinations.map((destination) => (
              <Card key={destination.title} className="overflow-hidden">
                <CardHeader className="p-0">
                  <AspectRatio ratio={16 / 9}>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <InstagramEmbed url={destination.href} width={328} />
                    </div>
                    {/*<Image
                      src={destination.image}
                      alt={destination.title}
                      fill
                      className="object-cover"
                    />*/}
                  </AspectRatio>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle>{destination.title}</CardTitle>
                  <CardDescription className="mt-2">
                    {destination.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full text-[#39405A]"
                  >
                    <Link href={destination.href}>Aprender Más</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comments */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="flex flex-row mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-lg font-bold text-[#98B8DF]">
              COMENTARIOS DE CLIENTES
            </h2>
            <h2 className="text-5xl font-bold text-[#39405A] px-96">
              Viajeros Satisfechos
            </h2>
          </div>
          <Card key={featuredDestinations[0].title} className="overflow-hidden">
            <CardHeader className="p-0">
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={featuredDestinations[0].image}
                  alt={featuredDestinations[0].title}
                  fill
                  className="object-cover"
                />
              </AspectRatio>
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle>{featuredDestinations[0].title}</CardTitle>
              <CardDescription className="mt-2">
                {featuredDestinations[0].description}
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button
                asChild
                variant="outline"
                className="w-full text-[#39405A]"
              >
                <Link href={featuredDestinations[0].href}>Aprender Más</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <h2 className="text-lg font-bold text-[#98B8DF]">CONTÁCTANOS</h2>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 max-w-7xl"
        >
          <FormField
            placeholder="Nombre*"
            register={form.register("name")}
            error={form.formState.errors.name?.message}
          />

          <FormField
            placeholder="Correo*"
            register={form.register("subject")}
            error={form.formState.errors.subject?.message}
          />

          <FormField
            type="email"
            placeholder="Correo Electrónico*"
            register={form.register("email")}
            error={form.formState.errors.email?.message}
          />

          <FormField
            type="textarea"
            placeholder="Mesaje*"
            register={form.register("message")}
            error={form.formState.errors.message?.message}
          />

          <button
            type="submit"
            className="w-24 bg-[#98B8DF] rounded-md p-3 text-[#FFFFFF] font-bold"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "ENTREGAR"}
          </button>
        </form>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-primary text-white bg-[#98B8DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/" className="flex items-center w-36">
            <Image src={DilarasLogo as StaticImageData} alt="DilarasLogo" />
          </Link>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Ponte en Contacto</h3>
            <ul className="space-y-2 text-white">
              <li>+90 216 326 58 56</li>
              <li>
                Kosuyolu Mah. Imar Limited Sk. Laila Apt. No:24 D:1
                Kadikoy/Istanbul TURQUÍA
              </li>
              <li>dilara@earthlighttravel.com ugur@earthlighttravel.com</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section>
        <div className="mt-8 pt-8 border-t bg-[#39405A]">
          <div className="flex flex-col max-w-7xl md:flex-row justify-between items-center gap-4">
            <p className="text-white">
              © {new Date().getFullYear()} Earthlight Travel. All rights
              reserved.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-[#98B8DF] hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-[#98B8DF] hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const featuredDestinations = [
  {
    title: "Swissotel The Bosphorus",
    description:
      "Swissotel The Bosphorus, Istanbul is a five-star luxury hotel right in the centre of Istanbul on the European banks of the Bosphorus. Nestled within 65 acres of historical gardens with world-class shopping and vibrant nightlife nearby, it offers 566 guest rooms and suites, featuring state-of-the-art technology and exclusive amenities.",
    image: "https://www.instagram.com/p/DC6QTwjg-0S/?img_index=1",
    href: "https://www.instagram.com/p/DC6QTwjg-0S/?img_index=1",
  },
  {
    title: "Istanbul, Turkiye",
    description:
      "Anchored on the European shores of the Bosphorus strait in a historical building from the 1930’s, Shangri-La Bosphorus sits in the Beşiktaş district and is only a 15 minute walk from the iconic Dolmabahçe Palace. Guests will find solace in chandelier-accented rooms and suites accentuated by soothing cool tones, inspired by palatial Ottoman glamour and Asian design elements.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    href: "https://www.instagram.com/reel/DBGqTa5AMu9/",
  },
  {
    title: "Rixos Tersane Istanbul",
    description:
      "Nestled along the Haliç, Rixos Tersane Istanbul epitomises unmatched guest experiences and service excellence. Dedicated to redefining Istanbul’s lifestyle scene, the hotel is an eclectic fusion, creating an urban hotspot and lifestyle hub with panoramic views of the Haliç. Situated in Istanbul’s historic Tersane district along the Golden Horn, Rixos Tersane Istanbul seamlessly combines modern luxury with a 600-year-old dockyard’s rich heritage.",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1",
    href: "https://www.instagram.com/p/DAGe8iyoIJ0/?img_index=1",
  },
];
