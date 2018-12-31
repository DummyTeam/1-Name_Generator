var form = document.getElementById("random-name-form");

form.onsubmit = function(event) {
    event.preventDefault();
    loadXMLDoc("/getRandomName");
    return false;
}

function loadXMLDoc(url) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
           if (xmlhttp.status == 200) {
               document.getElementById("random-name-input").value = xmlhttp.responseText;
               //console.log("Successfully done! - " + xmlhttp.responseText);
           }
           else if (xmlhttp.status == 400) {
               console.log('400 >= error');
           }
           else {
                console.log('Internal error');
           }
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
