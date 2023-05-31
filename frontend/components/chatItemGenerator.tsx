import { ChatItem } from "./chatItem"
export function ChatItemGenerator({onPress}:{onPress:(id:string)=>void}) {
    const data = [{
        name: "ankan",
        lastText: "hi i am anan",
        iconSrc: "https://picsum.photos/200"
    },
    {
        name: "rihsi",
        lastText: "hi",
        iconSrc: "https://picsum.photos/201"
    },
    {
        name: "lol",
        lastText: "na",
        iconSrc: "https://picsum.photos/202"
    }]

    return (<>
        {
            data.map((element,index) => {
                return (
                    <ChatItem onPress={onPress} key={index} lastText={element.lastText} name={element.name} src={{ uri: element.iconSrc }} />
                )
            })
        }
    </>)
}