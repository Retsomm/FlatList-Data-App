import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";

var MOCKED_DATA = [
  {
    id: "1",
    note: "火星異星人(The Angry Red Planet)",
    date: "1959/11/23",
    uri: "https://upload.wikimedia.org/wikipedia/en/d/d5/Angry_Red_Planet.jpg",
    article:
      "這是一支由科學家、太空專家和軍方人士組成的四人科學小隊，前往火星進行探險的故事。他們在火星遇到了危險的火星怪物，導致嚴重的傷亡。只有兩名成員倖存，其中一人失去了記憶，而另一人受傷。為了拯救失去意識的船員，失憶者試圖找回自己的記憶，並揭示了這個陌生的火星生態系統中的可怕危險。整個故事強調了火星探險的極端危險性。",
  },
  {
    id: "2",
    note: "火星探險(Mission to Mars)",
    date: "2000/03/10",
    uri: "https://upload.wikimedia.org/wikipedia/zh/4/4f/Mission_to_Mars.jpg",
    article:
      "這是關於一個載人火星探測計劃的故事，其中一支救援隊前往火星調查神秘事故。在這次任務中，他們遇到了一系列危險事件，其中包括太空塵埃撞擊和失踪的船長。最後，他們發現遠古的火星人留下了一個「神秘人臉」，揭示了火星人已經離開火星前往其他星系的事實。太空人中的一位選擇乘坐火星人的太空船前往火星人的星系，而其他三人返回地球。整個故事涵蓋了探險、科學和生命的奧秘。",
  },
  {
    id: "3",
    note: "火星救援(Red Planet)",
    date: "2000/11/10",
    uri: "https://resizing.flixster.com/2DVqiyFd74FD-D2p1IOgAhx1OJA=/206x305/v2/https://flxt.tmsimg.com/assets/p26554_p_v8_af.jpg",
    article:
      "這是一部關於地球面臨著毀滅的科幻驚悚片。因為人類過度污染地球，地球即將面臨滅亡的命運。火星成為人類殖民計劃的最後希望，六名英勇的太空人踏上了21世紀最重要的太空任務。然而，他們在火星上發現了一個驚人的秘密，這個紅色星球可能看似荒蕪，但卻充滿了未知的驚奇和挑戰。这部科幻驚悚片將帶領觀眾探索一個充滿神秘和危險的新世界。",
  },
  {
    id: "4",
    note: "太空之旅(Journey to Space)",
    date: "2015/02/13",
    uri: "https://m.media-amazon.com/images/M/MV5BZmQ2ZTliMGYtNjY2OS00YzIwLWJlMTctOGU0NGNmNzFhNGZlXkEyXkFqcGdeQXVyMTQxMzU0Nzk@._V1_.jpg",
    article:
      "這是一部 2015 年美國 3D冒險紀錄片，以戲劇性的巨幕電影形式描繪了前所未有的深空探索新時代的揭幕。",
  },
  {
    id: "5",
    note: "絕地救援(The Martian)",
    date: "2015/10/02",
    uri: "https://upload.wikimedia.org/wikipedia/zh/a/a2/The_Martian_Poster.jpg",
    article:
      "這是一部關於人類力量和生存意志的扣人心弦的故事。在一次火星任務中，大家都以為美國太空人馬克沃特尼已經死亡，並將他遺留在火星。但其實沃特妮還活著。雖然機會渺茫，他必須尋找聯繫地球的方式，希望科學家們能訂定計畫帶他回家。",
  },
  {
    id: "6",
    note: "絕境救援(Martian Land)",
    date: "2015/10/06",
    uri: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/679ae0e065906d5c47ed98f779ed5d8fdea113adf39fbfcf3d02d876e3733a69._RI_TTW_.png",
    article:
      "在遙遠的未來，由於污染、黃石火山爆發以及對地球資源的濫用，人類已經使地球幾乎無法居住。現在，人類生活在火星上，居住在類似於曾經在地球上發現的城市中，並受到圓頂狀力場的保護，免受外星環境的影響。當一場創紀錄強度的沙塵暴衝破火星穹頂並摧毀火星紐約時，火星洛杉磯的人們必須想出如何阻止風暴，以免風暴再次將他們消滅。由於火星上的地形改造活動重新激活了長期休眠的火山，沙塵暴的威力增強了。",
  },
  {
    id: "7",
    note: "蒼穹浩瀚(The Expanse)",
    date: "2015/12/14",
    uri: "https://picx.zhimg.com/v2-0a8bb69efc540414734e89145eded989_720w.jpg?source=172ae18b",
    article:
      "故事講述二百年後的未來，人類殖民太陽系。由於重力的影響，太陽系的人類逐漸分成了地球人、火星人和小行星帶人，三方彼此之間的關係由於資源的爭奪而變得緊張。警探喬米勒連同船長詹姆斯荷登與他的船員一起揭發了一個威脅秩序和平及人類生存的陰謀。",
  },
  {
    id: "8",
    note: "愛上火星男孩 (The Space Between Us)",
    date: "2017/02/03",
    uri: "https://upload.wikimedia.org/wikipedia/en/7/78/The_Space_Between_Us_poster.jpg",
    article:
      "這是一部關於一名叫嘉納的少年，他在火星出生長大，但夢想著探索地球。為了見到他在線上認識的地球女孩陶莎，Gardner秘密回到地球，但他的身體無法適應地球的環境，導致一連串的健康問題和追趕行動。在他的旅程中，嘉納和陶莎一起探索，發展出深厚的情感關係，同時也揭示了他的真正身世，這一切發生在科幻冒險愛情的背景下，探討了孤獨、跨星球愛情和身份認同等重要主題。",
  },
  {
    id: "9",
    note: "火星世代(The Mars Generation)",
    date: "2017/05/05",
    uri: "https://m.media-amazon.com/images/M/MV5BZjM0YmRmY2UtNDBlNy00ZGJhLWJkZjctMTVhOGU2OWI2YzBlXkEyXkFqcGdeQXVyMTk0ODAwMDQ@._V1_.jpg",
    article:
      "這是一部2017年紀錄片，講述了太空營裡有抱負的青少年宇航員以及人類未來的火星之旅。",
  },
  {
    id: "10",
    note: "遠漂(Away)",
    date: "2020/09/04",
    uri: "https://attach.setn.com/newsimages/2020/08/11/2713654-PH.jpg",
    article:
      "這是一部關於國際太空任務的電視劇，由多國機組人員組成，包括中國、英國、俄羅斯、印度和美國的成員。這項三年的任務從月球啟動，但面臨著種種挑戰，包括太空經驗不足的指揮官以及船員之間的信任問題。故事講述了希望、人性以及合作實現不可能任務的主題。",
  },
];

