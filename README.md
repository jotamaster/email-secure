# email-secure
## Installation
     - npm install email-secure --save

## Usage

```js
//es5

var emailSecure = require('email-secure')
var email = emailSecure.hideEmail("j3anhernandez@gmail.com")
console.log(email) // j3an*********@gmail.com

//es6

import {hideEmail} from 'email-secure'
let email = hideEmail("j3anhernandez@gmail.com")
console.log(email) // j3an*********@gmail.com
```
 

