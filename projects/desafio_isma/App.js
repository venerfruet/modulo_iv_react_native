/*
   código criado por Vener Fruet da Silveira
   durante as aulas do prof. Ismael Moreira.

   contém um vetor 'map' para geração de mensagens
   no display através da função 'mapToGrid' e altera
   a mensagem ao tocar no display através da função
   'toggleMap'
   
*/

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
const colorOff='green';
const colorOn='#7fff00';

const urlebPage='https://venerfruet.github.io/modulo_ii_html_css3/index.html';
const imageProfile='https://venerfruet.github.io/modulo_ii_html_css3/pazamor_100x153.jpg';

var currentMap=0;

const map=[
   [
      [0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,1,1,0,0,0,1,0,0,0,1,0,0],
      [0,1,0,1,0,0,1,0,0,1,0,1,0],
      [0,1,0,1,0,0,1,0,0,1,0,1,0],
      [0,1,1,0,0,0,1,0,0,0,1,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0]
   ],
   [
      [0,0,0,0,1,1,0,1,1,0,0,0,0],
      [0,0,0,1,0,0,1,0,0,1,0,0,0],
      [0,0,0,1,0,0,0,0,0,1,0,0,0],
      [0,0,0,0,1,0,0,0,1,0,0,0,0],
      [0,0,0,0,0,1,0,1,0,0,0,0,0],
      [0,0,0,0,0,0,1,0,0,0,0,0,0]
   ],
   [
      [0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,1,1,1,1,0,0,1,1,0,0,1,0],
      [0,1,0,0,1,0,0,1,1,1,0,1,0],
      [0,1,0,0,1,0,0,1,0,1,1,1,0],
      [0,1,1,1,1,0,0,1,0,0,1,1,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0]
   ],
   [
      [1,1,1,1,1,1,1,1,1,1,1,1,1],
      [1,0,0,0,1,0,0,0,1,0,0,0,1],
      [1,0,1,0,1,0,1,1,1,0,1,1,1],
      [1,0,1,0,1,0,0,1,1,0,0,1,1],
      [1,0,0,0,1,0,1,1,1,0,1,1,1],
      [1,1,1,1,1,1,1,1,1,1,1,1,1]
   ]
]

const toggleMap=()=>{
   currentMap = currentMap < map.length-1 ? currentMap + 1 : 0;
}

const mapToGrid=()=>{
   let grid=[];

   map[currentMap].map((line, itemL)=>{

      let segmento=[];

      line.map((point, itemP)=>{

         let onoff = point===0 ? style.point_off : style.point_on;

         segmento.push(
            <View
               key={`p${itemP}`}
               style={[style.point_default, onoff]}>
            </View>
         )

      });
         
      grid.push(
         <View key={`c${itemL}`} style={style.grid_row}>
            {segmento}
         </View>
      );
   
   });

   return(
      <View style={style.grid_column}>
         {grid}
      </View>
   );

}

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
            <Pressable onPress={()=>toggleMap()}>
               {mapToGrid}
            </Pressable>
            <Text accessibilityLabel='Informa toggle message' style={[style.defaultText, style.message]}>toque para alterar</Text>
            <Text accessibilityLabel='Paz e Amor descrição' style={[style.defaultText, style.description]}>Web Page desenvolvida durante as aulas do professor Lucas Vilaboim no Decola Tech 3a edição.</Text>
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
      textAlign:'center'
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
   },
   grid_row:{
      flexDirection:'row'
   },
   grid_column:{
      flexDirection:'column'
   },
   message:{
      fontSize:12,
      marginBottom:17,
      color:colorDarkFontGitHub
   },
   point_default:{
      borderRadius:3,
      width:11,
      height:11,
      margin:1
   },
   point_on:{
      backgroundColor:colorOn
   },
   point_off:{
      backgroundColor:colorOff
   }
});

export default App;