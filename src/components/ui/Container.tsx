

import { ReactNode } from "react";


//Shape of the props this componet accept

interface ContainerProps {
     children: ReactNode; // content placed btw <Container>...</Container>
    className?: string;   // optional extra classes from the parent
}


export default function Container ({children, className= ""}: ContainerProps){
    return (
        <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`} >
            {children}
        </div>
    );
}