function isNumeric(str) {
    if (typeof str != "string") return false 
    return !isNaN(str) && 
           !isNaN(parseFloat(str)) 
  }
  
  const cnameInput = document.getElementById('ccnum');
  const passwordInput= document.getElementById('password');
  const repasswordInput= document.getElementById('rep-password');
  
  repasswordInput.addEventListener('input', () => {
      console.log(repasswordInput.value)
      if(repasswordInput.value!==passwordInput.value){
          repasswordInput.setCustomValidity('Passwords do not match.'); 
      }else{
          repasswordInput.setCustomValidity('');
          repasswordInput.checkValidity();
      }
  })
  
  cnameInput.addEventListener('input', () => {
      if(cnameInput.value === '') {
      cnameInput.setCustomValidity('Enter your card number!');
    } else {
      let value = String(cnameInput.value)
      let valid = true
      let value_parts = value.split('-') 
      console.log(value_parts)
      if(value_parts.length === 4){
  
          value_parts.map(part=>{
              console.log(isNumeric(part)," .  ",part)
              if(!isNumeric(part)){
                  valid=false
              }
          })
      }else{
          cnameInput.setCustomValidity('Please change formatt'); 
      }
      console.log("Valid ",valid)
      if(valid===false){
          cnameInput.setCustomValidity('Please change format'); 
      }else{
          cnameInput.setCustomValidity('');
          cnameInput.checkValidity();
      }
    }
  });
  