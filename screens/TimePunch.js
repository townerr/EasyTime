import { SafeAreaView, Text, View } from "react-native";
import PreviousPunches from "../components/PreviousPunches";
import SubmitPunchButton from "../components/SubmitPunchButton";

const TimePunch = () => {

  //TODO:
  //Submit punch button send data to api
  //Get previous time punch data from api

  return (
    <SafeAreaView>
      <View className="items-center">
        <Text className="text-2xl mt-8 font-semibold">Time Punch Submission</Text>
        <SubmitPunchButton />
        <Text className="text-2xl mt-8 font-semibold">Previous Time Punch</Text>
      </View>
      <View className="ml-4 mr-4">
        <PreviousPunches />
      </View>
    </SafeAreaView>
  )
}

export default TimePunch