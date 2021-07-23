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
document.getElementById("user_name").innerHTML="welcome "+user_name;
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room name"+Room_names);
row="<div class='room_name' id="+Room_names+ "onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>"
document.getElementById("output").innerHTML += row;
//End code
      });});}
getData();



function Addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
          purpose:"adding user"
      });
      localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
 }

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function Logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}
