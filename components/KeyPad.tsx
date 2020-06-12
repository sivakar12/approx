import React, {useState} from 'react'
import Key from './Key';
import { View } from 'react-native';
import InputDisplay from './InputDisplay';

export default () => {
    const [input, setInput] = useState('')

    const keyLabels = '123456789<0/'.split('')

    const handleBackspace = () => {
        setInput(oldInput => oldInput.slice(0, -1))
    }
    const handleSubmit = () => {
        setInput('')
    }
    
    const makeDigitHandler = (digit: string) => {
        return () => {
            setInput(oldInput => oldInput + digit)
        }
    }
    
    const makeHandler = (label: string) => {
        if (label == '<') {
            return handleBackspace
        } else if (label == '/') {
            return handleSubmit
        } else {
            return makeDigitHandler(label)
        }
    }

    return <View>
        <InputDisplay inputString={input}/>
        {keyLabels.map(label => <Key key={label} label={label} onTap={makeHandler(label)} />)}
    </View>
}