const encodeString = (string, key)=>{
  const splitString = string.split('');
  const encodedStringArray = [];
  splitString.forEach( char => {
    let encodedCharacter = char;
    if (/^[A-Z]/.test(char)){
      const newCharCode = char.charCodeAt() + key;
      if(Math.floor(newCharCode / 90)){
        encodedCharacter = String.fromCharCode(newCharCode % 90 + 65)
      } else{
        encodedCharacter = String.fromCharCode(newCharCode)
      }
    }
    else if (/^[a-z]/.test(char)){
      const newCharCode = char.charCodeAt() + key;
      if(Math.floor(newCharCode / 122)){
        encodedCharacter = String.fromCharCode(newCharCode % 122 + 97)
      } else{
        encodedCharacter = String.fromCharCode(newCharCode)
      }
    }
    encodedStringArray.push(encodedCharacter);
  })      
  return encodedStringArray.join('');
}

console.log(encodeString('hi How Are yu!_8* neogcamp',26))
