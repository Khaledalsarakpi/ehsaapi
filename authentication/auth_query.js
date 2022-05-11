const auth =
{
    login: {
        query: "select * from  login($1,$2,$3);",
        params:['username', 'password','token']
    },
    register: {
        query: "select register($1,$2,$3);",
        params: ['id_family', 'username', 'password']
    },
    checklogin: {
        query: "select checklogin($1);",
        params: ['token']
    }

}

module.exports = auth;