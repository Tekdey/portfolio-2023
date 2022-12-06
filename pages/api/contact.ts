// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Manager from '../../utils/handler/contact'
import mail from "../../utils/nodemailer"
import axios from "axios"


interface Body {
  firstname: string,
  lastname: string,
  email: string,
  subject: string,
  message: string
}


export default async function contact(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if(req.method == "POST"){
    try{
      const manager = new Manager(req.body)
      const body: Body = manager.check()
      
      
      if(body){
        mail.sendMail(body);
        await axios.get(`${process.env.PHONE_URL}`);
      }

      return res.status(200).json({message: "Votre message a été envoyé avec succès, vous obtiendrez une réponse sous 24h.",});
    } catch (err: any){
      return res.status(err.code || 500).json({message: err.message || "Internal Error, please try later."});
    }
  }


  res.status(200).json({ name: 'John Doe' })
}
