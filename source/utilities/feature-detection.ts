interface SupportForInterface {
  supportFor: (this: object, feature: string) => Promise<void>;
}

function supportFor(this: object, feature: string) {
  if (feature in this) {
    return Promise.resolve();
  }
  return Promise.reject(false);
}

interface Navigator extends SupportForInterface {
  this: Navigator;
}
Navigator.prototype.supportFor = supportFor;
