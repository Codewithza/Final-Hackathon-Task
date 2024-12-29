import { Client } from 'appwrite';

const client = new Client();

client
// .setEndpoint(process.env.REACT_APP_API_ENDPOINT)
// .setProject(process.env.REACT_APP_PROJECT_ID);
.setProject('6771506d002b50efe145');

export default client;

