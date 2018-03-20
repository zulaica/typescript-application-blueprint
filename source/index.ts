/*
 * Native ES Module support in browsers requires either a file extension or a js
 * MIMETYPE to resolve correctly. As a workaround, TSC will resolve an import
 * with a non `.ts` file extension allowing the code to compile with the
 * correct reference.
 *
 * https://github.com/Microsoft/TypeScript/issues/16577#issuecomment-309169829
 */
import './utilities/event-listener.js'
import './utilities/feature-detection.js'

window.on('load', () =>
  navigator
    .supportFor('requestMIDIAccess')
    .then(
      () => {
        document.body.appendChild(document.createTextNode('Hello, y’all!'))
      },
      () => {
        document.body.appendChild(document.createTextNode('Nope.'))
      }
    )
)
