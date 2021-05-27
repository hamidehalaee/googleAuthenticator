import { Injectable } from '@nestjs/common';
import * as speakeasy from 'speakeasy';
import * as qrcode from 'qrcode';
@Injectable()
export class AppService {

  getQRcode(): any {
    const secret = speakeasy.generateSecret({
      name: 'devs'
    })
    console.log(secret)
    // {
    //   ascii: 'bD*b*no5P&cTp%}T[yz&.zbgMPiZa<S1',
    //   hex: '62442a622a6e6f355026635470257d545b797a262e7a62674d50695a613c5331',
    //   base32: 'MJCCUYRKNZXTKUBGMNKHAJL5KRNXS6RGFZ5GEZ2NKBUVUYJ4KMYQ',
    //   otpauth_url: 'otpauth://totp/devs?secret=MJCCUYRKNZXTKUBGMNKHAJL5KRNXS6RGFZ5GEZ2NKBUVUYJ4KMYQ'
    // }
    qrcode.toDataURL(secret.otpauth_url,(err,data) => {
      console.log(data)
    })
  }

  verify() {
    
  }
}
