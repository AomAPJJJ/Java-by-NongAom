// 65130500050 Panipak Jongsirivanich
function isPasswordValid(password) {
  if(password === null || password === undefined ||password.length < 8 || !password.match(/[a-z]/) || !password.match(/[A-Z]/) || !password.match(/[0-9]/) || !password.match(/[@#$%^&\*!]/)){
      return false
  }else{
  return true
}

}

module.exports = isPasswordValid


