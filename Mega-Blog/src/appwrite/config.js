import conf from '../conf.js';
import {Client ,Databases ,ID ,Storage ,Query} from "appwrite";

export class DatabaseService{
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectID);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);    
    }

    async createPost({title, slug ,content, image, status,userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    image,
                    status,
                    userId,
                }



            )
            
        } catch (error) {
            console.log("Appwrite :: createPost :: error",error);
            
            
        }

    }

    async updatePost( slug, {title, content, image, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    image,
                    status,
                }
            )
            
        } catch (error) {
            console.log("Appwrite :: updatePost:: error",error);
            
        }

    }

    async deletePost(slug){
        try {
             await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
            
        } catch (error) {
            console.log("Appwrite :: deletePost :: error",error);
            return false
            
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            
        } catch (error) {
            console.log("Appwrite service :: getPost :: error",error);
            
        }
    }

    async getPosts(queries = [Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            )
            
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error",error);
            
        }
        return false
    }

    // file uplaod service

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketID,
                ID.unique(),
                file
            )
            
        } catch (error) {
            console.log("Appwrte service :: uplaodFile :: error ",error);    
        }
        return false
    }

    // delete file service
    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketID,
                fileId
            )
            return true
            
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error",error);
            
        }
        return false
    }

    // preview file service
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketID,
            fileId
        )
    }




}

const service = new DatabaseService()
export default service


