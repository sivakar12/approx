import React from 'react'
import { View, Text } from 'react-native'

type PromptNumberType = {
    number: number
}

export default ({number}: PromptNumberType) => {
    return <View>
        <Text>{number}</Text>
    </View>
}