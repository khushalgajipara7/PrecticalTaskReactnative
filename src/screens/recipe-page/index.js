import { View, Text, TouchableOpacity, FlatList, TextInput } from 'react-native'
import React, { useEffect, useState, useRef, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import Apiservice from '../../Apiservice'
import styles from './styles'
import FastImage from 'react-native-fast-image'
import debounce from 'lodash.debounce';

const RecipeScreen = ({ navigation }) => {

    const [receipList, setreceipList] = useState([])
    const ref_dropDownInput = useRef();
    const [selectedValue, setSelectedValue] = useState('')


    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getRecipeList()
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const handleDebouncedInput = debounce((text) => {
        filterText(text)
    }, 200);

    const getRecipeList = async () => {
        const url = 'https://www.themealdb.com/api/json/v1/1/categories.php'
        const res = await Apiservice.ApiCall({ url: url, method: 'GET' })
        if (res && res.categories.length > 0) {
            setreceipList(res.categories)
        }
        console.log('res =====', res);
    }

    const filterText = useCallback(async q => {
        const filterToken = q
        if (typeof q !== 'string' || q.length < 1) {
            console.log('Empty String');
            getRecipeList()
            return
        }
        const filtered = receipList.filter(category => category.strCategory.toLowerCase().includes(filterToken.toLowerCase()));
        // setFilteredCategories(filtered);
        console.log('filterToken ====124====', filtered);
        console.log('filterToken ========', filterToken);
        setreceipList(filtered)
    }, [])

    const _rowRenderItem = ({ item, index }) => {
        return (
            <>
                <TouchableOpacity style={styles.itemContainer} onPress={() => { navigation.navigate('CategoryScreen', { categories: item.strCategory }) }} >
                    <FastImage
                        style={styles.imgReceip}
                        source={{ uri: item.strCategoryThumb }}
                        resizeMode={FastImage.resizeMode.contain} />
                    <View style={styles.detailContainer}>
                        <Text numberOfLines={1} style={styles.txtLabel}>{item.strCategory}</Text>
                        <Text numberOfLines={3} style={styles.txtDescription}>{item.strCategoryDescription}</Text>
                    </View>
                    <FastImage source={require('../../assests/image/forword.png')}
                        style={styles.imgMore}
                        resizeMode={FastImage.resizeMode.contain} />
                </TouchableOpacity>
                <View style={styles.devider} />
            </>
        )
    }

    return (<>
        <View style={styles.headerContainer}>
            <Text style={styles.txtHeader}>Receipt Category</Text>
        </View>
        <View style={styles.container}>
            <TextInput
                ref={ref_dropDownInput}
                placeholder="search........."
                style={styles.inputContainer}
                onChangeText={(text) => {
                    setSelectedValue(text)
                    handleDebouncedInput(text)
                }}
                value={selectedValue}
            />
            <FlatList
                data={receipList}
                renderItem={_rowRenderItem}
            />
        </View>
    </>
    )
}

export default RecipeScreen
