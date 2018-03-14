interface SupportForInterface {
  supportFor: (feature: any) => void
}

const supportFor = (feature: any) => {
  if (typeof feature !== 'undefined') {
    return Promise.resolve(true)
  }
  return Promise.reject(false)
}

interface Navigator extends SupportForInterface { this: Navigator }
Navigator.prototype.supportFor = supportFor
