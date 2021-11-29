// Write your tests here!
const caesarModule = require('../src/caesar.js')
const expect = require("chai").expect;

describe('Caesar Shift', () => {
  
  it(`(thinkful, 3) should be: wklqnixo`, () => {
    let actual = caesarModule.caesar("thinkful", 3)
    let expected = "wklqnixo"
    expect(actual).to.be.equal(expected)
  })
  
  it(`(thinkful, -3) should be: qefkhcri`, () => {
    let actual = caesarModule.caesar("thinkful", -3)
    let expected = "qefkhcri"
    expect(actual).to.be.equal(expected)
  })
  
  it(`(wklqnixo, 3, false) should be: thinkful`, () => {
    let actual = caesarModule.caesar("wklqnixo", 3, false)
    let expected = "thinkful"
    expect(actual).to.be.equal(expected)
  })
  
  it(`(This is a secret message!, 8) should be: bpqa qa i amkzmb umaaiom!`, () => {
    let actual = caesarModule.caesar("This is a secret message!", 8)
    let expected = "bpqa qa i amkzmb umaaiom!"
    expect(actual).to.equal(expected)
  })
  
  
  it(`(thinkful) should be: false`, () => {
    let actual = caesarModule.caesar("thinkful")
    let expected = false
    expect(actual).to.be.equal(expected)
  })
  
  it(`(thinkful, 99) should be: false`, () => {
    let actual = caesarModule.caesar("thinkful", 99)
    let expected = false
    expect(actual).to.be.equal(expected)
  })
  
  it(`(thinkful, -26) should be: false`, () => {
    let actual = caesarModule.caesar("thinkful", -26)
    let expected = false
    expect(actual).to.be.equal(expected)
  })
})