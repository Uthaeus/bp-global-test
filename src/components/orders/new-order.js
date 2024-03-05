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
                        <div className="form-group mb-3">
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

                        <div className="form-group mb-3">
                            <label htmlFor="po-number">PO Number</label>
                            <input type="text" {...register("po-number")} className="form-control" />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="order-number">Order Number</label>
                            <input type="text" {...register("order-number")} className="form-control" />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group mb-3">
                            <label htmlFor="ordered-date">Ordered Date</label>
                            <input type="date" {...register("ordered-date")} className="form-control" />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="delivery-date">Est. Delivery Date</label>
                            <input type="date" {...register("delivery-date")} className="form-control" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group mb-3">
                            <label htmlFor="product">Product</label>
                            <input type="text" {...register("product")} className="form-control" />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="destination">Destination</label>
                            <input type="text" {...register("destination")} className="form-control" />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="carrier">Carrier</label>
                            <input type="text" {...register("carrier")} className="form-control" />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="origin">Origin</label>
                            <input type="text" {...register("origin")} className="form-control" />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group mb-3">
                            <label htmlFor="quantity">Quantity</label>
                            <input type="number" {...register("quantity")} className="form-control" />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="order-status">Order Status</label>
                            <input type="text" {...register("order-status")} className="form-control" />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="ship-date">Ship Date</label>
                            <input type="date" {...register("ship-date")} className="form-control" />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="last-location">Last Location</label>
                            <input type="text" {...register("last-location")} className="form-control" />
                        </div>
                    </div>
                </div>

                <input type="submit" value='Create Order' className="btn btn-primary" />
            </form>
        </div>
    );
}

export default NewOrder;