import {Injectable, Res} from '@nestjs/common';
import * as speakeasy from 'speakeasy';
import * as qrcode from 'qrcode';
import * as fetch from 'node-fetch';
import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig';
import * as uuid from 'uuid';
// const db = new JsonDB(new Config("MyDB",true,false,"/"))
@Injectable()
export class AppService {


  // async RegisterUser(@Res()res){
  //   //CREATE DATABASE
  //   const db = new JsonDB(new Config("MyDB",true,false,"/"))
  //   //REGISTER USER
  //   const id = uuid.v4()
  //   try{
  //     const path = `/user/${id}`
  //     const temp_secret = speakeasy.generateSecret({name:'Citex'})
  //     db.push(path,{id, temp_secret})
  //     res.json( {
  //       "id": id,
  //       "secret": temp_secret.base32
  //     })
  //   }
  //   catch (error){
  //     console.log(error)
  //     // res.status(500).json({ message: `Error generating secret key-${error}`})
  //   }
  // }
  // async verify(userId,token,@Res()res){
  //   // var secret = ...
  //   //
  //   // var token = speakeasy.totp({
  //   //   secret: secret,
  //   //   encoding: 'base32'
  //   // });
  //   const db = new JsonDB(new Config("MyDB",true,false,"/"))
  //   try {
  //     // Retrieve user from database
  //     const path = `/user/${userId}`;
  //     const user = db.getData(path);
  //     console.log({ user })
  //     const { base32: secret } = user.temp_secret;
  //     const verified = speakeasy.totp.verify({
  //       secret,
  //       encoding: 'base32',
  //       token
  //     });
  //     if (verified) {
  //       // Update user data
  //       db.push(path, { id: userId, secret: user.temp_secret });
  //       // res.json({ verified: true })
  //       return "false"
  //     } else {
  //       // res.json({ verified: false})
  //       return "false"
  //     }
  //   } catch(error) {
  //     console.error(error);
  //     // res.status(500).json({ message: 'Error retrieving user'})
  //   };
  // }
  // async validate(userId,token,@Res()res){
  //   const db = new JsonDB(new Config("MyDB",true,false,"/"))
  //   try {
  //     // Retrieve user from database
  //     const path = `/user/${userId}`;
  //     const user = db.getData(path);
  //     console.log({ user })
  //     const { base32: secret } = user.secret;
  //     // Returns true if the token matches
  //     const tokenValidates = speakeasy.totp.verify({
  //       secret,
  //       encoding: 'base32',
  //       token,
  //       window: 1
  //     });
  //     if (tokenValidates) {
  //       // res.json({ validated: true })
  //       return "true"
  //     } else {
  //       // res.json({ validated: false})
  //       return "false"
  //     }
  //   } catch(error) {
  //     console.error(error);
  //     // res.status(500).json({ message: 'Error retrieving user'})
  //   };
  // }
}
