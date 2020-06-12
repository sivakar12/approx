import React from 'react'
import { View, Text } from 'react-native'

type InputDisplayProps = {
    inputString: string
}

export default (props: InputDisplayProps) => {
    return <View>
        <Text>
            {props.inputString}
        </Text>
    </View>
}