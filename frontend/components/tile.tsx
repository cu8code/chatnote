import {Text} from 'react-native'
import { fontSize } from '../style/fontSize'

export function Title({text}:{text:string}) {
    return (
        <Text style={[fontSize.mini]}>{text}</Text>
    )
}