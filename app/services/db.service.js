const { MongoClient } = require("mongodb");
const {DB, ENVIROMENT} = require("../../config/config");

 class DbService{
    constructor(){
        this.connect();
    }
    connect = async()=>{
        try{
            let DB_URL ="";
            if(ENVIROMENT=== 'dev'){
               DB_URL = DB.PROTOCOL+"://"+DB.HOST+":"+DB.PORT;
            }else if(ENVIROMENT === 'prod'){
                DB_URL = DB.PROTOCOL+"://"+DB.HOST+":"+DB.PORT;
            }
            let client = await MongoClient.connect(DB_URL)
            //Example: mongodb://username:pwd@host:27017
            // let client = await MongoClient.connect(DB.PROTOCOL+"://"+DB.USER+":"+DB.PWD+"@"+":"+DB.HOST+":"+DB.PORT)
            this.db = client.db(DB.NAME);
        }catch(err){
            throw err;
        }
    }
 }
 
module.exports = DbService;