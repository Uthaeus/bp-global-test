import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

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