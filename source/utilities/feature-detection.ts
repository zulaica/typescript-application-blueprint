interface SupportForInterface {
  supportFor: (this: object, features: string | string[]) => Promise<{}>;
}

function supportFor(this: object, features: string | string[]) {
  if (typeof features === 'string') {
    features = [features];
  }

  let isSupported = true;
  let unsupportedFeature: string;

  for (const feature of features) {
    if (!(feature in this)) {
      isSupported = false;
      unsupportedFeature = feature;
      break;
    }
  }

  return new Promise((resolve, reject) => {
    isSupported ? resolve(isSupported) : reject(unsupportedFeature);
  });
}

interface Navigator extends SupportForInterface {
  this: Navigator;
}
Navigator.prototype.supportFor = supportFor;
