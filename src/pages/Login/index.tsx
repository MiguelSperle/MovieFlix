import { LoginContainer } from './style'; 
import { Link, useNavigate } from 'react-router-dom'; 
import {  toast } from 'react-toastify';
import { api } from '../../service/api';
import { useEffect, useState } from 'react';
import {  TypeTitleLogin, TypeDataForm } from '../../interface/GlobalTypes';
import {  useForm } from "react-hook-form";


export default function Login(props: TypeTitleLogin){

  const [ischecked, setIsChecked] = useState(false)

  const { register, formState: { errors }, handleSubmit } =  useForm<TypeDataForm>();

  const [ dataUser, setDataUser ] = useState<TypeDataForm>(); // guardando os dados form

  const [ users, setUsers ] = useState<TypeDataForm[]>([]); // guardando os dados da api dentro desse estado

  const navigate = useNavigate();

  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const loginUser = (data: TypeDataForm) => {
    setDataUser(data)
    
    const verificationEmail = users.find(user => user.email === data.email)
    if(!verificationEmail){ // se o email digitado for diferente do que existe na api, vai retornar o erro
      return toast.error('Email inválido', {
        theme: 'dark'
      })
    } else if (verificationEmail.password !== data.password){ // se a senha do email digitado for diferente do que tem na api, vai retornar o erro
      return toast.error('senha inválida', {
        theme: 'dark'
      })
    
    } else if (verificationEmail.name && ischecked || verificationEmail.name){ // verificando se o name existi do email digitado e se ele clicou ou não no checkbox
      navigate('/inicio') 
      localStorage.setItem('dataUser', JSON.stringify(verificationEmail.name)) 
    }
  }
  
  useEffect(() => {
    const fetchUsers = async() => {
      const url = "/users"
      try {
        const response = await api.get(url)
        return setUsers(response.data)
      }catch(e){
        console.log(e)
      }
    }
    fetchUsers()
  },[])

  function handleChangeCheckbox(e: React.ChangeEvent<HTMLInputElement>){
   setIsChecked(e.target.checked)
  }
  
    return (
      <>
        <LoginContainer>
          <h1 className='title-modal-login'>{props.title}</h1>
           <form className='container-modal-login' onSubmit={handleSubmit(loginUser)}>
              <div className='container-modal-inputs'>
                <h2 className='title-form-modal-login'>Entrar</h2>
                <input {...register("email", { required:  true })} autoComplete='off'  placeholder='seu email' type="email"  />
                {errors.email && <span className='email-error'>Informe um email cadastrado</span>}
                <div className='box-input'>
                <p className='icon-show' onClick={() => setPasswordVisible(!isPasswordVisible)} >MOSTRAR</p>
                <input {...register("password", { required:  true })}   placeholder='Senha' type={isPasswordVisible ? "text" : "password"}    />
                </div>
                {errors.password && <span className='password-error'>Informe sua senha</span>}
              </div>
              <button  className='button-modal-login' type='submit'>ENTRAR</button>
              <div className='container-remember'>
                <div className='container-checkbox'>
                  <input  onChange={handleChangeCheckbox} type="checkbox"  />
                  <label htmlFor="">Lembre-se de mim</label>
                </div>
              </div>
              <div className='container-information'>
                <div className='container-newAccount'>
                  <p className='text-account'>Novo por aqui?</p>
                  <Link to='/registro'>Crie sua conta</Link>
                </div>
                <p className='text-information'>
                  Essa pagina é protegida pelo garabalina.
                </p>
              </div>
            </form>
        </LoginContainer>
     </>
  )
}
