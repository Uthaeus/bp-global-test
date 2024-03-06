import { useForm } from "react-hook-form";

import { useNavigate } from "react-router";

import { addDoc, collection, runTransaction } from "firebase/firestore";

import { db } from "../../firebase";

function NewOrder() {
    
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const newOrder = {
                customer_id: data.user,
                po_number: data.poNumber,
                order_number: data.orderNumber,
                created_at: new Date().toISOString(),
                ordered_date: data.orderedDate,
                delivery_date: data.deliveryDate,
                product: data.product,
                quantity: data.quantity,
                destination: data.destination,
                carrier: data.carrier,
                origin: data.origin,
                order_status: data.orderStatus,
                ship_date: data.shipDate,
                last_location: data.lastLocation
            };
    
            const orderRef = await addDoc(collection(db, "orders"), newOrder);
            const newOrderId = orderRef.id;
    
            const userOrderRef = doc(db, `users/${data.user}/orders`, newOrderId);
            
            await runTransaction(db, async (transaction) => {
                await transaction.set(userOrderRef, newOrder);
            });
    
            navigate('/admin');
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode, errorMessage);
        }
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
                            <label htmlFor="poNumber">PO Number</label>
                            <input type="text" {...register("poNumber")} className="form-control" />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="orderNumber">Order Number</label>
                            <input type="text" {...register("orderNumber")} className="form-control" />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group mb-3">
                            <label htmlFor="orderedDate">Ordered Date</label>
                            <input type="date" {...register("orderedDate")} className="form-control" />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="deliveryDate">Est. Delivery Date</label>
                            <input type="date" {...register("deliveryDate")} className="form-control" />
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
                            <input type="text" {...register("quantity")} className="form-control" />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="orderStatus">Order Status</label>
                            <select {...register("orderStatus")} className="form-control">
                                <option value="ordered">Ordered</option>
                                <option value="shipped">Shipped</option>
                                <option value="delivered">Delivered</option>
                            </select>
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="shipDate">Ship Date</label>
                            <input type="date" {...register("shipDate")} className="form-control" />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="lastLocation">Last Location</label>
                            <input type="text" {...register("lastLocation")} className="form-control" />
                        </div>
                    </div>
                </div>

                <input type="submit" value='Create Order' className="btn btn-primary" />
            </form>
        </div>
    );
}

export default NewOrder;