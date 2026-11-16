
import 'react-native-url-polyfill/auto';

import {Client,Account,ID,Models} from 'react-native-appwrite';

import Config from 'react-native-config';
import { Snackbar } from 'react-native-snackbar';
const appwriteClient =  new Client()

const APPWRITE_ENDPOINT = Config.APPWRITE_ENDPOINT!;
const APPWRITE_PROJECT_ID = Config.APPWRITE_PROJECT_ID!;

type CreateUserAccount = {
    email : string,
    name : string,
    password : string
}

type LoginUserAccount = {
    email : string,
    password : string
}

class AppwriteService {
    account;

    constructor(){
        appwriteClient //conect with my local server 
        .setEndpoint(APPWRITE_ENDPOINT)
        .setProject(APPWRITE_PROJECT_ID)

        this.account = new Account(appwriteClient)
    }

    // crate the new record of user inside appwrite

    async createAccount({email,password,name} : CreateUserAccount){
            try {
                const user = await this.account.create({
                userId: ID.unique(),
                email,
                password
            })
                if(user) {
                    return this.login({email,password})
                } else {
                    return user
                }
            } catch(error) {
                Snackbar.show({
                    text : String(error),
                    duration: Snackbar.LENGTH_LONG,
                })
                console.log("App is created "+ error );
            }
        }

    // async login({email,password} : LoginUserAccount) {

    //     try {
    //         return await this.account.createEmailPasswordSession({
    //             email,
    //             password
    //     })

    //     } catch(error) {
    //         Snackbar.show({
    //             text : String(error),
    //             duration: Snackbar.LENGTH_LONG,
    //         })
    //         console.log("login App crashed "+ error );
    //     }

    // }

    // async getCurrentUser(){
    //     try{
    //         return await this.account.get()
    //     }catch(error){
    //         console.log("did not able to get user "+ error ); 
    //     }
    // }

    // async logout(){
    //     try{
    //         return await this.account.deleteSession({
    //         sessionId: 'current'
    //     });
    //     }catch(error){
    //         console.log("sucessfully logout"+ error ); 
    //     }
    // }
}


