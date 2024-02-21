import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";

import { UserContext } from "../../store/user-context";

function Login() {

    const { register, handleSubmit } = useForm();
    const {  } = useContext(UserContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log('login user', data);
        navigate("/");
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