import React from "react";
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../../container/pages/home";
import Blog from "../../container/pages/blog";
import About from "../../container/pages/about";
import Proyect from "../../container/pages/proyectos";
import Error from "../../container/erros/error";
import Tienda from "../../container/pages/tienda";
import Category from "../../container/pages/Category";
import { AnimatePresence } from "framer-motion";
import Comentario from "../../container/pages/comentario";

export  default function AmimatedRoutes() {
    const location = useLocation();
    return (

        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />}></Route>
                <Route path="error" element={<Error />}></Route>
                <Route path="blog" element={<Blog />}></Route>
                <Route path="tienda" element={<Tienda />}></Route>
                <Route path="about" element={<About />}></Route>
                <Route path="testimonio" element={<Comentario />}></Route>
                <Route path="/blog/:slug" element={<Proyect />}></Route>
                <Route path="/category/:slug" element={<Category />} />
            </Routes>
        </AnimatePresence>


    )

}