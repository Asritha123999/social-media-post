function createPost(){

document.getElementById("postTitle").innerHTML =
document.getElementById("title").value;

document.getElementById("postContent").innerHTML =
document.getElementById("content").value;

document.getElementById("post").style.background =
document.getElementById("bgcolor").value;

let file=document.getElementById("image").files[0];

if(file){

let reader=new FileReader();

reader.onload=function(e){

document.getElementById("preview").src=e.target.result;

}

reader.readAsDataURL(file);

}

}