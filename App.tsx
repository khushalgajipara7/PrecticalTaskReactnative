import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RecipeScreen from './src/screens/recipe-page';
import RecipeCategoryScreen from './src/screens/recipe-category-page';
import RecipeDetailsScreen from './src/screens/recipe-details-page';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="RecipeScreen" component={RecipeScreen} />
    <Stack.Screen name="CategoryScreen" component={RecipeCategoryScreen} />
    <Stack.Screen name="RecipeDescriptionScreen" component={RecipeDetailsScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
