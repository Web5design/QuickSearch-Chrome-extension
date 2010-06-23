

function createHTML(entries) {

    var container = document.getElementById("qgoogle-result");

    if (container === null) {
        container = document.createElement("div");
        container.setAttribute("id", "qgoogle-result");
        document.body.appendChild(container);
    }


    var content = "";

    for (var i = 0, l = entries.length; i < l; i++) {
        content += "<h3>" + entries[i].title + "</h3>";
        content += "<p>" + entries[i].desc + "</p>";
        content += "<hr>";
    }
    container.innerHTML = content;



}

function clearHTML() {

    var node = document.getElementById("qgoogle-result");
    if (node !== undefined) {
        document.body.removeChild(node);
    }
}


function processMessage(message) {


    if (message.verb === "update") {
        createHTML(message.entries);
        return;
    }

    if (message.verb === "clear") {
        clearHTML();
        return;
    }
}

chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {

    processMessage(request);
  }
);