import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fAFAFA',
    },
    itemContainer: {
        flexDirection: 'row',
        marginHorizontal: 16,
        marginVertical: 4,
        alignItems: 'center',
    },
    imgReceip: {
        height: 60,
        width: 60,
        borderRadius: 10,
    },
    txtLabel: {
        fontSize: 20,
        color: '#000000',
    },
    detailContainer: {
        marginStart: 20,
        flex: 1,
    },
    imgMore: {
        height: 36,
        width: 36,
    },
    devider: {
        backgroundColor: '#C6C6C6',
        height: 1,
        marginHorizontal: 16,
        marginVertical: 10,
    },
    inputContainer: {
        borderWidth: 1,
        marginHorizontal: 16,
        borderRadius: 25,
        marginVertical: 16,
        paddingStart: 20,
    },
    headerContainer: {
        backgroundColor: '#FFFF',
        paddingStart: 10,
        paddingVertical: 16,
        alignItems: 'center',
        flexDirection: 'row',
    },
    txtHeader: { fontSize: 25, color: '#000000', marginStart: 16 },
    imBack: {
        height: 24,
        width: 24,
    },

})
