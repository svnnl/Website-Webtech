function navigate_to(dst, subdst) {

	var dstpage = dst.toLowerCase().replace(" ", "_");
	$("div#content").load("pages/" + dstpage + ".html", function() {
		// Done loading page content, now generate sources!
		gen_sources("div#content");
	});

	if (typeof subdst !== "undefined") {
		// We have a sub-chapter to scroll to...
		var dstid = subdst.toLowerCase().replace(" ", "_");
		$("html, body").animate({ scrollTop: $('h3#' + dstid).offset().top }, 1000);
	}
}