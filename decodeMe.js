function decode(str) {
  let correctWord = ""

  // Insert your code here
  let charCodeList = []

  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i) + 1
    charCodeList.push(charCode)

    console.log(
      `Character code ${str.charCodeAt(i)} is equal to ${str.charAt(i)}`
    )
  }

  console.log("CharCodeList is", charCodeList)

  correctWord = String.fromCharCode(...charCodeList)

  return correctWord
}

const word = "bnchmf"
console.log(decode(word))
// Expected result: coding
