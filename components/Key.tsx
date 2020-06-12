import React from 'react'
import { View, Text } from 'react-native'

type KeyProps = {
    label: string,
    onTap: () => void
}

export default (props: KeyProps) => {
    return <View>
        <Text onPress={props.onTap}>
            {props.label}
        </Text>
    </View>
}