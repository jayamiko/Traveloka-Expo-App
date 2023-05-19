import React, { useRef, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  DrawerLayoutAndroid,
} from "react-native";
import { TabBar, TabView } from "react-native-tab-view";
import {
  aroundPlace,
  colors,
  facilities,
  hp,
  populerPlace,
  wp,
} from "../../constants";
import {
  CoverImage,
  Drawer,
  Map,
  FooterTab,
  AlertNotification,
} from "../../components/molecule";
import {
  Title,
  SubTitle,
  Gap,
  ButtonIconOnly,
  Stars,
  IconText,
  IconFacility,
  TabContent,
} from "../../components/atoms";
import MapSVG from "../../components/svgIcons/MapSVG";

const tabRoutes = [
  { key: "Di Sekitar Properti", title: "Di Sekitar Properti" },
  { key: "Populer di Area Ini", title: "Populer di Area Ini" },
];

const renderScene = ({ route }) => {
  switch (route.key) {
    case "Di Sekitar Properti":
      return (
        <View>
          <TabContent data={aroundPlace} />
        </View>
      );
    case "Populer di Area Ini":
      return (
        <View>
          <TabContent data={populerPlace} />
        </View>
      );
    default:
      return null;
  }
};

const StaycationDetail = ({ route, navigation }) => {
  const { item } = route.params;

  const [index, setIndex] = useState(0);
  const [routes] = useState(tabRoutes);

  const drawer = useRef(null);
  const drawerPosition = "right";

  const navigationView = () => <Drawer item={item} navigation={navigation} />;

  return (
    <View style={styles.saveArea}>
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={360}
        drawerPosition={drawerPosition}
        renderNavigationView={navigationView}
        style={{ borderWidth: 0 }}
      >
        <View flex={1} style={styles.box}>
          <ScrollView>
            {/* COVER IMAGE */}
            <CoverImage item={item} />
            {/* IDENTITY */}
            <View style={styles.info}>
              <View style={styles.identity}>
                <IconText
                  iconSource={require("../../assets/icon/png/traveloka-icon-blue.png")}
                  text="Traveloka Preferred Partner"
                  color={colors.blue4}
                  fontSize={12}
                  fontWeight="600"
                />
                {/* Title */}
                <View style={styles.title}>
                  <Title text={item.name} />
                  <Image
                    source={require("../../assets/icon/png/share-icon.png")}
                    style={{
                      width: 24,
                      height: hp(3),
                    }}
                  />
                </View>
                {/* Category */}
                <View style={[styles.row, { marginVertical: 4 }]}>
                  <View style={styles.tag}>
                    <Text style={styles.tagName}>{item.category}</Text>
                  </View>
                  <Gap width={wp(2)} />
                  {/* STARS */}
                  <Stars />
                </View>
                {/* Map */}
                <View style={styles.row}>
                  <ButtonIconOnly>
                    <MapSVG />
                  </ButtonIconOnly>
                  <Text>{item.location}</Text>
                </View>
                {/* Clean Accomodation */}
                <View style={styles.rowStart}>
                  <Image
                    source={require("../../assets/icon/png/clean-accomodation.png")}
                    style={{ width: 20, height: hp(5) }}
                  />
                  <View style={styles.accomodation}>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text style={{ fontSize: 12 }}>Clean Accomodation</Text>
                      <TouchableOpacity>
                        <Text
                          style={{
                            fontSize: 12,
                            color: colors.blue4,
                            fontWeight: "600",
                          }}
                        >
                          Info Lanjut
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <Text style={styles.accomodationInfo}>
                      Akomodasi dengan sertifikat CHSE yang memenuhi protokol
                      kebersihan dari kemenparekraf
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            {/* RATE & REVIEW */}
            <View style={styles.rateView}>
              <SubTitle text="Rating dan Ulasan" />
              <View style={styles.rate}>
                <Text style={{ fontWeight: "600" }}>Traveloka</Text>
                <View style={[styles.row, { marginVertical: 4 }]}>
                  <Image
                    source={require("../../assets/icon/png/traveloka-icon.png")}
                    style={{ width: 20, height: hp(2) }}
                  />
                  <Gap width={wp(2)} />
                  <Text style={[styles.fontMedium, { color: colors.blue2 }]}>
                    {item.rate}
                  </Text>
                  <Gap width={wp(2)} />
                  <Text style={{ color: colors.blue2 }}>Mengesankan</Text>
                </View>
                <Text style={{ color: colors.abuTua }}>
                  Dari ({item.review}) review
                </Text>
              </View>
            </View>

            {/* GUEST LIKE */}
            <View style={styles.guest}>
              <SubTitle text="Hal yang disukai para tamu" />
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {item.likes.map((like, i) => {
                  return (
                    <View key={i} style={styles.likes}>
                      <Text style={{ fontSize: 12, color: colors.blue3 }}>
                        {like}
                      </Text>
                    </View>
                  );
                })}
              </ScrollView>
            </View>

            {/* HELP REVIEW */}
            <View style={styles.review}>
              <SubTitle text="Review yang Paling Membantu" />
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {item.comments.map((comment, i) => {
                  return (
                    <View key={i} style={styles.comments}>
                      <View>
                        <Text style={{ fontSize: 12, color: colors.black }}>
                          {comment.message}
                        </Text>
                        <Text style={{ fontSize: 12, color: colors.blue3 }}>
                          Lihat Lebih Lengkap
                        </Text>
                      </View>
                      <Text style={styles.username}>{comment.username}</Text>
                    </View>
                  );
                })}
              </ScrollView>
              <TouchableOpacity>
                <Text style={styles.seeDetail}>LIHAT SEMUA REVIEW</Text>
              </TouchableOpacity>
            </View>

            {/* FACILITIES */}
            <View style={styles.facility}>
              <SubTitle text="Fasilitas Umum" />
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View style={{ flexDirection: "row" }}>
                  {facilities.map((item, i) => {
                    return (
                      <View key={i}>
                        <IconFacility item={item} index={i} />
                      </View>
                    );
                  })}
                </View>
              </ScrollView>
              <TouchableOpacity>
                <Text style={styles.seeDetail}>LIHAT SEMUA REVIEW</Text>
              </TouchableOpacity>
            </View>

            {/* LOCATION */}
            <View style={styles.location}>
              <SubTitle text="Lokasi" />
              <Map />

              {/* Property Area */}
              <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                renderTabBar={(props) => (
                  <TabBar
                    {...props}
                    indicatorStyle={{ backgroundColor: colors.blue4 }}
                    style={{ backgroundColor: colors.white }}
                    activeColor={colors.blue4}
                    inactiveColor={colors.blue4}
                    labelStyle={{ textTransform: "capitalize" }}
                  />
                )}
              />
              <View style={{ padding: wp(2) }}>
                <Text
                  style={{
                    fontSize: 12,
                    color: colors.abuMuda,
                  }}
                >
                  Jarak berikut dihitung berdasarkan garis lurus. Jarak tempuh
                  Sebenarnya dapat bervariasi
                </Text>
              </View>
              <TouchableOpacity>
                <Text style={styles.seeDetail}>SELENGKAPNYA DI PETA</Text>
              </TouchableOpacity>
            </View>

            {/* PROPERTY */}
            <View style={styles.property}>
              <SubTitle text="Kebijakan Properti" />
              <AlertNotification
                text="Pastikan Anda mengetahui waktu yang telah ditentukan untuk check-in & check-out"
                icon={require("../../assets/icon/png/info.png")}
              />
              <View style={[styles.rowStart, { paddingHorizontal: wp(2) }]}>
                <Image
                  source={require("../../assets/icon/png/clock.png")}
                  style={{ width: 26, height: hp(5) }}
                />
                <Gap width={wp(1)} />
                <View style={styles.accomodation}>
                  <View>
                    <Text style={{ fontWeight: "500" }}>
                      Waktu Check-in/Check-out
                    </Text>
                  </View>
                  <Text>Waktu Check-In dari 14.:00</Text>
                  <Text>Waktu Check-Out sebelum 11:00</Text>
                </View>
              </View>
              {/* NOTE */}
              <View style={styles.noteImportant}>
                <IconText
                  iconSource={require("../../assets/icon/png/info.png")}
                  text="Catatan Penting"
                  color={colors.black}
                  fontSize={14}
                  fontWeight="500"
                  styleIcon={{ width: 22, height: 22 }}
                />
                <View style={{ marginTop: 6 }}>
                  <Text style={{ fontSize: 14, color: colors.blue4 }}>
                    Tamu mungkin perlu menunjukkan sertifikat vaksinasi COVID-19
                    untuk dapat menginap di akomodasi. Silahkan hubungi hotel
                    untuk info lebih lanjut sebelum...
                  </Text>
                  <TouchableOpacity style={{ paddingVertical: 6 }}>
                    <Text style={{ fontWeight: "600", color: colors.blue2 }}>
                      Baca Selengkapnya
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              {/* INSTRUCTION */}
              <View
                style={{
                  paddingHorizontal: wp(2),
                  flexDirection: "column",
                }}
              >
                <View style={styles.rowStart}>
                  <Image
                    source={require("../../assets/icon/png/newspaper.png")}
                    style={{ width: 32, height: hp(8) }}
                  />
                  <Gap width={wp(1)} />
                  <View style={styles.accomodation}>
                    <View>
                      <Text style={{ fontWeight: "500" }}>
                        Dokumen yang Diperlukan
                      </Text>
                    </View>
                    <Text style={styles.textGray}>
                      Saat chek-in, Anda wajib membawa Boarding Pass. Mohon bawa
                      dokumen dalam bentuk fisik.
                    </Text>
                  </View>
                </View>
                <View style={styles.rowStart}>
                  <Image
                    source={require("../../assets/icon/png/document.png")}
                    style={{ width: 32, height: hp(8) }}
                  />
                  <Gap width={wp(1)} />
                  <View style={styles.accomodation}>
                    <View>
                      <Text style={{ fontWeight: "500" }}>
                        Petunjuk Umum Check-In
                      </Text>
                    </View>
                    <Text style={styles.textGray}>
                      Hi, Thank you for interest to Hotel Borobudur Jakarta and
                      staying with us. Kindly be informed that every booking
                      room, you many get special...
                    </Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity style={{ marginTop: 8 }}>
                <Text style={styles.seeDetail}>Baca Selengkapnya</Text>
              </TouchableOpacity>
            </View>

            {/* DESKRIPSI */}
            <View style={styles.description}>
              <SubTitle text="Deskripsi" />
              <View>
                <Text style={[styles.textGray, { paddingVertical: hp(1) }]}>
                  Lumire Hotel & Convention Center adalah hotel di lokasi yang
                  baik, tepatnya berada di Senen
                </Text>
                <Text style={[styles.textGray, { paddingVertical: hp(1) }]}>
                  Resepsionis siap 24 Jam untuk melayani proses check-in dan
                  kebutuhan Anda yang lain. Jangan ragu untuk menghubungi
                  resepsionis, kami siap melayani Anda.
                </Text>
                <Text style={[styles.textGray, { paddingVertical: hp(1) }]}>
                  WiFi tersedia di seluruh area publik properti untuk membantu
                  Anda tetao terhubung dengan keluarga dan teman
                </Text>
              </View>
              <TouchableOpacity>
                <Text style={styles.seeDetail}>LIHAT DETAIL</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
          {/* FOOTER TAB */}
          <FooterTab drawer={drawer} item={item} navigation={navigation} />
        </View>
      </DrawerLayoutAndroid>
    </View>
  );
};

