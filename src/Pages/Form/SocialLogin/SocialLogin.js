import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../Hook/useToken/useToken';
import Loading from '../../Shared/Loading/Loading';



const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [token] = useToken(user)

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, from, navigate])

    let loginError;
    if (error) {
        loginError = <Loading></Loading>
    }

    return (
        <div>
            <div className="card-body">
                <div className="divider">OR</div>
                {/* {loginError} */}
                <button
                    onClick={() => signInWithGoogle()}
                    className="btn btn-outline">
                    Login with Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;