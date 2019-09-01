interface SupportForInterface {
  supportFor: (this: object, features: string | string[]) => Promise<unknown>;
}

function supportFor(this: object, features: string | string[]) {
  const unsupportedFeatures: string[] = [];
  features = Array.isArray(features) ? features : [features];

  for (const feature of features) {
    if (!(feature in this)) {
      unsupportedFeatures.push(feature);
    }
  }

  return new Promise((resolve, reject) => {
    !unsupportedFeatures.length ? resolve() : reject(unsupportedFeatures);
  });
}

interface Navigator extends SupportForInterface {
  this: Navigator;
}
Navigator.prototype.supportFor = supportFor;

interface Window extends SupportForInterface {
  this: Window;
}
Window.prototype.supportFor = supportFor;
