function navigate_to(dst, subdst) {
	// Turn off for now
	window.onhashchange = null;
	
	// Load desired pages from pages folder and
	// load sources when done!
	var dstpage = chapter_name_to_filename(dst);
	$("div#content").load("pages/" + dstpage + ".html", function() {
		// Done loading page content, now generate sources!
		gen_sources("div#content");
		
		// Set URL hash to current page, allows for
		// browser history navigation!
		window.location.hash = dstpage;
		
		// Now also register the onhashchange() event for
		// when navigating happens...
		window.onhashchange = function() {
			if (window.location.hash != "") {
				navigate_to(window.location.hash.substring(1));
			}
		}
		
		// Scroll to subsection if given.
		if (typeof subdst !== "undefined") {
			// We have a sub-chapter to scroll to...
			var dstid = chapter_name_to_filename(subdst);
			
			// Delay scrolling a bit
			setTimeout(function (){
				$("html, body").animate({ scrollTop: $('h3#' + dstid).offset().top }, 1000);
			}, 1000);
		}
		
		reset_ui();
	});
}

function reset_ui(is_index) {
	// Restore toindex links if they were hidden before
	if (!is_index && $("a.toindex").is(':hidden')) {
		$("a.toindex").fadeIn();
	}
}

function chapter_name_to_filename(chaptername) {
	return chaptername.replace(/\s+/g, '_')		// Replaces spaces with underscores
					  .replace(/[^\w\s]/gi, '')	// Removes special characters
					  .toLowerCase();
}