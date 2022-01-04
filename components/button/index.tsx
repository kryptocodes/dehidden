import React from 'react'

export type buttonProps = {
    size?: keyof typeof sizeClassnames;
    color?: keyof typeof colorClassnames;
    ring?: keyof typeof ringSize;
    className?: String;
    children?: React.ReactNode;
    type?: 'submit' | 'reset' | 'button';
    onClick?: () => void;
    disabled?: any;
}

const sizeClassnames = {
    big: "px-28 py-5",
    small: "px-10 py-4 text-xs rounded-md",
    sm: "px-8 py-2 rounded-2xl"
};

const colorClassnames = {
    primary: "bg-gm-pink",
  };

const ringSize = {
    small: "ring-0",
    medium: "ring-4",
    large: "ring-8"
}



export const Button: React.FC<buttonProps> = ({children, color="primary", size ="big", ring="medium", className="", ...props}) => {
        return (
            <button className={`${sizeClassnames[size]} ${colorClassnames[color]} active:${ringSize[ring]} active:ring-kat-primary active:bg-transparent  font-bold items-center text-white  justify-center ${className}`}
                type="button"
            {...props}
            >
                 <span >
                 {children}
              </span>
            </button>
        );
}