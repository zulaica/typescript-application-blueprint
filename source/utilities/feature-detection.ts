interface SupportForInterface {
  supportFor: (feature: any) => Promise<boolean>
}

const supportFor = (feature: any) => {
  if (typeof `navigator.${feature}` !== 'undefined') {
    return Promise.resolve(true)
  }
  return Promise.reject(false)
}

interface Navigator extends SupportForInterface { this: Navigator }
Navigator.prototype.supportFor = supportFor
