let url=" http://3.7.50.225/api/admin/get-all-sessions"
let xhr = new XMLHttpRequest();

xhr.open("GET", url);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(JSON.parse(this.response))
    }
    else {
        console.log("Error")
    }
}
xhr.send();

