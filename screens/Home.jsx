import { View ,Text, Button} from "react-native"

const Home = ({navigation}) =>{
   

    return <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
        <Text>
           Home Screen 
        </Text>
        <Button title="About" onPress={()=>{navigation.navigate('about')}}/>
    </View>

}

export default Home