import type { NextPage } from 'next'
import Title from '../components/Title'
import axios from "axios"
import React, { useState } from 'react'

interface FormError {
    success?: boolean;
    message: string;
}

const Contact: NextPage = () => {
    
    const [error, setError] = useState<FormError>()

    const handleSubmit = async (event: any | React.FormEvent<HTMLFormElement>  ) => {
        event.preventDefault();
        const form: any = {};
        for(let i = 0; i < 5; i++) {
            form[event.target[i].name] = event.target[i].value;
        }
       try {
        const response = await axios.post('/api/contact', {...form});
        console.log(response);
        if(response.status == 200){
            setError({success: true, message: response.data.message});
        }
       } catch (error: any) {
        if(error.response.status !== 200){
            setError({success: false, message: error.response.data.message});
        }
       }
        
    }   

  return (
    <>
      <section className='flex flex-col h-full w-full p-3'>
        <Title title='Contact' />
            <div className='flex flex-col justify-around items-center h-full'>
                <div className='flex flex-col justify-center items-center py-10 gap-4'>
                    <h2 className='text-3xl text-t-white font-semibold text-center'>Contactez moi par email</h2>
                    <h3 className='text-xl text-t-white font-semibold text-center'>Votre demande sera traitée dans les plus bref delais</h3>
                </div>
                <form onSubmit={handleSubmit} action="" className='flex flex-col max-w-2xl w-full gap-2 justify-center items-center'>
                    <div className='flex w-full'> 
                        <input type="text" name="lastname" placeholder='Nom'
                        className='w-1/2 rounded-full py-3 px-2 bg-t-light-black border border-slate-400 text-t-white' />
                        <input type="text" name="firstname" placeholder='Prénom'
                        className='w-1/2 rounded-full py-3 px-2 bg-t-light-black border border-slate-400 text-t-white' />
                    </div>
                    <input type="text" name="email" placeholder='Email'
                    className='w-full rounded-full py-3 px-2 bg-t-light-black border border-slate-400 text-t-white' />
                    <input type="text" name="subject" placeholder='Objet'
                    className='w-full rounded-full py-3 px-2 bg-t-light-black border border-slate-400 text-t-white' />
                    <textarea name="message" placeholder='Message' cols={30} rows={10}
                    className='w-full rounded-2xl py-3 px-2 bg-t-light-black border border-slate-400 text-t-white'></textarea>
                   <span className={error?.success ? "text-green-500 text-center" : "text-red-600 text-center"}>{error?.message}</span>
                    <button type='submit' className={
                        'bg-t-orange rounded-full text-t-white py-3 px-10 self-center text-xl transition-all' 
                        }>Envoyer</button>
                </form>
            </div>
      </section> 
    </>
  )
}

export default Contact
