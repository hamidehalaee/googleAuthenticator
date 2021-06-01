import {Controller, Get, Render, Body, Post, Req, Res} from '@nestjs/common';
import { AppService } from './app.service';
import * as speakeasy from 'speakeasy';
import {spawn} from "child_process";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('secret')
  async secret(){


    let secret = speakeasy.generateSecret({length: 20});
    console.log(secret)
    return `"secret": ${secret.base32}`
  }

  // @Post('generate')
  // async generate(@Body() body) {
  //   let token = speakeasy.totp({
  //     secret: body.secret,
  //     encoding: "base32"
  //   })
  //   return `"token":${token}`;
  // }

  @Post('validate')
  async validate (@Body() body){
    let validate = speakeasy.totp.verify({
      secret: body.secret,
      encoding: "base32",
      token: body.token,
      window: 1
    })
    return `"valid": ${validate}`
  }



  // @Get()
  // @Render('index')
  // async GetAll(@Res()res,@Body()body) {
  //   console.log(res,body)
  // }
  //
  // @Post()
  // async PostAll(@Body() body){
  //   //BODY.TOKEN => THE CODE YOU PUT ON
  //   // return this.appService.GetQRCode(body.token);
  // }
  //
  // @Post('register')
  // async RegisterUser(@Body() body,@Res() res){
  //   return this.appService.RegisterUser(res);
  // }
  //
  // @Post('verify')
  // async verify(@Body() body,@Res() res){
  //   return this.appService.verify(body.userId , body.token, res )
  // }
  //
  // @Post('validate')
  // async validate(@Body() body ,@Res() res){
  //   return this.appService.validate(body.userId , body.token , res)
  // }
}
