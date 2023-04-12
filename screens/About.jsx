import { View ,Text,Button} from "react-native"

const About = ({navigation}) =>{
    console.log(navigation)

    return <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
        <Text>
           About Screen 
        </Text>
        <Button title="About" onPress={()=>{navigation.goBack()}}/>
    </View>

}

export default About