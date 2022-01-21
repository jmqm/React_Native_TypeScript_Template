import { Text, View, StyleSheet } from 'react-native';

const App = () => {
    return (
        <View style={styles.root}>
            <Text>Yo</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center'
    }
});

export default App;
