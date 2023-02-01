var first_click = true;
var first_click_2 = true;

function closeTableOne() {
    var table = document.getElementById("table-1");
    // var body = table.getElementsByClassName("body")[0];
    var icon = table.getElementsByTagName("i")[0];

    if (first_click) {
        // body.style.display = "none";
        $("#table-1-body").slideUp();
        icon.style.transform = "rotate(180deg)";
        first_click = false;
    } else {
        // body.style.display = "flex";
        $("#table-1-body").slideDown();
        icon.style.transform = "rotate(360deg)";
        first_click = true;
    }
}

function closeTableTwo() {
    var table = document.getElementById("table-2");
    var icon = table.getElementsByTagName("i")[0];

    if (first_click_2) {
        $("#table-2-body").slideUp();
        icon.style.transform = "rotate(180deg)";
        first_click_2 = false;
    } else {
        $("#table-2-body").slideDown();
        icon.style.transform = "rotate(360deg)";
        first_click_2 = true;
    }
}