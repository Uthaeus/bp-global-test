import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

import { auth, db } from "../../firebase";

function Register() {

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        if (data.password !== data.confirmPassword) {
          alert("Passwords do not match");
          return;
        }
      
        try {
          // Input validation for password strength/format can be added here
      
          const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
          const user = userCredential.user;
          const userRef = doc(db, "users", user.uid);
      
          // Set user data in Firestore
          await setDoc(userRef, {
            email: user.email,
            role: "user"
          });
          navigate('/');
        } catch (error) {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error("Error creating user:", errorCode, errorMessage);
          // Display an error message to the user (e.g., using a toast or alert)
        }
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