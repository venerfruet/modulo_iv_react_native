import React from 'react';
import {
   View,
   Image,
   StyleSheet,
   SafeAreaView,
   StatusBar,
   Text,
   Pressable,
   Linking
} from 'react-native';

const coloGitHub='#010409';
const colorFontGitHub='#c9d1d9';
const colorDarkFontGitHub='#4f565e';
const urlebPage='https://venerfruet.github.io/modulo_ii_html_css3/index.html';
const imageProfile='https://venerfruet.github.io/modulo_ii_html_css3/pazamor_100x153.jpg';


const App=()=>{

   const handlePressGotToWebPage=async ()=>{
      const res=await Linking.canOpenURL(urlebPage);
      if(res){
         await Linking.openURL(urlebPage);
      }
   }

   return(
      <SafeAreaView style={style.container}>
         <StatusBar backgroundColor={coloGitHub} barStyle={'light-content'} />
         <View style={style.content}>
            <Image
               accessibilityLabel='Paz e Amor simbolo'
               style={style.avatar}
               source={{uri:imageProfile}}
            />
            <Text accessibilityLabel='Paz e Amor título' style={[style.defaultText, style.name]}>Paz e Amor</Text>
            <Text accessibilityLabel='Perfil GitHub' style={[style.defaultText, style.nick]}>venerfruet.github.io</Text>
            <Text accessibilityLabel='Paz e Amor descrição' style={[style.defaultText, style.description]}>O Movimento Ocorreu Por Volta Dos Anos 60, E Os Membros Adotavam Um Modo De Vida Comunitário, Tinham Um Estilo De Vida Nômade E Viviam Em Comunhão Com A Natureza, Negavam O Nacionalismo E Todas As Guerras.</Text>
            <Pressable onPress={()=>handlePressGotToWebPage()}>
               <View style={style.button}>
                  <Text style={[style.defaultText, style.textButton]}>Abrir Web Page</Text>
               </View>
            </Pressable>
         </View>
      </SafeAreaView>
   );
}

const style=StyleSheet.create({
   container:{
      backgroundColor:coloGitHub,
      flex:1, //expande para a tela toda
   },
   content:{
      alignItems:'center',
      flex:1,
      justifyContent:'center',
      padding:20
   },
   avatar:{
      height:200,
      width:200,
      borderRadius:100,
      borderColor:'yellow',
      borderWidth:2,
   },
   name:{
      fontSize:24,
      fontWeight:'bold',
      marginTop:17
   },
   nick:{
      fontSize:18,
      marginBottom:17,
      color:colorDarkFontGitHub
   },
   description:{
      fontSize:14,
      textAlign:'justify'
   },
   button:{
      backgroundColor: colorDarkFontGitHub,
      borderRadius:10,
      padding:20,
      marginTop:20
   },
   defaultText:{
      color:colorFontGitHub
   },
   textButton:{
      fontWeight:'bold',
      fontSize:16
   }
});

export default App;