interface SupportForInterface {
  supportFor: (feature: string) => Promise<boolean>
}

const supportFor = (feature: string) => {
  if (typeof `this.${feature}` !== 'undefined') {
    return Promise.resolve(true)
  }
  return Promise.reject(false)
}

interface Navigator extends SupportForInterface { this: Navigator }
Navigator.prototype.supportFor = supportFor
