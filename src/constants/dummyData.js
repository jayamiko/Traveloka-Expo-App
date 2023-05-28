import ImageIcon from "../components/atoms/Image";
import CarSVG from "../components/svgIcons/CarSVG";
import ExperienceSVG from "../components/svgIcons/ExperienceSVG";
import InsuranceSVG from "../components/svgIcons/InsuranceSVG";
import JRPassSVG from "../components/svgIcons/JRPassSVG";
import PayLaterSVG from "../components/svgIcons/PayLaterSVG";
import PlainSVG from "../components/svgIcons/PlainSVG";
import ShuttleSVG from "../components/svgIcons/ShuttleSVG";
import { colors } from "./colors";

export const hotels = [
  {
    id: "1",
    name: "AONE Hotel",
    city: "Kebon Sirih",
    image: [
      require("../assets/hotels/aone-hotel.jpg"),
      require("../assets/hotels/aone-hotel.jpg"),
      require("../assets/hotels/aone-hotel.jpg"),
      require("../assets/hotels/aone-hotel.jpg"),
      require("../assets/hotels/aone-hotel.jpg"),
    ],
    normalPrice: "Rp. 942.223",
    price: "Rp 706.667",
    review: 3862,
    rate: 8.6,
  },
  // {
  //   id: "2",
  //   name: "Ascott Jakarta",
  //   city: "Thamrin",
  //   image: [
  //     require("../assets/hotels/ascott-jakarta.jpg"),
  //     require("../assets/hotels/ascott-jakarta.jpg"),
  //     require("../assets/hotels/ascott-jakarta.jpg"),
  //     require("../assets/hotels/ascott-jakarta.jpg"),
  //     require("../assets/hotels/ascott-jakarta.jpg"),
  //   ],
  //   normalPrice: "Rp. 2.490.840",
  //   price: "Rp 1.868.130",
  //   review: 3676,
  //   rate: 8.7,
  // },
  {
    id: "3",
    name: "Novotel Jakarta Cikini Hotel",
    city: "Cikini",
    image: [
      require("../assets/hotels/novotel-jakarta-cikini.jpg"),
      require("../assets/hotels/novotel-jakarta-cikini.jpg"),
      require("../assets/hotels/novotel-jakarta-cikini.jpg"),
      require("../assets/hotels/novotel-jakarta-cikini.jpg"),
      require("../assets/hotels/novotel-jakarta-cikini.jpg"),
    ],
    normalPrice: "Rp. 1.318.416",
    price: "Rp 988.812",
    review: 561,
    rate: 8.6,
  },
  {
    id: "4",
    name: "Hotel Gren Alia Jakarta",
    city: "Senen",
    image: [
      require("../assets/hotels/gren-alia.jpg"),
      require("../assets/hotels/gren-alia.jpg"),
      require("../assets/hotels/gren-alia.jpg"),
      require("../assets/hotels/gren-alia.jpg"),
      require("../assets/hotels/gren-alia.jpg"),
    ],
    normalPrice: "Rp. 726.750",
    price: "Rp. 591.750",
    review: 2994,
    rate: 8.7,
  },
  {
    id: "5",
    name: "Grand Orchardz Hotel Kemayoran",
    city: "Gunung Sa..",
    image: [
      require("../assets/hotels/grand-orchardz-kemayoran.jpg"),
      require("../assets/hotels/grand-orchardz-kemayoran.jpg"),
      require("../assets/hotels/grand-orchardz-kemayoran.jpg"),
      require("../assets/hotels/grand-orchardz-kemayoran.jpg"),
      require("../assets/hotels/grand-orchardz-kemayoran.jpg"),
    ],
    normalPrice: "Rp. 850.000",
    price: "Rp 799.999",
    review: 5446,
    rate: 8.7,
  },
  {
    id: "6",
    name: "Lumire Hotel & Conventional Center",
    city: "Senen",
    image: [
      require("../assets/hotels/Lumire-Hotel-1.jpg"),
      require("../assets/hotels/Lumire-Hotel-2.jpg"),
      require("../assets/hotels/Lumire-Hotel-3.jpg"),
      require("../assets/hotels/Lumire-Hotel-4.jpg"),
      require("../assets/hotels/Lumire-Hotel-1.jpg"),
    ],
    normalPrice: "Rp. 1.000.000",
    price: "Rp 399.000",
    review: 1000,
    rate: 8.7,
  },
  {
    id: "7",
    name: "Vasa Hotel Surabaya",
    city: "Senen",
    image: [
      require("../assets/hotels/Vasa-Hotel-Surabaya-3.jpg"),
      require("../assets/hotels/Vasa-Hotel-Surabaya-2.jpg"),
      require("../assets/hotels/Vasa-Hotel-Surabaya-1.jpg"),
      require("../assets/hotels/Vasa-Hotel-Surabaya-4.jpg"),
      require("../assets/hotels/Vasa-Hotel-Surabaya-1.jpg"),
    ],
    normalPrice: "Rp. 1.000.000",
    price: "Rp 999.000",
    review: 1000,
    rate: 8.7,
  },
  {
    id: "8",
    name: "Yello Hotel Harmoni",
    city: "Harmoni",
    image: [
      require("../assets/hotels/yello-hotel-harmoni.jpg"),
      require("../assets/hotels/yello-hotel-harmoni.jpg"),
      require("../assets/hotels/yello-hotel-harmoni.jpg"),
      require("../assets/hotels/yello-hotel-harmoni.jpg"),
      require("../assets/hotels/yello-hotel-harmoni.jpg"),
    ],
    normalPrice: "Rp. 1.000.000",
    price: "Rp 999.000",
    review: 1000,
    rate: 8.7,
  },
  {
    id: "9",
    name: "Pullman Jakarta Indonesia",
    city: "Thamrin",
    image: [
      require("../assets/hotels/pullman-jakarta.jpg"),
      require("../assets/hotels/pullman-jakarta.jpg"),
      require("../assets/hotels/pullman-jakarta.jpg"),
      require("../assets/hotels/pullman-jakarta.jpg"),
      require("../assets/hotels/pullman-jakarta.jpg"),
    ],
    normalPrice: "Rp. 2.722.500",
    price: "Rp 2.041.875",
    review: 1848,
    rate: 8.6,
  },
  {
    id: "10",
    name: "Harris Vertu Hotel Harmoni",
    city: "Harmoni",
    image: [
      require("../assets/hotels/harris-vertu-hotel-harmoni.jpg"),
      require("../assets/hotels/harris-vertu-hotel-harmoni.jpg"),
      require("../assets/hotels/harris-vertu-hotel-harmoni.jpg"),
      require("../assets/hotels/harris-vertu-hotel-harmoni.jpg"),
      require("../assets/hotels/harris-vertu-hotel-harmoni.jpg"),
    ],
    normalPrice: "Rp. 1.168.000",
    price: "Rp 992.800",
    review: 3795,
    rate: 8.6,
  },
  {
    id: "11",
    name: "Ascott Waterplace Surabaya",
    city: "Wiyung",
    image: [
      require("../assets/hotels/ascott-waterplace-surabaya.jpg"),
      require("../assets/hotels/ascott-waterplace-surabaya.jpg"),
      require("../assets/hotels/ascott-waterplace-surabaya.jpg"),
      require("../assets/hotels/ascott-waterplace-surabaya.jpg"),
      require("../assets/hotels/ascott-waterplace-surabaya.jpg"),
    ],
    normalPrice: "Rp. 1.661.999",
    price: "Rp 1.246.499",
    review: 3795,
    rate: 8.8,
  },
  {
    id: "11",
    name: "The Acacia Jakarta",
    city: "Kramat",
    image: [
      require("../assets/hotels/the-acacia-jakarta.jpg"),
      require("../assets/hotels/the-acacia-jakarta.jpg"),
      require("../assets/hotels/the-acacia-jakarta.jpg"),
      require("../assets/hotels/the-acacia-jakarta.jpg"),
      require("../assets/hotels/the-acacia-jakarta.jpg"),
    ],
    normalPrice: "Rp. 804.000",
    price: "Rp 603.000",
    review: 4150,
    rate: 8.1,
  },
  {
    id: "11",
    name: "HARRIS Hotel & Convention Kelap...",
    city: "Kramat",
    image: [
      require("../assets/hotels/harris-hotel-convention.jpg"),
      require("../assets/hotels/harris-hotel-convention.jpg"),
      require("../assets/hotels/harris-hotel-convention.jpg"),
      require("../assets/hotels/harris-hotel-convention.jpg"),
      require("../assets/hotels/harris-hotel-convention.jpg"),
    ],
    normalPrice: "Rp. 1.058.000",
    price: "Rp 1.005.100",
    review: 4604,
    rate: 8.6,
  },
  {
    id: "12",
    name: "Somerset Sudirman Jakarta",
    city: "Karet Teng..",
    image: [
      require("../assets/hotels/sumerset-sudirman-jakarta.jpg"),
      require("../assets/hotels/sumerset-sudirman-jakarta.jpg"),
      require("../assets/hotels/sumerset-sudirman-jakarta.jpg"),
      require("../assets/hotels/sumerset-sudirman-jakarta.jpg"),
      require("../assets/hotels/sumerset-sudirman-jakarta.jpg"),
    ],
    normalPrice: "Rp. 1.546.600",
    price: "Rp 1.159.950",
    review: 349,
    rate: 8.8,
  },
  // {
  //   id: "13",
  //   name: "Hotel Borobudur",
  //   city: "Pasar Baru",
  //   image: [
  //     require("../assets/hotels/hotel-borobudur-jakarta.jpg"),
  //     require("../assets/hotels/hotel-borobudur-jakarta.jpg"),
  //     require("../assets/hotels/hotel-borobudur-jakarta.jpg"),
  //     require("../assets/hotels/hotel-borobudur-jakarta.jpg"),
  //     require("../assets/hotels/hotel-borobudur-jakarta.jpg"),
  //   ],
  //   normalPrice: "Rp. 2.400.000",
  //   price: "Rp 1.800.000",
  //   review: 7270,
  //   rate: 8.6,
  // },
  {
    id: "14",
    name: "Oasis Amir Hotel",
    city: "Senen",
    image: [
      require("../assets/hotels/oasis-amir-hotel.jpg"),
      require("../assets/hotels/oasis-amir-hotel.jpg"),
      require("../assets/hotels/oasis-amir-hotel.jpg"),
      require("../assets/hotels/oasis-amir-hotel.jpg"),
      require("../assets/hotels/oasis-amir-hotel.jpg"),
    ],
    normalPrice: "Rp. 500.000",
    price: "Rp 489.999",
    review: 8490,
    rate: 8.0,
  },
  {
    id: "15",
    name: "Merlynn Park Hotel",
    city: "Petojo Utara",
    image: [
      require("../assets/hotels/merlyn-park-hotel.jpg"),
      require("../assets/hotels/merlyn-park-hotel.jpg"),
      require("../assets/hotels/merlyn-park-hotel.jpg"),
      require("../assets/hotels/merlyn-park-hotel.jpg"),
      require("../assets/hotels/merlyn-park-hotel.jpg"),
    ],
    normalPrice: "Rp. 1.121.000",
    price: "Rp 999.999",
    review: 19483,
    rate: 8.6,
  },
  {
    id: "16",
    name: "Hotel Indonesia Kempinski Jakarta",
    city: "Thamrin",
    image: [
      require("../assets/hotels/hotel-indonesia-kempinski-jakarta.jpg"),
      require("../assets/hotels/hotel-indonesia-kempinski-jakarta.jpg"),
      require("../assets/hotels/hotel-indonesia-kempinski-jakarta.jpg"),
      require("../assets/hotels/hotel-indonesia-kempinski-jakarta.jpg"),
      require("../assets/hotels/hotel-indonesia-kempinski-jakarta.jpg"),
    ],
    normalPrice: "Rp. 3.675.375",
    price: "Rp. 2.894.184",
    review: 4700,
    rate: 8.9,
  },
  {
    id: "17",
    name: "Grand Mercure Jakarta Kemayoran",
    city: "Kemayoran",
    image: [
      require("../assets/hotels/grand-mercure-jakarta.jpg"),
      require("../assets/hotels/grand-mercure-jakarta.jpg"),
      require("../assets/hotels/grand-mercure-jakarta.jpg"),
      require("../assets/hotels/grand-mercure-jakarta.jpg"),
      require("../assets/hotels/grand-mercure-jakarta.jpg"),
    ],
    normalPrice: "Rp. 2.386.700",
    price: "Rp. 1.790.025",
    review: 3488,
    rate: 8.7,
  },
  {
    id: "18",
    name: "Wyndham Casablanca jakarta",
    city: "Tebet",
    image: [
      require("../assets/hotels/wyndham-casablanca.jpeg"),
      require("../assets/hotels/wyndham-casablanca-2.jpg"),
      require("../assets/hotels/wyndham-casablanca-3.jpg"),
      require("../assets/hotels/wyndham-casablanca-4.jpg"),
      require("../assets/hotels/wyndham-casablanca-5.jpg"),
    ],
    normalPrice: "Rp. 1.115.279",
    price: "Rp. 983.676",
    review: 3879,
    rate: 8.8,
  },
];

