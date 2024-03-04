import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../firebase";

function Login() {

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log('login user', data);
        
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then(() => {
                navigate('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" placeholder="Email" {...register("email")} />
                <input type="password" placeholder="Password" {...register("password")} />
                <input type="submit" />
            </form>
            <Link to="/auth/register">Register</Link>
        </div>
    );
};

export default Login;