console.log("Its Working");
let result = {
    "tag": "",
    "free": false,
    "role": false,
    "user": "aryadeep",
    "email": "aryadeepvars12@gmail.com",
    "score": 0.64,
    "state": "underliverable",
    "domain": "codewithharry.com",
    "reason": "invalid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": false,
    "did_you_mean": "",
    "format_valid": true
}
submitBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    let key = "ema_live_HJybjU2aIFyNHj6Fj1YY8H64duVWGzY7M4sCl69v";

    
    let email = document.getElementById("Email").value;
    let name = document.getElementById("Name").value;
    let gender = document.querySelector('input[name="gender"]:checked')?.value || 'Not specified';
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
    
    try {
        let res = await fetch(url);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        
        let result = await res.json();
        
        if (result.message) {
            resultCont.innerHTML = `<div>Error: ${result.message}</div>`;
            return;
        }

   
        let str = `<div>Name: ${name}</div>`;
        str += `<div>Gender: ${gender}</div>`;
        
        for (let key of Object.keys(result)) {
            if (result[key] !== "" && result[key] !== " ") {
                str += `<div>${key}: ${result[key]}</div>`;
            }
        }
        
        resultCont.innerHTML = str;
    } catch (error) {
        console.error('Error:', error);
        resultCont.innerHTML = `<div>Error: ${error.message}</div>`;
    }
});
