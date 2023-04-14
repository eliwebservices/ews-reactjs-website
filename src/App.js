import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
// import Navbar from "./components/Navbar/Navbar";
import { AnimatePresence } from "framer-motion";
import React from "react";
// import Mobilenav from "./components/MobileNav/Mobilenav";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import NoPage from "./pages/NoPage";

function App() {
	// const location = useLocation();
	return (
		<div className="App">
			{/* NAVBAR */}
			{/* <Navbar toggleBtn={toggleDropdown} /> */}

			{/* PAGE TRANSITIONS */}
			<AnimatePresence mode="wait" initial={false}>
				<Routes>
					<Route path="/" exact element={<Home />} />
					<Route path="/portfolio" element={<Portfolio />} />
					<Route path="/our-services" element={<Services />} />
					<Route path="/about-us" element={<About />} />
					<Route path="/contact-us" element={<Contact />} />
					<Route path="*" element={<NoPage />} />
				</Routes>
			</AnimatePresence>
		</div>
	);
}

export default App;
