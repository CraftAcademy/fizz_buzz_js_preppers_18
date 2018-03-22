describe("FizzBuzz", function(){

  var subject;

  beforeEach(function(){
    subject = new FizzBuzz()
  })

  it("will return a number if none of the game rules are met", function(){
    expect(subject.check(2)).toBe(2)
  })

  it("will return 'fizz' if number is divisable by 3", function(){
    expect(subject.check(3)).toBe('fizz')
  })

  it("will return 'buzz' if number is divisable by 5", function(){
    expect(subject.check(5)).toBe('buzz')
  })

  it("will return 'fizz-buzz' if number is divisable by 15", function(){
    expect(subject.check(15)).toBe('fizz-buzz')
  })
})
