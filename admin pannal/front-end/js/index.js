
async function getUser(){
    const token=localStorage.getItem('userToken')
    console.log(token);
    const res=await fetch('http://localhost:4001/api/home',{
      method:"POST",
      headers:{"authorization":`Bearer ${token}`}
    })
    if(res.status==200){
      const user=await res.json()
      console.log(user);
      document.getElementById("user").innerHTML=user.email
    }
    else{
      alert("please login")
    }
  }
  getUser()