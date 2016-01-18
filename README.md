# co-lb-api-explorer-description

_Add custom API explorer title and description_

`npm install --save git+https://github.com/calleboketoft/co-lb-api-explorer-description.git`

Remove the following part from `component-config.json`:

```json
"loopback-component-explorer": {
  "mountPath": "/explorer"
}
```

Add the file `server/boot/explorer.js`:

```javascript
var explorer = require('loopback-component-explorer')
var coApiDesc = require('co-lb-api-explorer-description')

module.exports = function(server) {
  var headerText = 'My awesome API'
  var descriptionHTML = `
    <h1>Some API</h1>
    <p>Any HTML works here</p>
  `
  var text = coApiDesc.getDescription(headerText, descriptionHTML)

  explorer(server, {
    basePath: server.get('restApiRoot'),
    apiInfo: {
      description: text
    },
    mountPath: '/explorer'
  })
}

```
