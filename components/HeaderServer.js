import HeaderClient from "./HeaderClient";
import { checkUser } from "@/lib/checkUser";

const Header = async () => {
  await checkUser(); 

  return (
    <div className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <HeaderClient /> 
    </div>
  );
};

export default Header;