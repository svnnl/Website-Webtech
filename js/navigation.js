function navigate_to(dst) {
	var dstpage = dst.toLowerCase().replace(" ", "_");
	$("div#content").load("pages/" + dstpage + ".html");
}