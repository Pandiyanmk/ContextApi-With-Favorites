import { React, useContext } from "react";
import { StyleSheet, Text, Dimensions, View, Pressable } from 'react-native'
import { FavouritesContext } from "../../store/context/favorites_context";

const ListItemGoals = (props) => {
    const favoriteItemCtx = useContext(FavouritesContext);

    const isFavourtite = favoriteItemCtx.ids.includes(props.name)
    const deleteGoals = () => {
        if (isFavourtite) {
            favoriteItemCtx.removeFavorite(props.name)
        } else {
            favoriteItemCtx.addFavorite(props.name)
        }
        props.DeleteGoals(props.name)
    }

    var width = Dimensions.get('window').width - 20;
    return (
        <Pressable onPress={deleteGoals} >
            <View style={[styles.viewStyleSheet, { width: width }]}>
                <Text style={[styles.textStyles, { flex: 1 }]}>{props.name}</Text>
                <Text style={[styles.textStyles, { color: 'black' }]}>{isFavourtite ? 'ADDED' : 'ADD TO FAVOURITE'}</Text>
            </View>
        </Pressable>

    )
}

const styles = StyleSheet.create({
    textStyles: {
        fontStyle: 'italic',
        fontSize: 20,
        color: 'white',
        padding: 10
    },
    viewStyleSheet: {
        margin: 5,
        backgroundColor: 'grey',
        borderRadius: 10,
        flexDirection: 'row'
    }
})
export default ListItemGoals;