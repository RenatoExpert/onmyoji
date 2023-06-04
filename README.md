# Onmyoji
Make a dynamic website with static files

# Examples
## HTML file
Its an example **entire** html page
```
<script src="https://cdn.jsdelivr.net/npm/onmyoji@1.0.0/onmyoji.js" integrity="sha384-hash" crossorigin="anonymous"></script>
<script>
	onmyoji_map = 'https://mywebsite.com/example/root/onmyoji';	//	Optional
</script>

```
## Page file
```
onmyoji-page template='home'>
    <page-cut key='header'>
        Hello World!
    </page-cut>
    <page-cut key='text'>
        I am just a example page!
    </page-cut>
</onmyoji-page>
```
## Template file
```
<!DOCTYPE HTML>
<html>
    <head>
        <title>
            {{header}}
        </title>
    </head>
    <body>
        {{header}}
        {{text}}
    </body>
</html>
```

