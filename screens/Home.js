import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, Text, View, FlatList, TouchableOpacity, Image } from "react-native";

const Home = () => {
  const navigation = useNavigation();

  const navData = [
    {
      id: "1",
      title: "Time Punch",
      screen: "TimePunchScreen",
      image: "https://img.icons8.com/ios-filled/344/clock-add.png"
    },
    {
      id: "2",
      title: "Time History",
      screen: "HistoryScreen",
      image: "https://img.icons8.com/ios-filled/344/order-history.png"
    },
    {
      id: "3",
      title: "Calendar",
      screen: "CalendarScreen",
      image: "https://img.icons8.com/ios-filled/344/calendar--v1.png"
    },
    {
      id: "4",
      title: "Request Leave",
      screen: "LeaveScreen",
      image: "https://img.icons8.com/ios-filled/344/leave.png"
    },
    {
      id: "5",
      title: "Profile",
      screen: "ProfileScreen",
      image: "https://img.icons8.com/ios-glyphs/344/user--v1.png"
    },
  ];

  return (
    <SafeAreaView className="items-center">
      <FlatList 
        data={navData}
        numColumns="2"
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.screen)}
            className="bg-green-500 w-40 p-4 pl-4 pb-4 pt-8 m-3 mt-6 rounded-lg">
            <View className="items-center">
              <Image 
                source={{uri: item.image}}
                style={{width: 72, height: 72, resizeMode: "contain", tintColor: "white"}}
                className="" />
              <Text className="mt-4 mb-2 text-center text-lg text-white font-semibold">{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}/>
    </SafeAreaView>
  )
}

export default Home