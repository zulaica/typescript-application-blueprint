interface SupportForInterface {
  supportFor: (this: object, features: string | string[]) => Promise<{}>;
}

function supportFor(this: object, features: string | string[]) {
  if (typeof features === 'string') {
    features = [features];
  }

  let isSupported: boolean;
  let unsupportedFeature: string;

  for (const feature of features) {
    isSupported = feature in this;

    if (!isSupported) {
      unsupportedFeature = feature;
      break;
    }
  }

  return new Promise((resolve, reject) => {
    isSupported ? resolve() : reject(unsupportedFeature);
  });
}

interface Navigator extends SupportForInterface {
  this: Navigator;
}
Navigator.prototype.supportFor = supportFor;
