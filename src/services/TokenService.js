class TokenService {
    setToken = (dtUsuario) => {
        localStorage.removeItem('fv_user');
        localStorage.setItem('fv_user',JSON.stringify(dtUsuario));
    }

    getToken = () => {
        return   JSON.parse(localStorage.getItem('fv_user'));
    }

    deleteToken = () => {
        localStorage.removeItem('fv_user');
    }

}

export default new TokenService();