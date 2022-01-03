import React from 'react'
import NavBar from './NavBar';
import SEO from './SEO';

interface WrapperProps {
    children: React.ReactNode
    title?: string
}

const Wrapper: React.FC<WrapperProps> = ({children,title}) => {
        return (
            <>
                <NavBar/>
                <SEO title={title} />
                {children}
            </>
        );
}

export default Wrapper