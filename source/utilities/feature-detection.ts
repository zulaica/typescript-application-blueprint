interface SupportForInterface {
  supportFor: (this: object, features: string | string[]) => Promise<{}>;
}

function supportFor(this: object, features: string | string[]) {
  let isSupported: boolean;
  const unsupportedFeatures: string[] = [];
  features = Array.isArray(features) ? features : [features];

  for (const feature of features) {
    isSupported = feature in this;

    if (!isSupported) {
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
