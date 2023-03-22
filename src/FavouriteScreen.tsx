import { Text, View } from 'react-native';
import { FavouritesContext } from '../store/context/favorites_context';
import { useContext } from "react";

const FavouriteScreen = () => {
    const favoriteItemCtx = useContext(FavouritesContext);
    function renderCategories() {
        return favoriteItemCtx.ids.map((item, index) => <Text style={{ color: 'black', fontSize: 20 }} key={index}>{item}</Text>);
    }
    return (
        <View>
            {renderCategories()}
        </View>
    )
}
export default FavouriteScreen;