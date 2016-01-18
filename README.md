# co-lb-api-explorer-description

_Add custom API explorer title and description_

`npm install --save git+https://github.com/calleboketoft/co-lb-api-explorer-description.git`

Modify the file `server/boot/explorer.js` like this:

```javascript
...
let coApiDesc = require('co-lb-api-explorer-description')
let headerText = 'My awesome API'
let descriptionHTML = `
  <h1>Some API</h1>
  <p>Any HTML works here</p>
`
let text = coApiDesc.getDescription(headerText, descriptionHTML)

let explorerApp = explorer(server, {
  basePath: restApiRoot,
  apiInfo: {
    description: text
  }
}
```
