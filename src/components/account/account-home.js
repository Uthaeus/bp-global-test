import { useContext, useEffect, useState } from "react";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

import { UserContext } from "../../store/user-context";

function AccountHome() {
    const { currentUser: user } = useContext(UserContext);
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const docRef = doc(db, 'users', user.uid);
        const docSnap = onSnapshot(docRef, (doc) => {
            if (doc.exists()) {
                setUserData(doc.data());
                setLoading(false);
            }
        });

        return () => {
            docSnap();
        }
    }, [ user ]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Account: {user.email}</h1>

            {userData.displayName && <p>Display Name: {userData.displayName}</p>}

            <p>Role: {userData.role}</p>
        </div>
    );
}

export default AccountHome