export const hotelRecomendation = [
  {
    id: "1",
    name: "Ascott Jakarta",
    city: "Thamrin",
    image: [
      require("../assets/hotels/ascott-jakarta.jpg"),
      require("../assets/hotels/ascott-jakarta.jpg"),
      require("../assets/hotels/ascott-jakarta.jpg"),
      require("../assets/hotels/ascott-jakarta.jpg"),
      require("../assets/hotels/ascott-jakarta.jpg"),
    ],
    normalPrice: "Rp. 2.490.840",
    price: "Rp 1.868.130",
    review: 3676,
    rate: 8.7,
  },
  {
    id: "2",
    name: "Hotel Borobudur",
    city: "Pasar Baru",
    image: [
      require("../assets/hotels/hotel-borobudur-jakarta.jpg"),
      require("../assets/hotels/hotel-borobudur-jakarta.jpg"),
      require("../assets/hotels/hotel-borobudur-jakarta.jpg"),
      require("../assets/hotels/hotel-borobudur-jakarta.jpg"),
      require("../assets/hotels/hotel-borobudur-jakarta.jpg"),
    ],
    normalPrice: "Rp. 2.400.000",
    price: "Rp 1.800.000",
    review: 7270,
    rate: 8.6,
  },
];

export const likes = [
  "strategic location (156)",
  "easy airport access (4)",
  "friendly staffs (87)",
  "clean room (134)",
  "excellent service (10)",
  "tasty breakfast (72)",
  "complete facilities (18)",
  "great view (11)",
  "varied breakfast (7)",
  "family friendly (3)",
];

