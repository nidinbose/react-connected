
async function userRegister(){

    const username=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    const cpassword=document.getElementById('cpassword').value;
    


    
    const res=await fetch('http://localhost:4001/api/user', {
      method: 'POST',
 
 headers: {'Content-Type': 'application/json'},
 
 body: JSON.stringify({email, password,cpassword})
 
 })

 if (res.status === 201){
 
     
     window.location.href='../pages/signup.html'
     alert("account created");

 } else {
     alert("fields are empty or password not matched")
 }
 

 }

