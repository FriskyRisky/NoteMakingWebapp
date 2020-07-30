
function check_web_storage_support() {
    if(typeof(Storage) !== "undefined") {
        return(true);
    }
    else {
        alert("Web storage unsupported!");
        return(false);
    }
}

function display_saved_note() {
    if(check_web_storage_support() == true) {
        result = localStorage.getItem('note');
    }
    if(result === null) {
        alert("No note saved");
        result = "Not found";
    }
    document.getElementById('area').value = result;
    prior = localStorage.getItem('savedpriority');
     if (prior==="high"){
    	document.getElementById('area').style.backgroundColor = "#ffb3b3";
    }
    else if (prior==="med"){
    	document.getElementById('area').style.backgroundColor = "#ffff99";
    }
    else if (prior==="low"){
    	document.getElementById('area').style.backgroundColor = "#80ff80";
    }
    

}

function save() {
    if(check_web_storage_support() == true) {
        var area = document.getElementById("area");
        if(area.value != '') {
            localStorage.setItem("note", area.value);
            localStorage.setItem("savedpriority",localStorage.getItem("priority"));
            alert("Note saved!")
        }
        else {
            alert("Nothing to save");
        }
    }
}

function set_high(){
	if(check_web_storage_support() == true){
		var bg = document.getElementById('area');
		bg.style.backgroundColor = "#ffb3b3";
		localStorage.setItem("priority","high");
	}
}

function set_med(){
	if(check_web_storage_support() == true){
		var bg = document.getElementById('area');
		bg.style.backgroundColor = "#ffff99";
		localStorage.setItem("priority","med");
	}
}

function set_low(){
	if(check_web_storage_support() == true){
		var bg = document.getElementById('area');
		bg.style.backgroundColor = "#80ff80";
		localStorage.setItem("priority","low");
	}
}