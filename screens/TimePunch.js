import { SafeAreaView, Text, View } from "react-native";
import PreviousPunches from "../components/PreviousPunches";
import SubmitPunchButton from "../components/SubmitPunchButton";

const TimePunch = () => {

  return (
    <SafeAreaView>
      <View className="items-center">
        <Text className="text-2xl mt-8 font-semibold">Time Punch Submission</Text>
        <SubmitPunchButton />
        <Text className="text-2xl mt-8 font-semibold">Previous Time Punch</Text>
      </View>
      <View className="ml-4 mr-4">
        <PreviousPunches amount={1} />
      </View>
    </SafeAreaView>
  )
}

export default TimePunch