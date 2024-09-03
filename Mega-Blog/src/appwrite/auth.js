import conf from '../conf/conf.js';
import {Client,Account,ID} from "appwrite";

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectID);
        this.account = new Account(this.Client);    

        
    }

    async createAccount({email,password,name}){
        try {
            const userAccount = await this.account.create(ID.unique(),email ,name,password);
            if (userAccount) {
                // call another methd
                return this.login({email,password});
            } else {
                return userAccount;
            }
        } catch (error) {
            console.log("Appwrite :: account :: error",error);
            ;
        }
    }

    async login({email, password}){
        try {
             return await this.account.createEmailPasswordSession(email,password);
            
        } catch (error) {
            console.log("Appwrite :: login :: error",error);
            ;
            
        }
    }

    async getCurrentUser(){
        try {
            await this.account.get();
            
        } catch (error) {
            console.log("Appwite service :: getCurrentUser :: error",error);
            
        }
        return null;
    }

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("logout error ",error);
            
        }
    }


}

const authService = new AuthService();

export default authService