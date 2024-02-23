import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";

import { getDoc, updateDoc, deleteDoc } from "firebase/firestore";

import { db } from "../../firebase";

import { UserContext } from "../../store/user-context";

function AccountEdit() {
    const { currentUser: user } = useContext(UserContext);

    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        reset(user);
    }, [user]);

    const onSubmit = data => {
        console.log(data);
    };

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