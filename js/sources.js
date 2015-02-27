function gen_sources(elemscan) {
	var sources = list_sources(elemscan);
	$.each(sources, function(i, value) {
		// For each found source, add a line containing
		// the source info and link to the 'sources' div
		// element.
		var elem_source = "<li><a href='" + value.attr("href") + "'>" + value.attr("title") + "</li>";
		$("div#sources ol").append(elem_source);
	});
}

function list_sources(elemscan) {
	var sources = []
	// Find all a elements in elemscan.
	$(elemscan).find("a").each(function() {
		sources.push($(this));
	});
	return sources;
}