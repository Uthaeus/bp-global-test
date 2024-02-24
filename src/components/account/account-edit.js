import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import { updateProfile, updatePassword } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";

import { db, auth } from "../../firebase";

import { UserContext } from "../../store/user-context";

function AccountEdit() {
    const { currentUser: user } = useContext(UserContext);
    const authUser = auth.currentUser;

    const navigate = useNavigate();
    
    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        reset({
            email: user.email,
            displayName: user.displayName || '',
            phoneNumber: user.phoneNumber || '',
            street: user.billingAddress?.street || '',
            city: user.billingAddress?.city || '',
            state: user.billingAddress?.state || '',
            zip: user.billingAddress?.zip || '',
            role: user.role || '',
        });
    }, [user]);

    const onSubmit = data => {
        console.log('data', data);

        if (data.password !== data.confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        let enteredDisplayName =  data.displayName === '' ? null : data.displayName;
        let enteredPhoneNumber =  data.phoneNumber === '' ? null : data.phoneNumber;

        let userRef = doc(db, 'users', user.uid);

        updateProfile(authUser, {
            email: data.email,
            displayName: enteredDisplayName,
            phoneNumber: enteredPhoneNumber
        }).then(() => {
            updateDoc(userRef, {
                email: data.email,
                displayName: enteredDisplayName,
                phoneNumber: enteredPhoneNumber
            });
            if (data.password !== '') {
                updatePassword(authUser, data.password).then(() => {
                    console.log('password updated');
                });
            }
            navigate('/account');
        }).catch((error) => {
            console.log(error);
        });
    };

    console.log('user', user);

    // photo url - photoURL
    // displayName
    // email
    // phone number - phoneNumber


    return (
        <div>
            <h1>Account Edit</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className="form-control" {...register("email")} placeholder="test@test.com" />
                </div>

                <div className="form-group">
                    <label htmlFor="role">Role</label>
                    <select id="role" className="form-control" {...register("role")}>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="displayName">Display Name</label>
                    <input type="text" id="displayName" className="form-control" {...register("displayName")} />
                </div>

                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input type="text" id="phoneNumber" className="form-control" {...register("phoneNumber")} />
                </div>

                {/* <div className="form-group">
                    <p>Billing Address</p>

                    <label htmlFor="street">Street</label>
                    <input type="text" id="street" className="form-control" {...register("street")} />

                    <label htmlFor="city">City</label>
                    <input type="text" id="city" className="form-control" {...register("city")} />

                    <label htmlFor="state">State</label>
                    <input type="text" id="state" className="form-control" {...register("state")} />

                    <label htmlFor="zip">Zip</label>
                    <input type="text" id="zip" className="form-control" {...register("zip")} />

                    <label htmlFor="country">Country</label>
                    <input type="text" id="country" className="form-control" {...register("country")} />
                </div> */}

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="form-control" {...register("password")} />
                </div>

                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" className="form-control" {...register("confirmPassword")} />
                </div>

                <div className="form-group">
                    <label htmlFor="photoURL">Add an image</label>
                    <input type='file' id="photoURL" className="form-control" {...register("photoURL")} />
                </div>

                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>
    );
}

export default AccountEdit;