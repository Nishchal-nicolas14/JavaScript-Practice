// function call after every 1 second :
setInterval(updateTime, 1000);

// function to get the current Time :

function updateTime() {
    // get time :
    let now = new Date();
    let min = String(now.getMinutes()).padStart(2, "0");
    let hr = String(now.getHours()).padStart(2, "0");
    let sec = String(now.getSeconds()).padStart(2, "0");

    // get the div using the id :
    const text = document.getElementById("time");
    text.textContent = `${hr} : ${min} : ${sec}`;
}