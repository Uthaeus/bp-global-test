import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Register() {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        if (data.password !== data.confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        console.log(data);
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