import { View, Text, Image, ImageSourcePropType, TouchableHighlight } from 'react-native'
export function ChatItem({ name, src, lastText,onPress}: { name: string, src: ImageSourcePropType, lastText: string,onPress: (id:string)=>void }) {
    return (
        <TouchableHighlight onPress={()=>{onPress('0')}}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={src} style={{ width: 100, height: 100 }}></Image>
                <View style={{ flexDirection: 'column', padding: 10 }}>
                    <Text style={{ fontSize: 17, fontFamily: 'monospace' }}>{name}</Text>
                    <Text style={{ fontSize: 10, fontFamily: 'monospace' }}>{lastText}</Text>
                </View>
            </View>
        </TouchableHighlight>
    )
}