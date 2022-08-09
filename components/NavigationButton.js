import { Text, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const NavigationButton = ({item}) => {

  const navigation = useNavigation();

  return (
    <>
      {item.disabled ? (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          className="bg-slate-500 w-40 p-4 pl-4 pb-4 pt-8 m-3 mt-6 rounded-lg"
          disabled={item.disabled} >
          <View className="items-center">
            <Image 
              source={{uri: item.image}}
              style={{width: 72, height: 72, resizeMode: "contain", tintColor: "white"}}
            />
            <Text className="mt-4 text-center text-lg text-white font-semibold">{item.title}</Text>
            <Text className="text-center text-white font-semibold">(Disabled)</Text>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          className="bg-green-500 w-40 p-4 pl-4 pb-4 pt-8 m-3 mt-6 rounded-lg"
          disabled={item.disabled} >
          <View className="items-center">
            <Image 
              source={{uri: item.image}}
              style={{width: 72, height: 72, resizeMode: "contain", tintColor: "white"}}
            />
            <Text className="mt-4 mb-2 text-center text-lg text-white font-semibold">{item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
    </>
  )
}

export default NavigationButton