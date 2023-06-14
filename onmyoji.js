console.clear();
console.debug('Script init');
//	Get current url
pathname = window.location.pathname;
pathname = pathname == '/' ? '/index.html' : pathname;
console.debug('Pathname:', pathname);
//	Show corresponding page path
page_path = '/onmyoji/pages' + pathname.replace(".html", ".page");
console.debug('Page_path:', page_path);

function load_doc (path) {
	return new Promise((resolve) => {
		//let abs_path = window.location.href + rel_path; // cant i use just the relative?
		let request = new XMLHttpRequest ();
		request.open ('GET', path, true);
		request.overrideMimeType("text/html");
		request.responseType = 'document';
		request.send(null);
		request.onload = () => {
			resolve(request.responseXML);
		}
	});
}

function get_template(xml) {
	page_settings = xml.getElementsByTagName("onmyoji-page")[0];
	template = page_settings.getAttribute('template');
	path = `/onmyoji/templates/${template}.template`;
	return path
}

function get_fields(xml) {
	let fields = {};
	let tags = xml.getElementsByTagName("page-cut");
	for(let i in tags) {
		tag = tags[i];
		if(typeof(tag)=='object') {
			let key = tag.getAttribute('key');
			fields[key] = tag.innerHTML;
		}
	};
	console.log({fields:fields});
	return fields
}

function process_template(template, fields) {
	let raw = new XMLSerializer().serializeToString(template);
	let processed_text = raw;
	for(let key in fields) {
		console.log(key);
		search_for = '{{' + key + '}}';
		processed_text = processed_text.replaceAll(search_for, fields[key]);
	}
	let renderized = processed_text;
	return renderized
}

load_doc(page_path).then((page) => {
	template_path = get_template(page);
	console.debug('template_path:', template_path);
	load_doc(template_path).then((template) => {
		let fields = get_fields(page);
		let renderized = process_template(template, fields);
		console.log(renderized);
		document.documentElement.innerHTML = renderized;
	});
})


