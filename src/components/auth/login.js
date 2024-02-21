import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";

import { UserContext } from "../../store/user-context";

function Login() {

    const { register, handleSubmit, reset } = useForm();
    const { users, setCurrentUser } = useContext(UserContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        const user = users.find(user => user.email === data.email && user.password === data.password);
        if (user) {
            setCurrentUser(user);
            navigate("/");
        } else {
            alert("Invalid email or password");
            reset();
        }
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