export const comments = [
  {
    id: "1",
    username: "Marcel R.",
    message:
      "Very near to toll road. Suitable for transit when on road trip with Surabaya as transit city. fast check in service and fast check o...",
  },
  {
    id: "2",
    username: "Andreas A.",
    message:
      "Nice place to stay, good location with nice access to airport and city centre, nice sky pool and love the breakfast, spacious roo...",
  },
  {
    id: "3",
    username: "Donny H.",
    message:
      "the room is very comfortable, the food and beverages is excellent. Its easy if you want to go to the public places",
  },
];

export const aroundPlace = [
  {
    place: "Kota Ksablanca Office 88",
    category: "Bisnis",
    icon: require("../assets/icon/png/bag-icon.png"),
    distance: "210 m",
  },
  {
    place: "Mall Kota Kasablanca",
    category: "Toko & Hadiah",
    icon: require("../assets/icon/png/totebag-icon.png"),
    distance: "372 m",
  },
  {
    place: "Rumah Sakit Metropolitan Medical Centre",
    category: "Layanan Publik",
    icon: require("../assets/icon/png/health-icon.png"),
    distance: "977 m",
  },
  {
    place: "Halte Kecamatan Tebet",
    category: "Pusat Transportasi",
    icon: require("../assets/icon/png/bus-icon.png"),
    distance: "997 m",
  },
];

