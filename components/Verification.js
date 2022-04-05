import React,{useState,useRef} from 'react'
import { View, Text,Alert,StyleSheet,TextInput,Button,Dimensions,TouchableOpacity,KeyboardAvoidingView,Keyboard    } from 'react-native';

const designWidth=390;
const designHeight=844;
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const Verification = ({route,navigation}) => {
  const number=route.params.number;
  const [pin1,setPin1]=useState('')
  const [pin2,setPin2]=useState('')
  const [pin3,setPin3]=useState('')
  const [pin4,setPin4]=useState('')
  const pin1Ref=useRef(null)
  const pin2Ref=useRef(null)
  const pin3Ref=useRef(null)
  const pin4Ref=useRef(null)
  const tempOtp=1234
  React.useEffect(() => {
    pin1Ref.current.focus()
  }, [])
  
  const handleSubmit=()=>{
    const userOtp=pin1+pin2+pin3+pin4
    if(tempOtp==userOtp){
      navigation.navigate('Dashboard')
    }
    else {Alert.alert('Wrong Otp')}
  }

  return (
    <KeyboardAvoidingView keyboardVerticalOffset={30} behavior='height' style={styles.container}>
      <Text style={styles.mainText}>Enter the <Text style={styles.highlightedText}>4 digit</Text> OTP which you have received on your mobile no. +91&nbsp;-&nbsp;{number} <Text style={styles.blueText} onPress={()=>navigation.navigate('Login')}>Edit</Text>
      </Text>
      <View style={styles.otpContainer}>
        <View style={styles.inputContainer}>
          <TextInput
              style={styles.input}
              onChangeText={(e)=>{
              setPin1(e)
              if(pin1=="")
                pin2Ref.current.focus()}}
              value={pin1}
              ref={pin1Ref}
              keyboardType="numeric" maxLength={1}
            />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={(e)=>{setPin2(e)
            if(pin2=="")
            pin3Ref.current.focus()}}
            value={pin2}
            ref={pin2Ref}
            onKeyPress={({ nativeEvent }) => {
                if (nativeEvent.key === 'Backspace') {
                  pin1Ref.current.focus()
                }
              }}
            keyboardType="numeric" maxLength={1}
          />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                onChangeText={(e)=>{setPin3(e)
                  if(pin3=="")
                  pin4Ref.current.focus()}}
                value={pin3}
                ref={pin3Ref}
                onKeyPress={({ nativeEvent }) => {
                  if (nativeEvent.key === 'Backspace') {
                    pin2Ref.current.focus()
                  }
                }}
                keyboardType="numeric" maxLength={1}
              />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              onChangeText={(e)=>setPin4(e)}
              value={pin4}
              ref={pin4Ref}
              onKeyPress={({ nativeEvent }) => {
                if (nativeEvent.key === 'Backspace') {
                  pin3Ref.current.focus()
                }
              }}
              keyboardType="numeric" maxLength={1}
            />
          </View>
      </View>
      <View style={styles.otpReContainer}>
        <Text style={styles.optReText}>Code not received? <Text style={styles.blueText}>Resend</Text>
        </Text>
      </View>
      <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
        <Text>Submit</Text>
      </TouchableOpacity>

    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container:{
    paddingTop:58/designHeight*deviceHeight,
    display:'flex',
    alignItems:'center',
    color:'#000000',
    fontFamily:'Rubik-Bold'
    
  },
  mainText:{
    fontWeight:'500',
    fontSize:18,
    width:(302/designWidth)*deviceWidth,
    textAlign:'center',
    marginBottom:43/designHeight*deviceHeight,
    color:'#000000',
    
  },
  blueText:{
    color:'#2775EB'
  },
  highlightedText:{
    fontWeight:'bold',
  },
  otpContainer:{
    width:171/designWidth*deviceWidth,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:24/designHeight*deviceHeight,
  },
  inputContainer:{
    width:25/designWidth*deviceWidth,
  },
  input:{
    fontSize:28,
    borderBottomWidth:1,
    color:'#333333',
    fontWeight:'500'

  },
  optReText:{
    fontSize:14,
    fontWeight:'400',
    lineHeight: 15,
    color:'#000000',
    fontFamily:'Rubik'
  },
  submitBtn:{
    width:342/designWidth*deviceWidth,
    height: 48/designHeight*deviceHeight,
    backgroundColor: '#7B7B7B',
    justifyContent:'center',
    alignItems:'center',
    marginTop:126/designHeight*deviceHeight,
    borderRadius:8,
  }
})

export default Verification