interface SupportForInterface {
  supportFor: (feature: string, thing?: object) => Promise<boolean>
}

function supportFor(feature: string, thing: object = this) {
  if (feature in thing) {
    return Promise.resolve(true)
  }
  return Promise.reject(false)
}

interface Navigator extends SupportForInterface { this: Navigator }
Navigator.prototype.supportFor = supportFor
