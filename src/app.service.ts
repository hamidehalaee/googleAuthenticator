import { Injectable } from '@nestjs/common';
import * as speakeasy from 'speakeasy';
import * as qrcode from 'qrcode';
@Injectable()
export class AppService {

  async getQRcode() {
    const secret = speakeasy.generateSecret({
      name: 'citex'
    })
    console.log(secret)
    // {
    //   ascii: 'bD*b*no5P&cTp%}T[yz&.zbgMPiZa<S1',
    //   hex: '62442a622a6e6f355026635470257d545b797a262e7a62674d50695a613c5331',
    //   base32: 'MJCCUYRKNZXTKUBGMNKHAJL5KRNXS6RGFZ5GEZ2NKBUVUYJ4KMYQ',
    //   otpauth_url: 'otpauth://totp/citex?secret=MJCCUYRKNZXTKUBGMNKHAJL5KRNXS6RGFZ5GEZ2NKBUVUYJ4KMYQ'
    // }
    let QRcode = []; 
    await qrcode.toDataURL(secret.otpauth_url,async(err,data) => {
      // QRcode.push(data)
      // write('<img src="' + data + '">');
      console.log(data);
      
    })
    

    console.log(QRcode)
    
    var verified = speakeasy.totp.verify({
      secret: 'Z627h3ZO^mKi}d@O#dHW42Zmu]M!$i(/',
      encoding: 'ascii',
      token: '080341'
    })
    console.log(verified)
  }

  // async verify() {
  // }
}
