import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";


function NewOrder() {

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function getUsers() {
            const usersRef = collection(db, 'users');
            const querySnapshot = await getDocs(usersRef);
            const users = querySnapshot.docs.map(doc => {
                return { ...doc.data(), id: doc.id };
            });
            setUsers(users);
        }
        getUsers();
    }, []);

    const onSubmit = data => {
        console.log('new order', data);
    };

    return (
        <div>
            <h1>New Order</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="user">User</label>
                            <select {...register("user")} className="form-control">
                                <option value="">Select User</option>
                                {users.map((user) => (
                                    <option key={user.id} value={user.id}>
                                        {user.email}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="col-md-6">
                        
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="product">Product</label>
                            <input type="text" {...register("product")} className="form-control" />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="quantity">Quantity</label>
                            <input type="number" {...register("quantity")} className="form-control" />
                        </div>
                    </div>
                </div>

                <input type="submit" value='Create Order' className="btn btn-primary" />
            </form>
        </div>
    );
}

export default NewOrder;