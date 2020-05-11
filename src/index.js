import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import "./styles/style.css";
import main from "./scripts/main.js";

window.addEventListener('DOMContentLoaded', main)

$('#navbarDropdownMenuLink').click(function() {
    $(this).parent().find('.dropdown-menu').toggle()
})

/*
key: 18b6ac76ada34bba374b08f5932d3416;
*/
