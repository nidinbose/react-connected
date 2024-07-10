









    async function userLogin(){

      const username=document.getElementById('email1').value;
      const password=document.getElementById('password1').value;
      
  
  
      
      const res=await fetch('http://localhost:4001/api/login', {
           method: 'POST',
      
      headers: {'Content-Type': 'application/json'},
       
      body: JSON.stringify({ email, password })
      
      })
      if (res.status==200) {
        const data=await res.json()
        console.log(data.token);
        localStorage.setItem('userToken',data.token)
      window.location.href="../index.html" 
      } else {
        alert("can't sign in")
    }

      }