import React, { useEffect, useState } from "react";
// Firestore imports
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase"; // existing Firestore config
import { motion } from "motion/react";

function Resume() {
  // Firestore state for documents/resources
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        // Read all documents from Firestore: documents collection
        const docsRef = collection(db, "documents");
        const snapshot = await getDocs(docsRef);

        const loaded = [];
        snapshot.forEach((docSnap) => {
          const data = docSnap.data();

          // Only display documents where isPublic !== false
          if (data.isPublic === false) return;

          // Derive some display fields from Firestore data
          const fileUrl = data.fileUrl || "";
          const fileName = fileUrl.split("/").pop() || "";
          const extension = fileName.split(".").pop() || "file";
          const type = ("PDF" || "file").toUpperCase();

          loaded.push({
            id: docSnap.id,
            title: data.title || "Untitled Document",
            description: data.description || "",
            category: data.category || "General",
            fileUrl,
            type,
            size: data.size || "—",
            lastUpdated:
              (data.updatedAt && data.updatedAt.toDate
                ? data.updatedAt.toDate().toLocaleDateString()
                : "Recently") || "Recently",
            available: true,
          });
        });

        setDocuments(loaded);
      } catch (err) {
        console.error("Error fetching documents from Firestore:", err);
        setError("Unable to load documents right now.");
      } finally {
        setLoading(false);
      }
    };

    fetchDocuments();
  }, []);

  const handleDownload = (doc) => {
    if (!doc.available) {
      return;
    }

    // Create a temporary link element and trigger download
    const link = window.document.createElement("a");
    const url = doc.fileUrl || doc.downloadUrl;
    if (!url) return;

    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.download = url.split("/").pop();
    window.document.body.appendChild(link);
    link.click();
    window.document.body.removeChild(link);
  };

  return (
    <motion.section
      id="resume"
      className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-4 sm:left-10 lg:left-20">
          <div className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="absolute bottom-40 right-4 sm:right-6 lg:right-10">
          <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-purple-400/25 to-cyan-600/25 rounded-full blur-3xl animate-bounce" />
        </div>

        {/* Geometric Patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-1/3 right-1/4 w-28 h-28 border border-green-500/30 rotate-12 animate-pulse" />
          <div className="absolute bottom-1/3 left-1/4 w-20 h-20 border border-blue-500/30 rotate-45 animate-spin-slow" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-4 sm:mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {/* Keep existing static heading text */}
            Download My Documents
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            {/* Keep existing static subtitle text */}
            Get a copy of my resume, CV, and other resources to learn more about
            my experience and qualifications.
          </motion.p>
        </motion.div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Firestore-powered documents/resources */}
          {loading && documents.length === 0 && (
            <div className="col-span-1 md:col-span-2 text-center text-gray-400">
              Loading documents...
            </div>
          )}
          {!loading && documents.length === 0 && !error && (
            <div className="col-span-1 md:col-span-2 text-center text-gray-400">
              Documents will be available soon.
            </div>
          )}
          {error && (
            <div className="col-span-1 md:col-span-2 text-center text-red-400">
              {error}
            </div>
          )}

          {documents.map((document, index) => (
            <motion.div
              key={document.id}
              className="group relative bg-gray-900/40 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-gray-700/30 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
            >
              {/* Card Glow Effect */}
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  document.available
                    ? "bg-gradient-to-r from-green-500/5 via-blue-500/5 to-green-500/5"
                    : "bg-gradient-to-r from-gray-500/5 via-gray-600/5 to-gray-500/5"
                }`}
              />

              {/* Document Icon */}
              <motion.div
                className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mb-6 ${
                  document.available
                    ? "bg-green-500/20 group-hover:bg-green-500/30"
                    : "bg-gray-600/20 group-hover:bg-gray-600/30"
                } transition-colors duration-300`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <svg
                  className={`w-8 h-8 sm:w-10 sm:h-10 ${
                    document.available ? "text-green-400" : "text-gray-500"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </motion.div>

              {/* Document Info */}
              <div className="relative">
                <motion.h3
                  className="text-xl sm:text-2xl font-mono font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-200"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                >
                  {document.title}
                </motion.h3>

                <motion.p
                  className="text-gray-400 group-hover:text-gray-300 mb-4 text-sm sm:text-base leading-relaxed transition-colors duration-200"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + index * 0.05, duration: 0.3 }}
                >
                  {document.description}
                </motion.p>

                {/* Document Details */}
                <motion.div
                  className="flex flex-wrap gap-3 mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.05, duration: 0.3 }}
                >
                  <span className="bg-blue-500/10 text-blue-300 px-3 py-1 rounded-full text-xs font-medium border border-blue-500/30">
                    {document.type}
                  </span>
                  <span className="bg-purple-500/10 text-purple-300 px-3 py-1 rounded-full text-xs font-medium border border-purple-500/30">
                    {document.category}
                  </span>
                  <span className="bg-cyan-500/10 text-cyan-300 px-3 py-1 rounded-full text-xs font-medium border border-cyan-500/30">
                    Updated {document.lastUpdated}
                  </span>
                </motion.div>

                {/* Download Button */}
                <motion.button
                  onClick={() => handleDownload(document)}
                  disabled={!document.available}
                  className={`group/btn relative w-full px-6 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold text-center overflow-hidden shadow-lg transition-all duration-200 ${
                    document.available
                      ? "bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white cursor-pointer"
                      : "bg-gray-600 text-gray-400 cursor-not-allowed opacity-60"
                  }`}
                  whileHover={document.available ? { scale: 1.02, y: -1 } : {}}
                  whileTap={document.available ? { scale: 0.98 } : {}}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + index * 0.05, duration: 0.3 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {document.available ? (
                      <>
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        Download {document.title}
                      </>
                    ) : (
                      <>
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18 21l-2.121-2.121M6 6l2.121 2.121m0 0L21 21"
                          />
                        </svg>
                        Currently Unavailable
                      </>
                    )}
                  </span>
                  {document.available && (
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500" />
                  )}
                </motion.button>
              </div>

              {/* Availability Badge */}
              <motion.div
                className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                  document.available
                    ? "bg-green-500/20 text-green-400 border border-green-500/30"
                    : "bg-red-500/20 text-red-400 border border-red-500/30"
                }`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.3 + index * 0.1,
                  duration: 0.3,
                  ease: "backOut",
                }}
              >
                {document.available ? "Available" : "Unavailable"}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-700/50 max-w-2xl mx-auto">
            <motion.div
              className="flex items-center justify-center gap-2 mb-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.3 }}
            >
              <svg
                className="w-5 h-5 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h4 className="text-lg font-semibold text-white">
                Need a Custom Format?
              </h4>
            </motion.div>
            <motion.p
              className="text-gray-400 text-sm sm:text-base"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.3 }}
            >
              If you need my resume or CV in a different format (Word, plain
              text, etc.), feel free to{" "}
              <a
                href="#contact"
                className="text-blue-400 hover:text-blue-300 transition-colors underline"
              >
                contact me
              </a>{" "}
              and I'll be happy to provide it.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Resume;
