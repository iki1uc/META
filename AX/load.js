function loadHTML(path, target) {
    fetch(path)
        .then(r => r.text())
        .then(html => {
            document.querySelector(target).innerHTML += html;
        });
}
