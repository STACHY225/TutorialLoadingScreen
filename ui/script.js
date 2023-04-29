const bar = document.getElementById("progress_value"),
progress = document.getElementById("progress_text_value"),
text = document.getElementById("start"),
container = document.getElementById("container");

function SetPercent(percent) {
    bar.style.width = percent;
    progress.textContent = percent;
}

if(typeof GetParentResourceName == "function" && GetParentResourceName() == "loadingScreen"){
    container.style.display = "block";
}

var allow = false;
window.addEventListener("message", function(e){
    if(e.data.eventName == "loadProgress"){
        SetPercent(`${Math.floor(Number(e.data.loadFraction)*100)}%`);
    }
    if(e.data.action == "start"){
        allow = true;
        text.style.display = "block";
    }
});

window.addEventListener("keydown", function(e){
    if(allow && (e.code == "Space" || e.code == "Enter" || e.code == "Escape")){
        fetch("https://tutorial_ls/start", {
            method: "POST",
            mode: "same-origin",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({})
        });
    }
})