import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Apiservice from '../../Apiservice'
import styles from './styles'
import FastImage from 'react-native-fast-image'

const RecipeDetailsScreen = ({ navigation, route }) => {
    const [itemDetailList, setItemDetailList] = useState([])
    const [tagArray, setTagArray] = useState([])
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            console.log('OPen RecipeDetaila ==', route.params);
            getDescription()
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const getDescription = async () => {
        const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + route.params.id
        const res = await Apiservice.ApiCall({ url: url, method: 'GET' })
        if (res && res.meals.length > 0) {
            // Split the strTags into an array
            const tagsArray = res.meals[0].strTags.split(',');
            setItemDetailList(res.meals)
            setTagArray(tagsArray)
            console.log('res =====', tagsArray);
        }
    }

    return (
        <View style={styles.container} >
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => { navigation.goBack() }} style={styles.imBack}>
                    <FastImage source={require('../../assests/image/back.png')} style={styles.imBack} resizeMode={FastImage.resizeMode.contain} />
                </TouchableOpacity>
                <Text style={styles.txtHeader}>{route.params.name}</Text>
            </View>
            <ScrollView contentContainerStyle={{ paddingBottom: 30 }} showsVerticalScrollIndicator={false}>
                {
                    itemDetailList.map((i) => {
                        return (
                            <>
                                <View style={styles.infoContainer}>
                                    <FastImage
                                        source={{ uri: i.strMealThumb }}
                                        style={styles.imgRecipe}
                                        resizeMode={FastImage.resizeMode.contain} />
                                    <View style={styles.subDetails}>
                                        <View style={styles.categoryContainer}>
                                            <Text style={styles.label}>Category</Text>
                                            <Text style={styles.label}>{i.strCategory}</Text>
                                        </View>
                                        <View style={[styles.categoryContainer,
                                        { marginTop: 15 }]}>
                                            <Text style={styles.label}>Area</Text>
                                            <Text style={styles.label}>{i.strArea}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.devider} />
                                <Text style={styles.heading}>Tags</Text>
                                <View style={{ flexDirection: 'row', marginStart: 16, marginTop: 16, marginBottom: 10 }}>
                                    {
                                        tagArray.map((i) => {
                                            return (
                                                <Text style={{ backgroundColor: 'pink', marginHorizontal: 5, paddingHorizontal: 5, paddingVertical: 5, borderRadius: 5 }}>{i}</Text>
                                            )
                                        })
                                    }
                                </View>
                                <View style={styles.devider} />

                                {i.strIngredient1 !== '' &&
                                    <View style={styles.mdetilsContainer}>
                                        <Text style={styles.txtLabel}>{i.strIngredient1}</Text>
                                        <Text style={styles.txtLabel}>{i.strMeasure1}</Text>
                                    </View>
                                }
                                {i.strIngredient2 !== '' &&
                                    <View style={styles.mdetilsContainer}>
                                        <Text style={styles.txtLabel}>{i.strIngredient2}</Text>
                                        <Text style={styles.txtLabel}>{i.strMeasure2}</Text>
                                    </View>
                                }
                                {i.strIngredient3 !== '' &&
                                    <View style={styles.mdetilsContainer}>
                                        <Text style={styles.txtLabel}>{i.strIngredient3}</Text>
                                        <Text style={styles.txtLabel}>{i.strMeasure3}</Text>
                                    </View>
                                }
                                {i.strIngredient4 !== '' &&
                                    <View style={styles.mdetilsContainer}>
                                        <Text style={styles.txtLabel}>{i.strIngredient4}</Text>
                                        <Text style={styles.txtLabel}>{i.strMeasure4}</Text>
                                    </View>
                                }
                                {i.strIngredient5 !== '' &&
                                    <View style={styles.mdetilsContainer}>
                                        <Text style={styles.txtLabel}>{i.strIngredient5}</Text>
                                        <Text style={styles.txtLabel}>{i.strMeasure5}</Text>
                                    </View>

                                }
                                {i.strIngredient6 !== '' &&
                                    <View style={styles.mdetilsContainer}>
                                        <Text style={styles.txtLabel}>{i.strIngredient6}</Text>
                                        <Text style={styles.txtLabel}>{i.strMeasure6}</Text>
                                    </View>
                                }
                                {
                                    i.strIngredient7 !== '' &&
                                    <View style={styles.mdetilsContainer}>
                                        <Text style={styles.txtLabel}>{i.strIngredient7}</Text>
                                        <Text style={styles.txtLabel}>{i.strMeasure7}</Text>
                                    </View>
                                }
                                <View style={styles.devider} />
                                <Text style={styles.description}>{i.strInstructions}</Text>
                            </>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default RecipeDetailsScreen
