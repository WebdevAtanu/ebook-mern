import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Contact from './components/Contact'
import Blog from './components/Blog'
import Description from './components/Description'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Dashboard from './components/admin/Dashboard'
import {BrowserRouter as Router,Routes,Route,useLocation} from 'react-router-dom'
import { AnimatePresence, motion } from "framer-motion";
import { Toaster } from 'react-hot-toast';

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants}>
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants}>
              <Contact />
            </motion.div>
          }
        />
        <Route
          path="/blog"
          element={
            <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants}>
              <Blog />
            </motion.div>
          }
        />
        <Route
          path="/description/:id"
          element={
            <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants}>
              <Description />
            </motion.div>
          }
        />
        <Route
          path="/admin"
          element={
            <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants}>
              <Dashboard />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {

  return (
    <>
    <Router>
    <Navigation/>
    <AnimatedRoutes />
    <Footer/>
    </Router>
    <Toaster/>
    </>
  )
}

export default App
