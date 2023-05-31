import { Button, View } from "react-native";
import { ChatItemGenerator } from "../components/chatItemGenerator";

export function Home({navigation}) {
    return (
        <View>
            <ChatItemGenerator onPress={(id)=>{navigation.navigate('ChatArea',{params:{name:id}})}} />
        </View>
    )
}