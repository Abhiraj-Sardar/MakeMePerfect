import { Client,Databases,ID } from 'appwrite';

const client = new Client();
const DB_ID = "66c89520002bcb8a359e";
const COLLECTION_ID = "66c8954300350b268d18";
client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66c891f000246fa50ade');

export const databases = new Databases(client);
export {DB_ID,COLLECTION_ID,ID};