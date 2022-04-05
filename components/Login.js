import React from 'react'
import { View, Text,Image,StyleSheet,TextInput,TouchableOpacity,Dimensions,TouchableWithoutFeedback,Keyboard,Alert    } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const designWidth=390;
const designHeight=844;
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const Login = ({navigation}) => {
  const [number, setNumber] = React.useState(null);
  const handleLogin=()=>{
    if(number.length===10)
    navigation.navigate('Verification',{
      number
    })
    else Alert.alert('Number cannot be less than 10 digits')
  }
  const handleGoogleLogin=()=>{
    Alert.alert('Not Implemented yet')
  }
  const handleAppleLogin=()=>{
    Alert.alert('Not Implemented yet')
  }
  return (
    <TouchableWithoutFeedback  onPress={() => Keyboard.dismiss()} 
    >
      <View style={styles.container}>
        <View style={styles.loginTop}>
          <Text style={styles.logoText}>Porsche</Text>
          <Image source={require('../assets/porchse.jpg')} style={styles.logo}
    />
        </View>
        <View style={styles.loginBottom}>
          <Text style={styles.loginHeader}>Log in</Text>
          <Text style={styles.phoneText}>Phone no.</Text>
          <TextInput
          style={styles.input}
          onChangeText={(e)=>setNumber(e)}
          value={number}
          placeholder="Enter phone no."
          keyboardType="numeric" maxLength={10}
        />
          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleLogin}
          >
            <Text style={styles.loginText}>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleGoogleLogin} style={styles.otherLoginMethods}
          >
            <Icon name='apple' size={30} style={{color:'#000'}} />
            <Text style={styles.otherLoginText}>Log in with Apple ID</Text>
            <View></View>
            <View></View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleAppleLogin} style={styles.otherLoginMethods}
          >
            <Image source={require('../assets/google.png')} style={styles.otherLoginIcons} resizeMode="contain"
  />
            <Text style={styles.otherLoginText}>Log in with Google</Text>
            <View></View>
            <View></View>
          </TouchableOpacity>
          <View style={styles.footer}>
            <Text style={{color:'#333333'}}>New on Porsche?</Text>
            <Text style={styles.footerText}> Sign Up</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
 
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
  backgroundColor:'#FFFFFF',

  paddingTop:61/designHeight*deviceHeight
},
logo:{
  height:194/designHeight*deviceHeight,
  width:303/designWidth*deviceWidth,

},
 loginTop:{
   alignItems:'center',
   marginBottom:77/designHeight*deviceHeight
 },
 logoText:{
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: 36,
  lineHeight: 44,
  color:'black',
  marginBottom:55/designHeight*deviceHeight
 },
 loginBottom:{
  marginLeft:24/designWidth*deviceWidth,
  marginRight:24/designWidth*deviceWidth,

 },
 loginHeader:{
  fontFamily: 'Rubik',
  fontSize:24,
  lineHeight:28,
  color: "#333333",
  marginBottom:35/designHeight*deviceHeight
 },
 phoneText:{
  color: "#333333",
  fontSize:16,
 },
 input:{
  borderBottomColor:'#D0D0D0',
  borderBottomWidth: 1,
  opacity: 0.5,
  fontSize:16,
  marginBottom:32/designHeight*deviceHeight,
  color:'black',
  paddingBottom:-12,
 },
 loginButton:{
   display:'flex',
   justifyContent:'center',
   alignItems:'center',
   backgroundColor:'#D6D6D6',
   height:48/designHeight*deviceHeight,
   width:342/designWidth*deviceWidth,
   borderRadius:8,
 },
 loginText:{
   color:'white',
   fontSize:16,
   lineHeight:20
 },
 otherLoginMethods:{
   flexDirection:'row',
   alignItems:'center',
   justifyContent:'space-between',
   borderWidth: 1,
   paddingLeft: 16/designWidth*deviceWidth,
   borderColor: '#000000',
   borderRadius:10,
   height:48/designHeight*deviceHeight,
   marginTop:16/designHeight*deviceHeight,
 }, 
 otherLoginText:{
   fontSize:16,
   color:'#000000'
 },
 otherLoginIcons:{
  height:30/designHeight*deviceHeight,
  width:30/designWidth*deviceWidth,
  
 },
 footer:{
   flexDirection:'row',
   justifyContent:'center',
   marginTop:24/designHeight*deviceHeight,
 },
 footerText:{
  color:'#2775EB'
 }
});


export default Login