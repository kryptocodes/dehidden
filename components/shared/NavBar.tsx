import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";
import { FetchAPI } from "../api/API";
import Logo from "../assets/Logo";
import { Button } from "../button";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  const { data, loading, error } = FetchAPI();
  const [copied, setCopied] = React.useState(false);
  console.log(data, loading, error);
  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <div className="flex p-4 z-50">
        <a
          href="https://dehidden.com/"
          className="flex z-70 sm:ml-4 gap-2"
          style={{ zIndex: 9999 }}
        >
          <Logo className="h-8 w-8 mt-2" />
          <h1 className="font-bold text-2xl font-gm-regular z-50 mt-3 ">
            Dehidden
          </h1>
        </a>
        <div className="flex ml-auto  sm:mr-32">
          <div className="flex  shadow w-full  mx-auto items-center sm:bg-gray-900/50 z-10   rounded-full overflow-hidden rounded-full justify-between">
            <input
              className="text-base font-gm-regular hidden sm:block text-white flex-grow bg-transparent  outline-none p-2 mx-2"
              type="text"
              value={data?.url}
              readOnly={true}
            />
            <div className="ms:flex items-center px-2 s  mx-auto ">
              <CopyToClipboard
                text={data?.url}
                onCopy={() => {
                  toast("Copied to clipboard", {
                    icon: "👏",
                    style: {
                      borderRadius: "10px",
                      background: "#1A1A1A",
                      color: "#fff",
                    },
                  });
                  setCopied(true);
                }}
              >
                <Button
                  size="sm"
                  className="text-white font-bold py-1 px-4 rounded-full"
                  color="primary"
                >
                  {copied ? "Copied" : "Copy"}
                </Button>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
