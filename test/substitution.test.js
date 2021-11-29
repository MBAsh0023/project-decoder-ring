// Write your tests here!
const substitutionModule = require('../src/substitution.js')
const expect = require("chai").expect;

describe("Substitution", () => {
    it(`(thinkful, xoyqmcgrukswaflnthdjpzibev) should be: xoyqmcgrukswaflnthdjpzibev`, () => {
      let actual = substitutionModule.substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")
      let expected = "jrufscpw"
      expect(actual).to.be.equal(expected)
  })
  
    it(`(You are an excellent spy, xoyqmcgrukswaflnthdjpzibev) should be: elp xhm xf mbymwwmfj dne`, () => {
      let actual = substitutionModule.substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
      let expected = "elp xhm xf mbymwwmfj dne"
      expect(actual).to.be.equal(expected)
  })
  
    it(`(jrufscpw, xoyqmcgrukswaflnthdjpzibev, false) should be: thinkful`, () => {
      let actual = substitutionModule.substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)
      let expected = "thinkful"
      expect(actual).to.be.equal(expected)
  })
  
    it(`(message, $wae&zrdxtfcygvuhbijnokmpl) should be: y&ii$r&`, () => {
      let actual = substitutionModule.substitution("message", "$wae&zrdxtfcygvuhbijnokmpl")
      let expected = "y&ii$r&"
      expect(actual).to.be.equal(expected)
  })
  
    it(`(y&ii$r&, $wae&zrdxtfcygvuhbijnokmpl, false) should be: xoyqmcgrukswaflnthdjpzibev`, () => {
      let actual = substitutionModule.substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false)
      let expected = "message"
      expect(actual).to.be.equal(expected)
  })
  
    it(`(thinkful, short) should be: xoyqmcgrukswaflnthdjpzibev`, () => {
      let actual = substitutionModule.substitution("thinkful", "short")
      let expected = false
      expect(actual).to.be.equal(expected)
  })
  
    it(`(thinkful, abcabcabcabcabcabcabcabcyz) should be: false`, () => {
      let actual = substitutionModule.substitution("thinkful", "abcabcabcabcabcabcabcabcyz")
      let expected = false
      expect(actual).to.be.equal(expected)
  })
})
         

