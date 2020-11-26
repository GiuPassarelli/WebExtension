
browser.webRequest.onBeforeRequest.addListener(
    createLog,
    { urls: ["<all_urls>"] }
);

var reqs;
function createLog(requestDetails) {
    reqs = { requestDetails: requestDetails.url }
    browser.storage.local.set({ reqs }).then(onError);
    browser.storage.local.get("reqs").then(logURL, onError);
}

function logURL(object) {
    document.getElementById("logs").innerHTML += ("Request: " + object.reqs.requestDetails + "<br /><br />");
    console.log(`Loading: ${object.reqs.requestDetails} `);
}

function onError(error) {
    console.log(error)
}

