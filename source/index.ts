/*
 * Native ES Module support in browsers requires either a file extension or a js
 * MIMETYPE to resolve correctly. As a workaround, TSC will resolve an import
 * with a non `.ts` file extension allowing the code to compile with the
 * correct reference.
 *
 * https://github.com/Microsoft/TypeScript/issues/16577#issuecomment-309169829
 */
import './utilities/event-listener.js';
import './utilities/feature-detection.js';

window.on('load', () =>
  navigator.supportFor(['requestMIDIAccess', 'DeviceMotionEvent']).then(
    () => {
      document.body.appendChild(document.createTextNode('Hello, y’all!'));
    },
    unsupportedFeatures => {
      document.body.appendChild(document.createElement('dl'));
      document
        .getElementsByTagName('dl')[0]
        .appendChild(document.createElement('dt'));
      document
        .getElementsByTagName('dt')[0]
        .appendChild(document.createTextNode('Unsupported Features'));
      for (const feature of unsupportedFeatures) {
        document
          .getElementsByTagName('dl')[0]
          .appendChild(document.createElement('dd'));
        document
          .getElementsByTagName('dd')
          [unsupportedFeatures.indexOf(feature)].appendChild(
            document.createTextNode(`${feature}`)
          );
      }
    }
  )
);
