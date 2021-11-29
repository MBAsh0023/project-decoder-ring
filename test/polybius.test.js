// Write your tests here!
const polybiusModule = require('../src/polybius.js')
const expect = require("chai").expect;

describe("Polybius", () => {
  
  it(`(thinkful) should be: 4432423352125413`, () => {
    let actual = polybiusModule.polybius("thinkful")
    let expected = "4432423352125413"
    expect(actual).to.be.equal(expected)
  })
    
  it(`(Hello world) should be: 3251131343 2543241341`, () => {
    let actual = polybiusModule.polybius("Hello world")
    let expected = "3251131343 2543241341"
    expect(actual).to.be.equal(expected)
  })
    
  it(`(3251131343 2543241341, false) should be: hello world`, () => {
  let actual = polybiusModule.polybius("3251131343 2543241341", false)
  let expected = "hello world"
  expect(actual).to.be.equal(expected)
  })
    
  it(`(4432423352125413) should be: "th(i/j)nkful"`, () => {
  let actual = polybiusModule.polybius("4432423352125413", false)
  let expected = "th(i/j)nkful"
  expect(actual).to.be.equal(expected)
  })
    
  it(`("44324233521254134", false) should be: false`, () => {
  let actual = polybiusModule.polybius("44324233521254134", false)
  let expected = false
  expect(actual).to.be.equal(expected)
  })
  
})