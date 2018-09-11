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

const handleSuccess = () =>
  document.body.appendChild(document.createTextNode(document.title));

const handleUnsupported = (unsupportedFeatures: string[]) => {
  const list = document.body.appendChild(document.createElement('dl'));
  const term = document.createElement('dt');
  list.appendChild(term);
  term.appendChild(document.createTextNode('Unsupported Features'));
  for (const feature of unsupportedFeatures) {
    const description = list.appendChild(document.createElement('dd'));
    description.appendChild(document.createTextNode(`${feature}`));
  }
};

window.on('load', () =>
  navigator
    .supportFor('requestMIDIAccess')
    .then(handleSuccess, handleUnsupported)
);
