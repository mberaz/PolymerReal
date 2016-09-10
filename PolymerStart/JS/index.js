document.addEventListener("DOMContentLoaded", function (event) {

    var jumbo = document.getElementById("jumbo");
    var element = document.getElementById("element");

    document.addEventListener('darthNameChanged', function (e) {
        var name= e.detail.newName; // true

        jumbo.updateText("All hail " + name);
    });
    document.addEventListener('empChecked', function (e) {
        var name = e.detail.first; // true

        alert(name);
    });

    
  
});
