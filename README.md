# FloomChallenge
Floom Challenge in 2 hours tops

To start the project do npm install and then npm run build and go to http://localhost:3000/ in your browser.
Please, make sure to create the { .babelrc } file

{
  "presets": ["env", "react", "stage-3"],
  "plugins": [
    ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
  ]
}


package.json 

    I have add Ant Design dependency.
    I use the Babel preset '@babel/preset-env' because is my default go to, but I could have also used the react one.


webpack.config.js 

    I have congiured the webpack so that it can bundle all js into a single js file. Also, I included the necessary libraries to read css files and images, so that they could be also imported.
