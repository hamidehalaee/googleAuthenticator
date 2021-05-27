import { Injectable } from '@nestjs/common';
import * as speakeasy from 'speakeasy';
import * as qrcode from 'qrcode';
@Injectable()
export class AppService {
  getQRcode(): any {
    const secret = speakeasy.generateSecret({
      name: 'devs'
    })

    qrcode.toDataURL(secret.otpauth_url,(err,data) => {
      console.log(data)
    })
  }
}
