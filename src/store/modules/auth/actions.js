export default {
    async login(context, payload) {
    console.log("payload", payload)

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "username": payload.email,
        "passwordHash": payload.password
      });

      var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
      };

      let url =
        'http://localhost:5000/login/auth';
      
    
      const response = await fetch(url, requestOptions);
  
      const responseData = await response.json();
      console.log("responseData", responseData)
  
      if (!response.ok) {
        const error = new Error(
          responseData.message || 'Failed to authenticate. Check your login data.'
        );
        throw error;
      }
      localStorage.setItem('token', responseData.auth_token);
      localStorage.setItem('userId', responseData.email);  
       
      context.commit('setUser', {
        token: responseData.auth_token,
        userId: responseData.email
      });     

    },
    tryLogin(context) {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');  
      if (token && userId) {
        context.commit('setUser', {
          token: token,
          userId: userId
        });
      }
    },
    logout(context) {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');   
      context.commit('setUser', {
        token: null,
        userId: null
      });
    }
}