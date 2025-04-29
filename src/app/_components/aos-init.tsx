'use client'

import { useEffect } from "react";
import 'aos/dist/aos.css'
import Aos from "aos";

export function AOSInit(){
    useEffect(() => {
        Aos.init({
            duration: 500,
            once: true,
        });
    }, []);

    return null
}