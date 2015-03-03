function init_index() {
	// Insert links to the top of the chapter, for each one.
	$("div#index div").prepend("<a class='top' title='Navigeer naar het begin van dit hoofdstuk'>&#8594; Top ...</a>");

	// Transforms the index above in a accordion widget, which allows
	// opening and closing sections of the index.
	$("#index").accordion();

	$("div#index div a").click(function() {
		var chapter = $(this).parent() // Get div element
							 .prev() // Get h2 before div element
							 .text(); // Get its text content
							 
		if ($(this).hasClass("top")) {
			navigate_to(chapter);
		} else {
			navigate_to(chapter, $(this).text());
		}
	});

	$("div#index2 h3").click(function() {
		navigate_to($(this).text());
	});
	
	$("a.toindex").fadeOut();
}

