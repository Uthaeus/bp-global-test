import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../firebase";

function Register() {

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = data => {
        if (data.password !== data.confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                console.log(userCredential);
                navigate('/auth/login');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" placeholder="Email" {...register("email")} />
                <input type="password" placeholder="Password" {...register("password")} />
                <input type="password" placeholder="Confirm Password" {...register("confirmPassword")} />
                <input type="submit" />
            </form>
            <Link to="/auth/login">Login</Link>
        </div>
    );
};

export default Register;