function gen_sources(elemscan, elemdst) {
	var sources = list_sources();
	
}

function list_sources(elemscan) {
	var sources = []
	$(elemscan).each(function() {
		if ($(this).is("a")) {
			sources.push($(this));
		} else {
			sources = concat(sources, list_sources($(this)));
		}
	});
	return sources;
}