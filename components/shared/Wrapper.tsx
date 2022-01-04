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
                <div className='overflow-hidden relative h-full'>
                <NavBar/>
                <SEO title={title} />
                {children}
                </div>
            </>
        );
}

export default Wrapper