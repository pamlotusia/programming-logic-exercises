function validatePassword(password) {
  let message = 'all right'
  
  if(!/[A-Z]/.test(password)){
    message = 'Password must contains at least one uppercase letter'
  } else if (!/[a-z]/.test(password)){
    message = 'Password must contains at least one lowcase letter'
  } else if (!/[@#$&_]/.test(password)){
    message = 'Password must contains at least one special character (@#$&_)'
  }
  console.log(message)
}

let password = 'Pamela@'
let password2 = 'Pamela'
validatePassword(password)
validatePassword(password2)