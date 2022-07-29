let adviceNum;
let quote;
function getQuote() {
    fetch('https://api.adviceslip.com/advice')
        .then(res => res.json())
         .then(data => {
             quote = data.slip.advice;
             adviceNum = data.slip.id;
             adviceNum = adviceNum.toString().split('').join(' ');
             document.getElementById('quote').innerHTML = `"${quote}"`
             document.getElementById('adviceNumber').innerHTML = `# ${adviceNum}`
         })
        .catch(error => console.log("ERROR: " + error))
}