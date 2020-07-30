function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); 
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); 
  localStorage.setItem("picture", profile.getImageUrl());
  localStorage.setItem("email", profile.getEmail());
  localStorage.setItem("Name", profile.getName());
  window.open( "note.html", "_top");
  
}

function loadProfile() {
  picsrc = localStorage.getItem("picture");
  emailadd = localStorage.getItem("email");
  name = localStorage.getItem('Name');
  document.getElementById("profilePic").setAttribute("src", picsrc);
  document.getElementById("email").innerHTML = emailadd;
  document.getElementById('name').innerHTML = name;
}

function signOut() {
    
    window.open( "login.html", "_top");
  }
