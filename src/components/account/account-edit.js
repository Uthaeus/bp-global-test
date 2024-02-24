import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";

import { updateProfile } from "firebase/auth";

import { db } from "../../firebase";

import { UserContext } from "../../store/user-context";

function AccountEdit() {
    const { currentUser: user } = useContext(UserContext);

    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        reset({
            email: user.email
        });
    }, [user]);

    const onSubmit = data => {
        console.log('data', data);
    };

    console.log('user', user);

    return (
        <div>
            <h1>Account Edit</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" placeholder="Email" {...register("email")} />
                <input type="submit" />
            </form>
        </div>
    );
}

export default AccountEdit;