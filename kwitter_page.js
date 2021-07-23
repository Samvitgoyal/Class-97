var firebaseConfig = {
    apiKey: "AIzaSyB60E3Y-sI2a-Z59UnOMBcYc3zvtKXPcHI",
    authDomain: "kwitter-4dfd2.firebaseapp.com",
    databaseURL: "https://kwitter-4dfd2-default-rtdb.firebaseio.com",
    projectId: "kwitter-4dfd2",
    storageBucket: "kwitter-4dfd2.appspot.com",
    messagingSenderId: "845707074213",
    appId: "1:845707074213:web:e82382d97a64d68b730b4c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function Send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,message:msg,
        like:0
    });
    document.getElementById("msg").value="";

}



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start
console.log(firebase_message_id);
console.log(message_data);
name1=message_data["name"];
message=message_data["message"];
like=message_data["like"];
name_with_tag="<h4>"+name1+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;

//End code
      } });  }); }
getData();


function Logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="kwitter_room.html";
    }
 function updateLike(message_id){
     console.log("Like button is clicked- "+message_id);
     button_id=message_id;
     likes=document.getElementById(button_id).value;
     updated_likes=Number(likes)+1;
     console.log(updated_likes);
     firebase.database().ref(room_name).child(message_id).update({
         like:updated_likes
     });
 }