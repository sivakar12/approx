import React from 'react'
import { View, Text } from 'react-native'

type ScoreDisplayProps = {
    label: string,
    value: number
}
export default ({label, value}: ScoreDisplayProps) => {
    return <View>
        <Text>{label}</Text>
        <Text>{value}</Text>
    </View>
}