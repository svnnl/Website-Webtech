function gen_sources(elemscan) {
	var sources = list_sources(elemscan);
	$.each(sources, function(i, value) {
		var elem_source = "<li><a href='" + value.attr("href") + "'>" + value.attr("title") + "</li>";
		$("div#sources ol").append(elem_source);
	});
}

function list_sources(elemscan) {
	var sources = []
	$(elemscan).find("a").each(function() {
		sources.push($(this));
	});
	return sources;
}