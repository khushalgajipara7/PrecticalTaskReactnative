import { View, Text, TouchableOpacity, FlatList, TextInput } from 'react-native'
import React, { useEffect, useState, useCallback, useRef } from 'react'
import Apiservice from '../../Apiservice'
import styles from './styles'
import FastImage from 'react-native-fast-image'
import debounce from 'lodash.debounce';


const RecipeCategoryScreen = ({ navigation, route }) => {

    const [categoriesList, setCategoriesList] = useState([])
    const ref_dropDownInput = useRef();
    const [selectedValue, setSelectedValue] = useState('')

    const handleDebouncedInput = debounce((text) => {
        filterText(text)
    }, 200);


    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            console.log('ress 00000000000r08te ', route.params);
            getCategoryList()
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const getCategoryList = async () => {
        const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + route.params.categories
        const res = await Apiservice.ApiCall({ url: url, method: 'GET' })
        if (res && res.meals.length > 0) {
            setCategoriesList(res.meals)
        }
        console.log('res =====', res);
    }

    const filterText = useCallback(async q => {
        const filterToken = q
        if (typeof q !== 'string' || q.length < 1) {
            console.log('Empty String');
            getCategoryList()
            return
        }
        const filtered = categoriesList.filter(category => category.strMeal.toLowerCase().includes(filterToken.toLowerCase()));
        // setFilteredCategories(filtered);
        console.log('filterToken ====124====', filtered);
        console.log('filterToken ========', filterToken);
        setCategoriesList(filtered)
    }, [])

    const _categoryRenderItem = ({ item, index }) => {
        return (<>
            <TouchableOpacity style={styles.itemContainer} onPress={() => { navigation.navigate('RecipeDescriptionScreen', { id: item.idMeal, name: item.strMeal }) }} >
                <FastImage
                    style={styles.imgReceip}
                    source={{ uri: item.strMealThumb }}
                    resizeMode={FastImage.resizeMode.contain} />
                <View style={styles.detailContainer}>
                    <Text numberOfLines={1} style={styles.txtLabel}>{item.strMeal}</Text>
                </View>
                <FastImage source={require('../../assests/image/forword.png')}
                    style={styles.imgMore}
                    resizeMode={FastImage.resizeMode.contain} />
            </TouchableOpacity>
            <View style={styles.devider} />
        </>)
    }

    return (
        <View>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => { navigation.goBack() }} style={styles.imBack}>
                    <FastImage source={require('../../assests/image/back.png')} style={styles.imBack} resizeMode={FastImage.resizeMode.contain} />
                </TouchableOpacity>
                <Text style={styles.txtHeader}>{route.params.categories}</Text>
            </View>
            <TextInput
                ref={ref_dropDownInput}
                placeholder="search....."
                style={styles.inputContainer}
                onChangeText={(text) => {
                    setSelectedValue(text)
                    handleDebouncedInput(text)
                }}
                value={selectedValue}
            />
            <FlatList
                data={categoriesList}
                renderItem={_categoryRenderItem}
            />
        </View>
    )


}

export default RecipeCategoryScreen