export const populerPlace = [
  {
    place: "Stasiun Gambir",
    category: "Pusat Transportasi",
    icon: require("../assets/icon/png/train-icon.png"),
    distance: "5,42 km",
  },
  {
    place: "Bandar Udara Internasional Halim Perdana...",
    category: "Pusat Transportasi",
    icon: require("../assets/icon/png/plane-icon.png"),
    distance: "7,34 km",
  },
  {
    place: "Taman Impian Jaya Ancol",
    category: "Aktivitas & Permainan",
    icon: require("../assets/icon/png/video-icon.png"),
    distance: "11,01 km",
  },
  {
    place: "Dunia Fantasi (Dufan)",
    category: "Aktivitas & Permainan",
    icon: require("../assets/icon/png/video-icon.png"),
    distance: "11,07 km",
  },
];

export const facilities = [
  {
    icon: require("../assets/icon/png/ac.png"),
    name: "AC",
  },
  {
    icon: require("../assets/icon/png/restoran.png"),
    name: "Restoran",
  },
  {
    icon: require("../assets/icon/png/kolam-renang.png"),
    name: "Kolam Renang",
  },
  {
    icon: require("../assets/icon/png/resepsionis.png"),
    name: "Resepsionis 24 Jam",
  },
  {
    icon: require("../assets/icon/png/parkir.png"),
    name: "Parkir",
  },
  {
    icon: require("../assets/icon/png/lift.png"),
    name: "Lift",
  },
  {
    icon: require("../assets/icon/png/wifi.png"),
    name: "WiFi",
  },
];

