# Tailwind-Starter-for-HTML

1. git clone with `https://github.com/PixelDevSolution/Taiwilnd-Starer-for-HTML.git`
2. `cd ./Tailwind-starter-for-HTM`
3. `npm install` or `yarn`
4. run dev watch serer `npm run dev`
5. for use style css to minified versions due to production `npm run prod`


## Explain

1. `"dev": "npx tailwindcss -i ./src/input.css -o ./public/css/style.css --watch",`  
2.  dev is script name </br>  
3.  -i ./src/input.css is the tailwind main input css. where tailwind `@tailwind base; @tailwind components;  @tailwind utilities;` base loaded </br>  
4. -o ./public/css/style.css is the output css location where your html applied classes complied by tailiwnd to store as vanilla css. </br>  
5. --watch / -w  is the continuously looking change to html classes. every time saving html documents save it will be load automatically. </br>


6.	 `"prod": "npx tailwindcss -i ./src/input.css -o ./public/css/style.css --minify"`
7. --minify is compiled to output css file to a minified version css
