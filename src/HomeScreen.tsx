import { useState, } from 'react';
import {
    FlatList,
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
} from 'react-native';
import ListItemGoals from './Component/ListItemGoals';
import Heading from './Component/Heading';

type Props = {}

const HomeScreen = (props: Props) => {


    const [listOfGoals, setListOfGoals] = useState(["Number 1", "Number 2", "Number 3", "Number 4"])
    const deleteGoals = (ids) => {
        console.log('delete goals ' + ids)
    }
    return (<View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ justifyContent: 'space-around' }}>
            <View style={{ height: 60, alignSelf: 'stretch', margin: 5 }}>
                <Heading />
            </View>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', margin: 5 }}>
            <FlatList
                data={listOfGoals}
                renderItem={({ index, item }) => {
                    return (
                        <ListItemGoals name={item} DeleteGoals={deleteGoals} />
                    )
                }}
                keyExtractor={(item, index) => index}
            />
        </View>
        <TouchableOpacity
            onPress={() => props.navigation.navigate('ScreenB')}
            style={{ backgroundColor: 'red', width: '100%' }}>
            <Text style={styles.addTextStyles}>Display Added Favourites</Text>
        </TouchableOpacity>
    </View>)
}

const styles = StyleSheet.create({    
    addTextStyles: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        fontStyle: 'italic',
        margin: 10
    }
});

export default HomeScreen