const styles = StyleSheet.create({
  saveArea: {
    width: 390,
    height: "100%",
    backgroundColor: colors.white,
  },
  box: {
    width: "100%",
    height: "100%",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  rowStart: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  fontMedium: {
    fontSize: 16,
    fontWeight: "600",
  },
  textGray: {
    color: colors.grayMuda,
  },
  textCenter: {
    fontSize: 12,
    color: colors.grayMuda,
    textAlign: "center",
  },
  info: {
    height: 240,
    marginHorizontal: wp(2),
    paddingVertical: hp(2),
    borderBottomWidth: 1,
    borderBottomColor: colors.abuMuda,
  },
  identity: {
    color: colors.black,
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: wp(2),
  },
  tag: {
    height: 25,
    borderWidth: 1.5,
    borderColor: colors.blue2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    paddingHorizontal: 8,
  },
  tagName: {
    color: colors.blue2,
    fontSize: wp(3),
  },
  accomodation: {
    width: "92%",
    paddingHorizontal: wp(2),
    paddingTop: wp(2),
    fontSize: wp(4),
  },
  accomodationInfo: {
    maxWidth: "75%",
    color: colors.grayMuda,
    fontSize: 12,
  },
  rateView: {
    height: 130,
    marginHorizontal: wp(2),
    paddingVertical: hp(2),
    borderBottomWidth: 1,
    borderBottomColor: colors.abuMuda,
  },
  rate: {
    marginTop: 8,
  },
  guest: {
    height: 100,
    marginHorizontal: wp(2),
    paddingVertical: hp(2),
  },
  likes: {
    height: 30,
    marginTop: 10,
    marginRight: 8,
    backgroundColor: colors.abu,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  review: {
    height: 240,
    marginHorizontal: wp(2),
    paddingVertical: hp(2),
    borderBottomWidth: 1,
    borderBottomColor: colors.abuMuda,
  },
  username: {
    fontSize: 12,
    color: colors.grayMuda,
    textAlign: "right",
  },
  comments: {
    width: 260,
    height: 120,
    flexDirection: "column",
    justifyContent: "space-between",
    marginVertical: 10,
    marginRight: 8,
    backgroundColor: colors.abu,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 2.5,
    overflow: "hidden",
  },
  facility: {
    height: 200,
    marginHorizontal: wp(2),
    paddingVertical: hp(2),
    borderBottomWidth: 1,
    borderBottomColor: colors.abuMuda,
  },
  property: {
    height: 550,
    paddingHorizontal: wp(2),
    paddingVertical: wp(2),
    borderBottomWidth: 1,
    borderBottomColor: colors.abuMuda,
  },
  location: {
    height: 650,
    marginHorizontal: wp(2),
    paddingVertical: hp(2),
    borderBottomWidth: 1,
    borderBottomColor: colors.abuMuda,
  },
  noteImportant: {
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#ABD7EB",
    height: 140,
    marginVertical: 20,
    borderLeftWidth: 6,
    borderColor: colors.blue3,
    paddingHorizontal: wp(2),
  },
  description: {
    height: 280,
    paddingHorizontal: wp(2),
    paddingVertical: hp(2),
    borderBottomWidth: 1,
    borderBottomColor: colors.abuMuda,
  },
  seeDetail: {
    fontWeight: "500",
    fontSize: 14,
    color: colors.blue4,
    textAlign: "center",
    marginVertical: hp(2),
  },
});

export default StaycationDetail;
