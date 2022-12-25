function login(){
    var name=document.getElementById("user_name").value;
    localStorage.setItem("name",name);
    window.location="let's chat page.html"
}