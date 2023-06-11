import { getCookie } from "ko-basic-cookie"
import { cookieName } from "../components/Constants";
import { decodeToken } from "../components/Utility";

const useAuth = () => {
    const token = getCookie(cookieName);
    const user = token ? decodeToken(token) : "";

    return { user, token };
}

export default useAuth;