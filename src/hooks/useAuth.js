import { getCookie } from "ko-basic-cookie"
import { cookieName } from "../components/Constants";
import { decodeToken } from "../components/Utility";

const useAuth = () => {
    const token = getCookie(cookieName);
    const user = token ? decodeToken(token) : "";

    const userId = user.UserId;
    const userEmail = user.UserEmail;

    return { userId, userEmail, token };
}

export default useAuth;