export const roomImages = [
  require("../assets/ilustrasi/iklan-tour.jpg"),
  require("../assets/ilustrasi/iklan-buavita.jpg"),
  require("../assets/ilustrasi/promo-lebaran.jpg"),
];

export const hotelCountries = [
  "Singapura",
  "Malaysia",
  "Thailand",
  "Vietnam",
  "Filipina",
  "Jepang",
  "Hongkong",
  "Korea Selatan",
  "Australia",
  "Asia Timur",
];

export const disconframes = [
  require("../assets/frames/discont/discon-frame-1.jpg"),
  require("../assets/frames/discont/discon-frame-2.jpg"),
  require("../assets/frames/discont/discon-frame-3.jpg"),
];

export const worldTours = [
  require("../assets/frames/world-tour/singapura.jpg"),
  require("../assets/frames/world-tour/malaysia.jpg"),
  require("../assets/frames/world-tour/thailand.jpg"),
  require("../assets/frames/world-tour/vietnam.jpg"),
  require("../assets/frames/world-tour/filipina.jpg"),
  require("../assets/frames/world-tour/jepang.jpg"),
  require("../assets/frames/world-tour/korea-selatan.jpg"),
  require("../assets/frames/world-tour/hongkong.jpg"),
  require("../assets/frames/world-tour/australia.jpg"),
  require("../assets/frames/world-tour/eropa.jpg"),
  require("../assets/frames/world-tour/china.jpg"),
  require("../assets/frames/world-tour/timur-tengah.jpg"),
];

export const plainTickets = [
  require("../assets/promo/plain-ticket/promo-tiket-pesawat-1.jpg"),
  require("../assets/promo/plain-ticket/promo-tiket-pesawat-2.jpg"),
  require("../assets/promo/plain-ticket/promo-tiket-pesawat-3.jpg"),
  require("../assets/promo/plain-ticket/promo-tiket-pesawat-4.jpg"),
  require("../assets/promo/plain-ticket/promo-tiket-pesawat-5.jpg"),
];

export const hotelTickets = [
  require("../assets/promo/hotel-ticket/promo-hotel-1.jpg"),
  require("../assets/promo/hotel-ticket/promo-hotel-2.jpg"),
];

export const holidayStaysTicket = [
  require("../assets/promo/hotel-ticket/promo-hotel-1.jpg"),
  require("../assets/promo/hotel-ticket/promo-hotel-2.jpg"),
];

export const xperienceTicket = [
  require("../assets/promo/xperience-ticket/promo-xperience-1.jpg"),
  require("../assets/promo/xperience-ticket/promo-xperience-2.jpg"),
  require("../assets/promo/ticket-1.jpg"),
  require("../assets/promo/xperience-ticket/promo-xperience-3.jpg"),
];

export const payLaterTicket = [
  require("../assets/promo/paylater-ticket/promo-paylater-1.jpg"),
  require("../assets/promo/paylater-ticket/promo-paylater-2.jpg"),
];

export const trainTicket = [
  require("../assets/promo/train-ticket/promo-kereta-1.jpg"),
  require("../assets/promo/ticket-4.jpg"),
];

export const shuttleTicket = [
  require("../assets/promo/ticket-4.jpg"),
  require("../assets/promo/ticket-5.jpg"),
];

export const rentCarTickets = [
  require("../assets/promo/rent-car-ticket/promo-rental-mobil-1.jpg"),
  require("../assets/promo/rent-car-ticket/promo-rental-mobil-2.jpg"),
];

