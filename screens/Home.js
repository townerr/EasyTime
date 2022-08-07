import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, Text, Button, View } from "react-native";

const Home = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Text className="text-2xl text-center mt-4">EasyTime Services</Text>
      <View className="flex">
        <View className="flex-row justify-center">
          <View className="w-40 h-40 bg-cyan-600 m-4">
            <Text className="text-xl text-white w-full h-full text-center"
              onPress={() => navigation.navigate("TimePunch")}>Time Punch</Text>
          </View>
          <View className="w-40 h-40 bg-cyan-600 m-4">
            <Text className="text-xl text-white w-full h-full text-center align-middle"
              onPress={() => navigation.navigate("History")}>Time History</Text>
          </View>
        </View>
        <View className="flex-row justify-center">
          <View className="w-40 h-40 bg-cyan-600 m-4">
            <Text className="text-xl text-white w-full h-full text-center align-middle"
              onPress={() => navigation.navigate("Calendar")}>Calendar</Text>
          </View>
          <View className="w-40 h-40 bg-cyan-600 m-4">
            <Text className="text-xl text-white w-full h-full text-center align-middle"
              onPress={() => navigation.navigate("Profile")}>Time History</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home