

function createHTML(entries) {

    var container = document.getElementById("qgoogle-result");

    if (container === null) {
        container = document.createElement("div");
        container.setAttribute("id", "qgoogle-result");
        document.body.appendChild(container);
    }


    var content = "",
        entry = "";

    for (var i = 0, l = entries.length; i < l; i++) {

        entry = "<div class='qgoogle-result-entry'>";

        entry += "<div class='qgoogle-number'>" + i + "</div>";

        entry += "<div class='qgoogle-result'>";

        entry += "<h3>" + entries[i].title + "</h3>";
        entry += "<p>" + entries[i].desc + "</p>";

        entry += "</div>";
        entry += "</div>";

        content += entry;
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