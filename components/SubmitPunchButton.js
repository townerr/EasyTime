import useAuth from '../hooks/useAuth';
import { Text, TouchableOpacity, Image } from "react-native";

  //TODO:
  //Submit the punch to api
  //animation/loading while submitting
  //error/success message on submission

const SubmitPunchButton = () => {
  const { user } = useAuth();

  const handleSubmit = () => {
    const punch = {
      userId: user.uid,
      time: Date.now()
    }
  }
  
  return (
    <TouchableOpacity
      className="mt-8 w-80 h-40 bg-sky-500 items-center rounded-2xl"
      onPress={handleSubmit}>
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