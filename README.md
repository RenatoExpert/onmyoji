# Onmyoji
Make a dynamic website with static files

## Example map
```
{
	'dir': '.',
	'templates': {
		'home-template': 'home.template',
		'info': 'info.template',
		'post': 'posts.template'
	},
	'components': {
		'top-menu': 'menu.component',
		'footer': footer.component',
		'carousel': carousel.component
	},
	'pages': {
		'home': {
			'template': 'home-template',
			'content': 'home.content',
			'path': '/index.html'
		},
		'services': {
			'template': 'info',
			'content': 'services.content',
			'path': '/services.html'
		},
		'hello-world': {
			'template': 'post',

	}
}
```

## Example page
Its an example page
```
<script src="https://cdn.jsdelivr.net/npm/onmyoji@3.3.3/dist/js/onmyoji.bundle.min.js" integrity="sha384-hash" crossorigin="anonymous"></script>
<script>
	onmyoji_map = 'https://mywebsite.com/example/root/onmyoji.json';
</script>
<onmyoji-content>
	<onmyoji-title>
	</onmyoji-title>
	<onmyoji-content>
	</onmyoji-content>
</onmyoji-content>
```



