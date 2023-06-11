import { getCookie } from "ko-basic-cookie"
import { cookieName } from "../components/Constants";
import { decodeToken } from "../components/Utility";

const useIsPeticomer = () => {
    const token = getCookie(cookieName);
    const user = token ? decodeToken(token) : "";
    let isPeticomer = false;

    user && user.UserRoles.split(",").map((role) => {
        if(role === 'Peticomer'){
            isPeticomer = true;
        }
    })
    
    return isPeticomer;
}

export default useIsPeticomer;