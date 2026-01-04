import { collection, getDocs, query, orderBy, limit, doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";

export const getProjectsSection = async () => {
    try {
        // Try to get data from the new structure first (individual docs)
        const projectListRef = collection(db, "Sections", "projects", "projectList");
        const qProjectList = query(projectListRef, orderBy("index"));
        const projectListSnapshot = await getDocs(qProjectList);

        if (!projectListSnapshot.empty) {
            const projects = projectListSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            // Get layout
            const layoutDocRef = doc(db, "Sections", "projects");
            const layoutDoc = await getDoc(layoutDocRef);
            const layout = layoutDoc.exists() ? layoutDoc.data().layout : "layout1";

            return {
                success: true,
                data: {
                    layout,
                    projects
                }
            };
        }

        // Fallback: Check for the legacy structure (snapshot documents)
        const projectsSectionRef = collection(db, "Sections", "projects", 'items');
        // Query to get the most recent projects section document
        const q = query(projectsSectionRef, orderBy("updatedAt", "desc"), limit(1));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            return { success: true, data: null };
        }

        const docSnapshot = querySnapshot.docs[0];
        const data = {
            id: docSnapshot.id,
            ...docSnapshot.data(),
        };

        return { success: true, data };
    } catch (error) {
        console.error("Error fetching projects section:", error);
        return { success: false, error: error.message };
    }
};
