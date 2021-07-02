import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { View } from 'react-native'
import { Text } from 'react-native'
import { Cast } from '../interface/creditsInterface'

interface Props {
    actor: Cast;
}

export const CastItem = ({actor}: Props) => {
    
    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`

    return (

        <View style={styles.container}>
                {
                    actor.profile_path && (
                        <Image
                            source = {{uri}}
                            style={{width: 50, height:50, borderRadius:10 }}
                        />
                    )
                }
                
                <View style={styles.actorInfo}>
                    <Text style ={{fontSize: 18, fontWeight: 'bold'}}>
                        {actor.name}
                    </Text>
                    <Text style ={{fontSize: 18, opacity: 0.7}}>
                        {actor.character}
                    </Text>
                </View>
            
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        backgroundColor:'white',
        marginBottom:20,
        borderRadius:20,
        shadowColor: "grey",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        
        elevation: 6,
        marginLeft:10,
        paddingRight:15
    },
    actorInfo:{
        marginLeft:20
    }
});
