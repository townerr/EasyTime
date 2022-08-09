import { SafeAreaView, FlatList } from "react-native";
import NavigationButton from "../components/NavigationButton";

const Home = () => {

  const navData = [
    {
      id: "1",
      title: "Time Punch",
      screen: "Time Punch Submission",
      image: "https://img.icons8.com/ios-filled/344/clock-add.png"
    },
    {
      id: "2",
      title: "Time History",
      screen: "Time Punch History",
      image: "https://img.icons8.com/ios-filled/344/order-history.png"
    },
    {
      id: "3",
      title: "Calendar",
      screen: "Calendar",
      image: "https://img.icons8.com/ios-filled/344/calendar--v1.png"
    },
    {
      id: "4",
      title: "Request Leave",
      screen: "Leave System",
      image: "https://img.icons8.com/ios-filled/344/leave.png"
    },
    {
      id: "5",
      title: "Profile",
      screen: "Profile",
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
          <NavigationButton item={item} />
        )}/>
    </SafeAreaView>
  )
}

export default Home