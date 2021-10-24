import React from 'react'

import { destroyNotice, showNotice } from 'easy-notices'

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

  function showButtonActions() {
    showNotice({
      message: 'Display successfully',
      buttonCallback: () => showNotice(),
      width: 350,
      borderRadius: 20
    })
  }

  return (
    <div className='divRoot'>
      <button onClick={() => show('success')}>Success</button>
      <button onClick={() => show('warning')}>Warning</button>
      <button onClick={() => show('info')}>Info</button>
      <button onClick={() => show('error')}>Error</button>
      <button onClick={showDescription}>Demo description</button>
      <button onClick={showButtonActions}>Demo actions</button>
      <button onClick={destroyNotice}>Destroy all notices</button>
    </div>
  )
}

export default App
