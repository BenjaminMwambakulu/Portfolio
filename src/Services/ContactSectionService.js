import { collection, getDocs, query, orderBy, limit, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase";

export const getContactSection = async () => {
    try {
        const contactSectionRef = collection(db, "Sections", "contact", 'items');

        // Query to get the most recent contact section document
        const q = query(contactSectionRef, orderBy("updatedAt", "desc"), limit(1));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            return { success: true, data: null };
        }

        const doc = querySnapshot.docs[0];
        const data = {
            id: doc.id,
            ...doc.data(),
        };

        return { success: true, data };
    } catch (error) {
        console.error("Error fetching contact section:", error);
        return { success: false, error: error.message };
    }
};

export const addMessage = async (messageData) => {
    try {
        const messagesRef = collection(db, "Messages");
        await addDoc(messagesRef, {
            ...messageData,
            createdAt: serverTimestamp(),
            read: false
        });
        return { success: true };
    } catch (error) {
        console.error("Error sending message:", error);
        return { success: false, error: error.message };
    }
};
