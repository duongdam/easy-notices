# easy-notices

> ClassFunc library easy notices

[![NPM](https://img.shields.io/npm/v/easy-notices.svg)](https://www.npmjs.com/package/easy-notices) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
yarn add easy-notices

npm install --save easy-notices
```

## Usage

```jsx
import React from 'react'

import { showNotice, destroyNotice } from 'easy-notices'

const App = () => {

  function show(type) {
    showNotice({ message: type, type })
  }

  function showDescription() {
    showNotice({
      message: 'Display a notification message globally.',
      description:
        'To display a notification message at any of the four corners of the viewport. Typically it can be used in the following cases:\n' +
        '\n' +
        'A notification with complex content.\n' +
        '\n' +
        'A notification providing a feedback based on the user interaction. Or it may show some details about upcoming steps the user may have to follow.\n' +
        '\n' +
        'A notification that is pushed by the application.',
      width: 350,
      buttonCallback: null
    })
  }

  function showButtonAction() {
    showNotice({
      message: 'Display successfully',
      buttonCallback: () =>
        showNotice({
          message: 'Revert success',
          buttonCallback: null,
          onClose: destroyNotice
        }),
      width: 350,
      borderRadius: 20,
    })
  }

  return (
    <div className='divRoot'>
      <button onClick={() => show('success')}>Success</button>
      <button onClick={() => show('warning')}>Warning</button>
      <button onClick={() => show('info')}>Info</button>
      <button onClick={() => show('error')}>Error</button>
      <button onClick={showDescription}>Demo description</button>
      <button onClick={showButtonAction}>Demo actions</button>
      <button onClick={destroyNotice}>Destroy all notices</button>
    </div>
  )
}

export default App
```

```angular2html
Default props

message = 'Success',
description = null, descriptions of message
type = 'success', declare: 'success' | 'info' | 'error' | 'warning';
placement = 'bottomLeft', declare: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
duration = 1.5,
buttonName = 'Revert',
buttonCallback = null,
width = 250,
className = '',
borderRadius = 15,
border = null,
onClose = null,
onClick = null,
rtl = false

```

## License

MIT © [duongdam](https://github.com/duongdam)
