import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fAFAFA',
    },
    infoContainer: {
        flexDirection: 'row',
        marginHorizontal: 16,
        marginTop: 16,
    },
    imgRecipe: {
        height: 90,
        width: 90,
        borderRadius: 10,
    },
    subDetails: {
        justifyContent: 'center',
        marginHorizontal: 16,
        flex: 1,
    },
    categoryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    label: {
        color: '#000000',
        fontSize: 16,

    },
    devider: {
        backgroundColor: '#C6C6C6',
        height: 1,
        marginHorizontal: 16,
        marginVertical: 10,
    },
    heading: {
        fontSize: 20,
        color: '#000000',
        fontWeight: '400',
        marginStart: 16,
        marginTop: 5,
    },
    mdetilsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 16,
        marginVertical: 8,
    },
    description: {
        color: '#000000',
        marginHorizontal: 16,
    },
    txtLabel: {
        color: '#000000',
        fontSize: 16,
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
