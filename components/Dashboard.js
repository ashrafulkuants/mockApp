import React,{useState} from 'react'
import { View, TextInput,StyleSheet,Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const designWidth=390;
const designHeight=844;
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const Dashboard = () => {
  const [search,setSearch]=useState("")
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name='bars' size={27} class={styles.menuIcon}/>
      <TextInput style={styles.input}
            onChangeText={(e)=>setSearch(e)}
            value={search}
            placeholder="Search"
            />
      </View>
    </View>
    
  )
}
const styles=StyleSheet.create({
  constainer:{},
  header:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop:22/designHeight*deviceHeight
  },
  input:{
    borderWidth:1,
    width:301/designWidth*deviceWidth,
    height:40/designHeight*deviceHeight,
    paddingTop:9/designHeight*deviceHeight,
    paddingLeft:16/designWidth*deviceWidth,
    paddingBottom:7/designHeight*deviceHeight,
    color:'#757575',
    borderRadius:4,
    fontSize:16,
  }
})
export default Dashboard