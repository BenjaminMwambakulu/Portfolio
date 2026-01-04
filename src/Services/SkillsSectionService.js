import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "../config/firebase";

export const getSkillsSection = async () => {
    try {
        const skillsSectionRef = collection(db, "Sections", "skills", 'items');

        // Query to get the most recent skills section document
        const q = query(skillsSectionRef, orderBy("updatedAt", "desc"), limit(1));
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
        console.error("Error fetching skills section:", error);
        return { success: false, error: error.message };
    }
};
