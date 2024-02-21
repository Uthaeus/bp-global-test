import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";

import { UserContext } from "../../store/user-context";

function Register() {

    const { register, handleSubmit } = useForm();
    const { addUser, setCurrentUser } = useContext(UserContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        if (data.password !== data.confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        console.log('registering user', data);

        const newUser = {
            id: Date.now(),
            role: "user",
            ...data
        };
        console.log('adding new user', newUser);
        
        addUser(newUser);
        setCurrentUser(newUser);
        navigate("/");
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