
browser.webRequest.onBeforeRequest.addListener(
    createLog,
    { urls: ["<all_urls>"] }
);

var reqs;
var current_id = 0;
function createLog(requestDetails) {
    current_id = 0;
    console.log("OOOOOOOOOOOO");
    reqs = { requestDetails: requestDetails.url }
    browser.storage.local.set({ reqs });
    browser.storage.local.get("reqs").then(logURL);
}

function logURL(object) {
    var anchor = document.createElement("a");
    anchor.href = object.reqs.requestDetails;

    var result = anchor.hostname;

    anchor.innerText = "Request: " + result;
    document.body.appendChild(anchor);

    console.log(document.domain);
    console.log(current_id);

    var space = document.createElement("p");
    //var text = document.createTextNode("Request: " + object.reqs.requestDetails + "<br /><br />");
    document.body.appendChild(space);

    current_id += 1;

    //document.getElementById("logs").innerHTML += ("Request: " + object.reqs.requestDetails + "<br /><br />");
}

function onError(error) {
    console.log(error)
}

