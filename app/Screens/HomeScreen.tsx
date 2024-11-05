import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import RootLayout from './_layout'
import { Colors } from '@/constants/Colors'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { request } from '@/hooks/useApi'


const HomeScreen =() => {
    const [option, setOption] = useState(1)
    const [like, setLike] = useState(false)
    const [volume, setVolume] = useState(false)
    const [save, setSave] = useState(false)
    const [level, setLevel] = useState(false)
    const [search, setSearch] = useState(false)
    const [classe, setClasse] = useState("Beginner")
    const [data, setData]  = useState([])
    const [textSearch, setTextSearch] = useState('')
    const [word, setWord] = useState('hello')

    function wordOption(id: number){
        setOption(id)
    }
    function onLevel(id: string){
        setClasse(id)
        setLevel(!level)
    }
    const handleSubmit = (word : string) =>{
        console.log('Vous avez effectuer une recherche du mot: ', word);
        setWord(word);
        setSearch(!search);
    }

    useEffect(() =>{
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/essential`)
        .then(response => response.json())
        .then(donnees => setData(data))
        .catch(error => console.log("Erreur",error))
    }, [])
    console.log("jfjg",data)

  return (
    <RootLayout>
        <View style={styles.container}>
            <View style={styles.wordContainer}>
                <Text style={{
                    fontFamily:'outfit',
                    fontSize: 55,
                    textAlign: "center",
                    fontWeight: "thin",
                    color: Colors.SECONDARY,
                    marginTop: 35
                }}>{word}</Text>
                <Text style={{
                    fontFamily:"outfit",
                    fontSize: 15,
                    textAlign: "center",
                    color: Colors.SECONDARY,
                    marginTop: 15,
                    marginBottom: 35
                }}>sdsd;qzndik:q</Text>
                
                <View style={{
                    marginTop: 20,
                    width: "100%",
                    height: "auto",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingVertical: 15,
                    paddingHorizontal: 20,
                }}>
                    <TouchableOpacity style={(option === 1)&&styles.firstWordContainer||styles.otherWordContainer}
                    onPress={()=> wordOption(1)}
                    >
                        <Text style={!(option===1)&&{
                            fontFamily:"outfit",
                            fontSize: 18,
                            textAlign: "center",
                            color: Colors.GRAY
                            }|| {
                            fontFamily:"outfit",
                            fontSize: 18,
                            textAlign: "center",
                            color: Colors.WHITE}}>Definition</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={(option === 2)&&styles.firstWordContainer||styles.otherWordContainer}
                    onPress={()=> wordOption(2)}
                    >
                        <Text style={!(option===2)&&{
                            fontFamily:"outfit",
                            fontSize: 18,
                            textAlign: "center",
                            color: Colors.GRAY
                        }|| {
                            fontFamily:"outfit",
                            fontSize: 18,
                            textAlign: "center",
                            color: Colors.WHITE}}>Synonyms</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={(option === 3)&&styles.firstWordContainer||styles.otherWordContainer}
                    onPress={()=> wordOption(3)}
                    >
                        <Text style={!(option===3)&&{
                            fontFamily:"outfit",
                            fontSize: 18,
                            textAlign: "center",
                            color: Colors.GRAY
                        }|| {
                            fontFamily:"outfit",
                            fontSize: 18,
                            textAlign: "center",
                            color: Colors.WHITE}}>Antonyms</Text>
                    </TouchableOpacity>

                </View>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={{
                    fontFamily: 'outfit',
                    fontSize: 28,
                    color:Colors.GRAY,
                    textAlign: 'center',
                    width: '100%'
                }}>
                    (adj) Absolutely needed, can't do without.
                </Text>
                <Text style={{
                    fontFamily: 'outfit',
                    fontSize: 18,
                    color:Colors.GRAY,
                    textAlign: 'center',
                    width: '100%',
                    marginTop: 25
                }}>
                    Water is necessary for plants.
                </Text>
            </View>
            <View style={styles.optionContainer}>
                <Ionicons name="caret-up-circle-outline" size={35} color={Colors.GRAY} />
                <Ionicons name={volume&&"volume-high-sharp"|| "volume-low-outline"} size={35} color={Colors.GRAY} onPress={()=>setVolume(!volume)}/>
                <Ionicons name={!like&&"heart-outline"|| "heart-sharp"} size={35} color={Colors.GRAY} onPress={()=>setLike(!like)}/>
                <Ionicons name={save&&"add-outline" || "add-sharp"} size={35} color={Colors.GRAY} onPress={()=>setSave(!save)}/>
            </View>
            <View style={styles.footerContainer}>
                {!level&&<TouchableOpacity style={styles.footerLeft}
                    onPress={()=>setLevel(!level)}
                >
                    <Ionicons name={!level&&"menu-outline"|| "close-outline"} size={30} color={Colors.GRAY}/>
                    <Text style={{
                        fontFamily: 'outfit-medium',
                        fontSize: 20,
                        color:Colors.GRAY,
                        textAlign: 'center',
                    }}>{classe}</Text>
                </TouchableOpacity> 
                ||
                    
                <View style={{
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "auto",
                    height: "auto",
                    paddingVertical: 15,
                    marginHorizontal: 10,
                    gap: 10,
                    bottom: 30

                }}>
                    <TouchableOpacity style={styles.footerLeftLevel}
                        onPress={()=>onLevel("Advanced")}
                    >
                        <Text style={{
                            fontFamily: 'outfit-medium',
                            fontSize: 20,
                            color:Colors.GRAY,
                            textAlign: 'center',
                        }}>Avanced</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.footerLeftLevel}
                        onPress={()=>onLevel("Intermediate")}
                    >
                        <Text style={{
                            fontFamily: 'outfit-medium',
                            fontSize: 20,
                            color:Colors.GRAY,
                            textAlign: 'center',
                        }}>Intermediate</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity style={styles.footerLeftLevel}
                        onPress={()=>onLevel("Beginner")}
                    >
                        <Text style={{
                            fontFamily: 'outfit-medium',
                            fontSize: 20,
                            color:Colors.GRAY,
                            textAlign: 'center',
                        }}>Beginner</Text>
                    </TouchableOpacity>
                </View>
                }
                <View style={styles.footerRight}>
                    {search&& (
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: Colors.WHITE,
                            width: "100%",
                            height: "auto",
                            right: 0,
                            left: -170,
                            position: 'absolute',
                            zIndex: 30,

                        }}>
                            <View style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                backgroundColor: Colors.WHITE,
                                paddingHorizontal: 15,
                                paddingVertical: 10,
                                minWidth: 400,
                                borderRadius: 50,
                                shadowColor: Colors.SECONDARY,
                                shadowOffset: {width: 10, height: 10},
                                shadowRadius: 10,
                                shadowOpacity: 0.8,
                                elevation: 5,
                            }}>
                                <Ionicons name="search" size={25} color={Colors.GRAY} onPress={()=>handleSubmit(textSearch)}/>
                                <TextInput placeholder='Search...' blurOnSubmit={true} 
                                style={{
                                    width: 250,
                                    fontSize: 20,
                                    fontFamily: "outfit",
                                    color: Colors.GRAY
                                }}
                                onChangeText={setTextSearch}
                                onSubmitEditing={()=>handleSubmit(textSearch)}
                                
                                />
                                <Ionicons name='close' size={25} color={Colors.GRAY} onPress={()=>setSearch(!search)}/>
                            </View>  
                        </View>
                    ) || 
                    (<TouchableOpacity style={styles.footerLogoContainer}
                    onPress={()=>setSearch(!search)}
                    >
                        <Ionicons name="search" size={25} color={Colors.GRAY} />
                    </TouchableOpacity>)
                    }
                    
                    <View style={styles.footerLogoContainer}>
                        <FontAwesome name="user" size={25} color={Colors.GRAY} />
                    </View>
                </View>
            </View>
        </View>
    </RootLayout>
    
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: "100%",
        backgroundColor: Colors.PRIMARY,
        flexDirection: "column",
        justifyContent: "space-between",
        paddingVertical: 25,
        paddingTop: 125,
        paddingBottom: 25,
    },
    wordContainer:{
        width: "100%",
        height: "auto",
        flexDirection: "column",
    },
    firstWordContainer:{
        backgroundColor: Colors.SECONDARY,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 30,
        width: "32%",
        shadowColor: Colors.SECONDARY,
        shadowOffset: {width: 0, height: 5},
        elevation: 5,
        shadowOpacity: 0.8
    },
    otherWordContainer:{
        backgroundColor: Colors.WHITE,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 30,
        borderColor: Colors.SECONDARY,
        borderWidth: 1.2,
        width: "32%",
        shadowColor: Colors.SECONDARY,
        shadowOffset: {width: 0, height: 5},
        elevation: 15,
        shadowOpacity: 0.8
    },
    descriptionContainer:{
        flexDirection: "column",
        justifyContent: "space-between",
        marginTop: 15
    },
    optionContainer:{
        flexDirection: "row",
        justifyContent: "space-around",
        gap: 15, 
        alignItems: "center",
    },
    footerContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 15,
        width: "100%",
        height: 100,
        paddingHorizontal: 25,
    },
    footerLeft:{
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
        paddingVertical: 6,
        backgroundColor: Colors.WHITE,
        borderRadius: 50,
    },
    footerRight:{
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 10,
        alignItems: "center",
        right: 0,
        width: "auto",
        height: "100%"
    },
    footerLogoContainer:{
        width: 38,
        height: 38,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: Colors.WHITE,
        borderRadius: 50
    },
    footerLeftLevel: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: 140,
        height: 42,
        opacity: 0.75,
        backgroundColor: Colors.WHITE,
        borderRadius: 15,
    }
})