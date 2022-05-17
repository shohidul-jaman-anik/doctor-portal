import React, { useEffect } from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'
import loginImg from '../../../assets/form-illus/Tablet login-rafiki.svg'
import { useForm } from "react-hook-form";
import auth from '../../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, from, navigate])

    if (loading) {
        return <Loading></Loading>
    }
    let loginError;
    if (error) {
        loginError = <p className='text-red-500'>{error?.message}</p>
    }
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
        console.log(data)
    };
    return (
        <div className='loginContainer'>

            <div>
                <img className='login-img ' src={loginImg} alt="" />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} >
                <h2 className="text-center">Login</h2>
                <div className="form-control  ">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Type here"
                        className="input input-bordered input-primary w-full max-w-xs "
                        // {...register("firstName", { required: true })}
                        {...register("email", {
                            required: {
                                value: true,
                                message: "E-mail is required"
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid E-mail'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        placeholder="Password"
                        className="input input-bordered input-primary w-full max-w-xs"
                        // {...register("firstName", { required: true })}
                        {...register("password", {
                            required: {
                                value: true,
                                message: "Password is required"
                            },
                            minLength: {
                                value: 6,
                                message: 'Must be 6 characters or longer'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                    </label>
                    {loginError}

                    <input type="submit" className='btn text-white bg-gradient-to-r from-secondary to-primary' value="Login" />
                </div>
                <p className='text-center mt-2'><small>
                    New To Doctor  Portal ?
                    <Link className='text-primary ml-2'
                        to='/register'>Create New Account
                    </Link></small>
                </p>

                <SocialLogin></SocialLogin>
            </form>

        </div>
    );
};

export default Login;