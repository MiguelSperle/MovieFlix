import { ContainerAccount } from "../newAccount/style";
import { TypeTitleLogin, TypeDataForm, TypeInformationNewAccount  } from "../../interface/GlobalTypes";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { api } from '../../service/api'
import {  toast } from 'react-toastify';

export default function NewAccount(props: TypeTitleLogin){

    const { register, formState: { errors }, handleSubmit } =  useForm<TypeInformationNewAccount>();

    const [ verificationAccount, setVerificationAccount ] = useState<TypeDataForm[]>([])

    const navigate = useNavigate()

    useEffect(() => {
      const fetchNewUsers = async() => {
        const url = "/users"
        try {
          const response = await api.get(url)
          return setVerificationAccount(response.data)
        }catch(e){
          console.log(e)
        }
      }
      fetchNewUsers()
    },[])

    const newAccount = (data: TypeInformationNewAccount) => {

      const verificationExistsEmail = verificationAccount.find( (accountExists) => accountExists.email === data.email) // verificando se o email que foi posto no input ja existi cadastrado ao enviar
      if(verificationExistsEmail){
        return toast.error('Email já cadastrado', { // se sim retorna esse alert
          theme: 'dark'
        })
      } else if (data.email) {
        if(data.email.includes('.com') === false){
         return toast.error('Complete seu email', {
          position: toast.POSITION.TOP_CENTER,
          theme: 'dark'
         })
        } else {
          const url = "/users"
          api.post(url, {
              id: '',
              name: data.name,
              email: data.email,
              password: data.password,
              role: 'User'
            })
            navigate('/')
            return toast.success('Email cadastrado', {
              theme: 'dark'
            })   
        }
        
      }
    }

    return (
        <ContainerAccount>
            <header>
              <h1 className="title-newAccount">{props.title}</h1>
             <Link className="link-go-to-initial" to='/'><button className="button-into-link">Entrar</button></Link>
            </header>

            <div className="container-info-stream">
                <p className="first-text-info-stream">Filmes, séries e muito mais. Sem limites.</p>
                <p className="second-text-info-stream">Assista onde quiser. Cancele quando quiser.</p>
                <p className="third-text-info-stream">Quer assistir? Informe seu email para criar sua conta.</p>
                <form onSubmit={handleSubmit(newAccount)}>
                  <div className="container-inputs-button">
                    <div className="container-input-account">
                      <div className="container-email-account">
                        <input {...register("email", { required:  true })}  type="email"  autoComplete="off" placeholder="Email"/>
                        {errors.email && <span>O email é obrigatorio</span>}
                      </div>
                      <div className="container-password-account">
                        <input {...register("password", { required:  true })} type="password" placeholder="Senha" minLength={6}  />
                        {errors.password && <span>A senha é obrigatoria</span>}
                      </div>
                      <div className="container-name-account">
                        <input {...register("name", { required:  true })} type="text" placeholder="nickname" autoComplete="off" />
                        {errors.name && <span>Seu nome é obrigatorio</span>}
                      </div>
                    </div>
                    <div className="container-button-finish-account">
                      <button  className="button-finish-account" type="submit">Vamos-lá</button>
                    </div>
                  </div>
                </form>
            </div>
        </ContainerAccount>
    )
}