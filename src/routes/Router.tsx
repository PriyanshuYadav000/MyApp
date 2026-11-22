import { View, Text, SectionList } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'

import { NavigationContainer } from '@react-navigation/native';

import { AppwriteContext } from '../appwrite/AppwriteContext';
import Loading from '../components/loading';


//Routes...
import { AppStack } from './AppStack';
import { AuthStack } from './authStack';

export const Router = () => {
    const [ isLoading , setIsLoading ] = useState<boolean>(true)
    const {appwrite,isLoggedIn,setIsLoggedIn} = useContext(AppwriteContext) 

    useEffect(() => {
        appwrite
        .getCurrentUser()     //clasis channig if the first one sussesfull then sencond one is clled 
        .then(response => {
            setIsLoading(false)
            if (response) {
                setIsLoggedIn(true)
            }
        })
        .catch(_ =>{
            setIsLoading(false)
            setIsLoggedIn(false)
        })
    },[appwrite,setIsLoggedIn])

    if(isLoading) {
        return <Loading/> 
    }
    // if this isLoading container is diabled it will directly jumped into the return
  return (
    <NavigationContainer>
        {isLoggedIn ? <AppStack/> : <AuthStack/> }
    </NavigationContainer>
  )
}
