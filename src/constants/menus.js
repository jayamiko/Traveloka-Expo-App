import { colors } from "./colors";
// SVG ICON IMPORT
import PlanSVG from "../components/svgIcons/PlanSVG";
import HotelSVG from "../components/svgIcons/HotelSVG";
import ExperienceSVG from "../components/svgIcons/ExperienceSVG";
import JRPassSVG from "../components/svgIcons/JRPassSVG";
import FinancialSVG from "../components/svgIcons/FinancialSVG";
import BrowserSVG from "../components/svgIcons/BrowserSVG";
import CulinarySVG from "../components/svgIcons/CulinarySVG";
import HealthSVG from "../components/svgIcons/HealthSVG";
import TouristSVG from "../components/svgIcons/TouristSVG";
import PulsaSVG from "../components/svgIcons/PulsaSVG";
import BusSVG from "../components/svgIcons/BusSVG";
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

export const menuLists = [
  {
    icon: <JRPassSVG />,
    title: "Tiket Kereta Api",
    color: colors.concrete,
  },
  {
    icon: <FinancialSVG />,
    title: "Finansial",
  },
  {
    icon: <BrowserSVG />,
    title: "Internet Luar Negri",
  },
  {
    icon: <CulinarySVG />,
    title: "Kuliner",
  },
  {
    icon: <HealthSVG />,
    title: "Kesehatan",
  },
  {
    icon: <TouristSVG />,
    title: "Tur",
  },
  {
    icon: <PulsaSVG />,
    title: "Pulsa & Paket Internet",
  },
  {
    icon: <BusSVG />,
    title: "Tiket Bus & Travel",
  },
  {
    icon: <CarSVG />,
    title: "Mobil",
  },
  {
    icon: <InsuranceSVG />,
    title: "Asuransi",
  },
  {
    icon: <ShuttleSVG />,
    title: "Antar Jemput",
  },
  {
    icon: <VoucherSVG />,
    title: "Gift & Voucher",
  },
  // {
  //   icon: <TaxiSVG />,
  //   title: "Taksi",
  // },
  {
    icon: <AllProductSVG />,
    title: "Semua Produk",
  },
];
