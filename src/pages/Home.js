import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer/Footer";

const Home = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 3 }}
		>
			<Footer />
		</motion.div>
	);
};

export default Home;
