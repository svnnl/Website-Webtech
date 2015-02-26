function init_index() {
	// Insert links to the top of the chapter, for each one.
	$("div#index div").prepend("<a class='top'>&#8594; Top ...</a>");

	// Transforms the index above in a accordion widget, which allows
	// opening and closing sections of the index.
	$("#index").accordion();

	$("div#index div a.top").click(function() {
		var chapter = $(this).parent() // Get div element
							 .prev() // Get h2 before div element
							 .text(); // Get its text content
		navigate_to(chapter);
	});

	$("div#index div a:not(.top)").click(function() {
		var chapter = $(this).parent() // Get h3 element
							 .parent() // Get div element
							 .prev() // Get h2 before div element
							 .text(); // Get its text content
		navigate_to(chapter, $(this).text());
	});
}