export const taxiTickets = [
  require("../assets/promo/ticket-4.jpg"),
  require("../assets/promo/taxi-ticket/promo-taxi-1.jpg"),
];

export const shuttleBusTickets = [
  require("../assets/promo/bus-shuttle-ticket/promo-bus-shuttle-1.jpg"),
  require("../assets/promo/bus-shuttle-ticket/promo-bus-shuttle-2.jpg"),
];

export const insuranceTicket = [
  require("../assets/promo/ticket-6.jpg"),
  require("../assets/promo/ticket-7.jpg"),
];

export const paymentTicket = [
  require("../assets/promo/ticket-8.jpg"),
  require("../assets/promo/ticket-9.jpg"),
];

export const internetTicket = [
  require("../assets/promo/ticket-10.jpg"),
  require("../assets/promo/ticket-5.jpg"),
];

export const bankTicket = [
  require("../assets/promo/ticket-11.jpg"),
  require("../assets/promo/ticket-12.jpg"),
];

export const travelFairPromo = [
  {
    title: "Promo Tiket Pesawat",
    icon: <PlainSVG color={colors.blue2} />,
    data: plainTickets,
  },
  {
    title: "Promo Hotel",
    icon: <ImageIcon url={require("../assets/icon/png/hotel-budget.png")} />,
    data: hotelTickets,
  },
  {
    title: "Promo Holiday Stays",
    icon: <ImageIcon url={require("../assets/icon/png/stays-icon.png")} />,
    data: holidayStaysTicket,
  },
  {
    title: "Promo Xperience",
    icon: <ExperienceSVG color={colors.experience} />,
    data: xperienceTicket,
  },
  {
    title: "Promo PayLater",
    icon: <PayLaterSVG color={colors.blue4} />,
    data: payLaterTicket,
  },
  {
    title: "Promo Tiket Kereta",
    icon: <JRPassSVG />,
    data: trainTicket,
  },
  {
    title: "Promo Antar Jemput Ban...",
    icon: <ShuttleSVG />,
    data: shuttleTicket,
  },
  {
    title: "Promo Rental Mobil",
    icon: <CarSVG />,
    data: rentCarTickets,
  },
  {
    title: "Promo Taksi",
    icon: <ImageIcon url={require("../assets/icon/png/taxi-icon.png")} />,
    data: taxiTickets,
  },
  {
    title: "Promo Tiket Bus & Travel",
    icon: (
      <ImageIcon url={require("../assets/icon/png/bus-shuttle-icon.png")} />
    ),
    data: shuttleBusTickets,
  },
  {
    title: "Promo Asuransi",
    icon: <InsuranceSVG />,
    data: insuranceTicket,
  },
  {
    title: "Promo Tagihan & Isi Ulang",
    icon: <ImageIcon url={require("../assets/icon/png/document-icon.png")} />,
    data: paymentTicket,
  },
  {
    title: "Promo Pulsa & Paket Inter...",
    icon: (
      <ImageIcon
        url={require("../assets/icon/png/internet-icon-blue.png")}
        width={32}
        height={32}
      />
    ),
    data: internetTicket,
  },
  {
    title: "Promo Bank",
    icon: (
      <ImageIcon
        url={require("../assets/icon/png/traveloka-icon.png")}
        width={28}
        height={28}
      />
    ),
    data: bankTicket,
  },
];

export const atractions = [
  {
    id: "1",
    name: "Tiket Dunia Fantasi (Dufan) Ancol",
    city: "Ancol",
    image: [require("../assets/atractions/dunia-fantasi.jpg")],
    normalPrice: "Rp. 200.000",
    price: "Rp 187.200",
    review: 12225,
    rate: 9.0,
  },
  {
    id: "2",
    name: "Trans Studio Bandung",
    city: "Bandung",
    image: [require("../assets/atractions/tsm-bandung.jpg")],
    normalPrice: "Rp. 200.000",
    price: "Rp 141.000",
    review: 5535,
    rate: 8.6,
  },
  {
    id: "3",
    name: "Tiket Bali Zoo",
    city: "Ubud",
    image: [require("../assets/atractions/bali-zoo.jpg")],
    normalPrice: "Rp. 140.000",
    price: "Rp 112.000",
    review: 3253,
    rate: 8.7,
  },
];
