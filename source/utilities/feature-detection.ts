const supportFor = (feature: any) => {
  if (typeof feature !== 'undefined') {
    return Promise.resolve(true)
  }
  return Promise.reject(false)
}

export default supportFor
