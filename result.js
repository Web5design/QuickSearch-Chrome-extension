

function createHTML(content) {
    
    
    var container = document.createElement("div");
    
    container.setAttribute("id", "qgoogle-result");
    container.innerHTML = content;
    
    document.body.appendChild(container);
    
}


chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {

    createHTML(request.htmlContent);
  }
);