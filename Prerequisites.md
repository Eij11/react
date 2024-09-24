`You need to Install Node`

# https://nodejs.org/en

    check cmd for node version
        node -v

# Creating an app

`Open terminal on your folder in VsCode`
npm create vite@latest

    choose: react and typescript/js

    //change directory to react app
    cd my-react-app-ts
    npm install
    npm run dev

      VITE v5.4.2  ready in 517 ms

    ➜  Local:   http://localhost:5173/
    ➜  Network: use --host to expose
    ➜  press h + enter to show help

run the project
go to: package.json
//dont close the terminal, else di gagana yung localhost

# Bootstrap

https://react-bootstrap.netlify.app/docs/getting-started/introduction
//make sure cd is on the folder
npm install react-bootstrap bootstrap

`Check package.json dependencies if bootstrap is there`

{
/_ The following line can be included in your src/index.js or App.js file _/
}
import 'bootstrap/dist/css/bootstrap.min.css';

goto index.html:

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

`Components`
https://react-bootstrap.netlify.app/docs/components/accordion
https://getbootstrap.com/docs/5.3/components/accordion/
