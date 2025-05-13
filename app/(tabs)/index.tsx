import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "white" }}>
      <Text>EXplore</Text>
      <Link href="/detailed" style={{ marginTop: 20 }}>
        <Text style={{ color: "blue" }}>Go to Detailed</Text>
      </Link>
    </View>
  );
}