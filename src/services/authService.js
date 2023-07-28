import { allowedUsers } from "../helpers/AllowedUsers";

export function isUserAuthenticated (email, password){
    
    const isAuthenticated = allowedUsers.filter(user => 
        user.email === email && user.password === password
    );

    return isAuthenticated.length > 0 ? true : false;

}