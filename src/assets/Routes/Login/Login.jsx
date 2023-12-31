import { useForm } from 'react-hook-form'
import './Login.css'
export const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
    //localStorage.setItem('currentUser', JSON.stringify(data))
    //setCurrentUser(data)
    console.log(data)
  }
  return (
    <>
     <section className='sign-in center'>
      <span className='letter'>Bienvenido</span>
      <form className='sign-in-form' onSubmit={handleSubmit(onSubmit)}>
        <input
          className='input-form '
          type="text"
          placeholder='Usuario'
          {...register('username', {
              required : 'Ingrese su nombre de usuario'
            }
          )
        } />
        <p>{errors.username?.message}</p>
        <input
          className='letter input-form '
          type='password'
          placeholder='Contraseña'
          {...register(
              'password',
              {
                required : 'Ingrese su contraseña'
              }
            )
          }
        />
        <p>{errors.password?.message}</p>
        <button className='btn-form' type='submit'>Iniciar Sesión</button>
      </form>
    </section>
      
    </>
  )
}