export default function HomeScreen(props) {
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    var book = MOCKED_DATA;
    setDataSource(book);
  });

  const showNoticeDetail = (cases) => {
    props.navigation.push("MarsDetail", { passProps: cases });
  };

  const renderBook = (cases) => {
    return (
      <TouchableOpacity onPress={() => showNoticeDetail(cases)}>
        <View>
          <View style={styles.MainView}>
            {/* <Image /> */}
            <View style={{ flex: 1 }}>
              <Text
                ellipsizeMode="tail"
                numberOfLines={3}
                style={{ color: "black", fontSize: 15, marginTop: 8 }}
              >
                {cases.note}
              </Text>

              <Text
                ellipsizeMode="tail"
                numberOfLines={3}
                style={{ marginTop: 8, fontSize: 13, marginBottom: 8 }}
              >
                上映日期:{cases.date}
              </Text>
            </View>
            <Image source={require("../img/arrow-point-to-right.png")} />
          </View>
          <View style={styles.seperator} />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList
        data={dataSource}
        renderItem={(cases) => renderBook(cases.item)}
        keyExtracto={(cases) => cases.id}
        style={{ backgroundColor: "white" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
  },
  MainView: {
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgrondColor: "white",
    padding: 8,
    marginLeft: 10,
  },
  seperator: {
    height: 1,
    backgroundColor: "#dddddd",
  },
});
