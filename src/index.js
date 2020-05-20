import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";
import main from "./scripts/main.js";

main();

$(() => {
	$('#navbarDropdownMenuLink').click(function() {
		$(this).parent().find('.dropdown-menu').toggle()
	})
})


/*
key: 18b6ac76ada34bba374b08f5932d3416;
*/
