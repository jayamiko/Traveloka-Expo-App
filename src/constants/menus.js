import { colors } from "./colors";
// SVG ICON IMPORT
import PlanSVG from "../components/svgIcons/PlanSVG";
import HotelSVG from "../components/svgIcons/HotelSVG";
import ExperienceSVG from "../components/svgIcons/ExperienceSVG";
import JRPassSVG from "../components/svgIcons/JRPassSVG";
import CarSVG from "../components/svgIcons/CarSVG";
import InsuranceSVG from "../components/svgIcons/InsuranceSVG";
import ShuttleSVG from "../components/svgIcons/ShuttleSVG";
import VoucherSVG from "../components/svgIcons/VoucherSVG";
import AllProductSVG from "../components/svgIcons/AllProductSVG";

export const menus = [
  {
    icon: <PlanSVG />,
    title: "Tiket Pesawat",
    color: colors.blue,
  },
  {
    icon: <HotelSVG />,
    title: "Hotel",
    color: colors.blue4,
  },
  {
    icon: <ExperienceSVG />,
    title: "Xperience",
    color: colors.experience,
  },
];

export const menuLists1 = [
  {
    icon: <JRPassSVG />,
    title: "Tiket Kereta Api",
    extention: ".svg",
  },
  {
    icon: require("../assets/icon/png/stays-icon.png"),
    title: "Holiday Stays",
    extention: ".png",
  },
  {
    icon: require("../assets/icon/png/atraction-icon.png"),
    title: "Atraksi",
    extention: ".png",
  },
  {
    icon: require("../assets/icon/png/document-icon.png"),
    title: "Tagihan Isi Ulang",
    extention: ".png",
  },
  {
    icon: require("../assets/icon/png/hotel-budget.png"),
    title: "Hotel Budget",
    extention: ".png",
  },
  {
    icon: require("../assets/icon/png/plays-icon.png"),
    title: "Taman Bermain",
    extention: ".png",
  },
  {
    icon: require("../assets/icon/png/spa-icon.png"),
    title: "Spa & Kecantikan",
    extention: ".png",
  },
  {
    icon: require("../assets/icon/png/taxi-icon.png"),
    title: "Taxi",
    extention: ".png",
  },
  {
    icon: require("../assets/icon/png/discon-icon.png"),
    title: "Paket Diskon",
    extention: ".png",
  },
  {
    icon: require("../assets/icon/png/car-insurance-icon.png"),
    title: "Ansuransi Mobil",
    extention: ".png",
  },
  {
    icon: <AllProductSVG />,
    title: "Semua Produk",
    extention: ".svg",
  },
];

export const menuLists2 = [
  {
    icon: require("../assets/icon/png/bus-shuttle-icon.png"),
    title: "Tiket Bus & Travel",
    extention: ".png",
  },
  {
    icon: <CarSVG />,
    title: "Mobil",
    extention: ".svg",
  },
  {
    icon: <ShuttleSVG />,
    title: "Antar Jemput",
    extention: ".svg",
  },
  {
    icon: require("../assets/icon/png/internet-icon.png"),
    title: "Internet Luar Negri",
    extention: ".png",
  },
  {
    icon: <InsuranceSVG />,
    title: "Asuransi",
    extention: ".svg",
  },
  {
    icon: require("../assets/icon/png/plain-hotel-icon.png"),
    title: "Pesawat + Hotel",
    extention: ".png",
  },
  {
    icon: require("../assets/icon/png/plain-ansurance-icon.png"),
    title: "Asuransi Perjalanan",
    extention: ".png",
  },
  {
    icon: require("../assets/icon/png/financial-icon.png"),
    title: "Financial",
    extention: ".png",
  },
  {
    icon: require("../assets/icon/png/tour-icon.png"),
    title: "Tur",
    extention: ".png",
  },
  {
    icon: <VoucherSVG />,
    title: "Voucher Hadiah",
    extention: ".svg",
  },
];
