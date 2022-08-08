import { SafeAreaView, Text } from "react-native";
import PreviousPunches from "../components/PreviousPunches";

const History = () => {
  return (
    <SafeAreaView>
      <Text className="text-2xl font-semibold text-center mt-8 mb-4">Time Punch History</Text>
      <PreviousPunches amount={20} />
    </SafeAreaView>
  )
}

export default History