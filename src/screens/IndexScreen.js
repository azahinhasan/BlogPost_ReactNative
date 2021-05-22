import React,{ useContext } from 'react';

import { View,Text, StyleSheet} from 'react-native';
import BlogContext from '../context/BlogCOntext';

const IndexScreen =()=>{

    const value = useContext(BlogContext);

    return(
        <View>
            <Text>
                Index Screen
            </Text>
            <Text>{value}</Text>
        </View>
    );
};

const styles= StyleSheet.create({


});

export default IndexScreen;