import React from 'react'
import CopyToClipboard from 'react-copy-to-clipboard';
import { FetchAPI } from '../api/API';


interface NavBarProps {

}

const NavBar: React.FC<NavBarProps> = ({}) => {
    const { data, loading, error } = FetchAPI();
    const [copied, setCopied] = React.useState(false);
    console.log(data, loading, error);
        return (
            <>
                <div className='flex p-4 '>
                <h1 className='font-bold text-2xl  sm:ml-10'>Dehidden</h1>
                <div className='flex ml-auto  sm:mr-32'>
                <div className="flex  shadow w-full  mx-auto items-center sm:bg-white rounded-lg overflow-hidden rounded-full justify-between">
          <input
            className="text-base hidden sm:block text-gray-400 flex-grow outline-none p-2 mx-2"
            type="text"
             value={data?.url} readOnly={true}
          />
          <div className="ms:flex items-center px-2   mx-auto ">
          
          <CopyToClipboard text={data?.url} onCopy={() => setCopied(true)}>
                    <button className='bg-gm-pink hover:bg-pink-500 text-white font-bold py-1 px-4 rounded-full'>
                        {copied ? 'Copied' : 'Copy'}
                    </button>
                </CopyToClipboard>
          </div>
        </div>


               
              
                </div>
                </div>
            </>
        );
}

export default NavBar