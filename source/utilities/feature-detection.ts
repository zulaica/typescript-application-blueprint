interface SupportForInterface {
  supportFor: (this: object, feature: string) => Promise<boolean>
}

function supportFor(this: object, feature: string) {
  if (feature in this) {
    return Promise.resolve(true)
  }
  return Promise.reject(false)
}

interface Navigator extends SupportForInterface { this: Navigator }
Navigator.prototype.supportFor = supportFor
