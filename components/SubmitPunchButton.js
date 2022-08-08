import { Text, TouchableOpacity, Image } from "react-native";

const SubmitPunchButton = () => {
  return (
    <TouchableOpacity
        className="mt-8 w-80 h-40 bg-sky-500 items-center rounded-2xl">
        <Image 
        source={{uri: "https://img.icons8.com/ios-filled/344/clock-add.png"}}
        style={{width: 72, height: 72, resizeMode: "contain", tintColor: "white"}}
        className="mt-6"
        />
        <Text className="text-2xl text-white font-semibold pt-2">Submit Punch</Text>
    </TouchableOpacity>
  )
}

export default SubmitPunchButton