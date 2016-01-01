document.addEventListener("DOMContentLoaded", function (event) {

    document.addEventListener('darthNameChanged', function (e) {
        console.log(e.detail.newName); // true
    })
});
