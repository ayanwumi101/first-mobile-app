import {StyleSheet} from 'react-native'

export const globalStyles = StyleSheet.create({
    container: {
        paddingVertical: 25,
        paddingHorizontal: 10,
        flex: 1,
    },
     heading: {
        fontFamily: 'Inter-Black',
        fontSize: 20,
        color: '#333',
        textAlign: 'center',
        marginBottom: 15,
    },
    text: {
        fontFamily: 'Inter-Regular',
        fontSize: 16,
        color: '#333',
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    }  
})