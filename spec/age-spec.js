import { Age, Birthdate } from './../js/age.js';

describe('Age', function(){
  let testAge;

  it('it will create an Age object, and set argument to the age property', function(){
    testAge = new Age(27);
    expect(testAge.age).toEqual(27);
  })

  it('it will create an Age object, and set argument to the age in seconds property', function(){
    testAge = new Age(27);
    expect(testAge.ageSeconds).toEqual(851472000);
  })

})

describe('Birthdate', function(){
  let testDOB;
  let testBirthdate;

  beforeEach(function() {
    testDOB = "1990-07-17 00:00:00";
    testBirthdate = new Birthdate(testDOB);
  });

  it('setAge will set the years in seconds from a birthdate', function(){
    testBirthdate.setAge();
    expect(testBirthdate.ageSeconds).toEqual(862753570.847)
  });

  it('setAge will set the years from a birthdate calculated from seconds and rounded down', function(){
    testBirthdate.setAge();
    expect(testBirthdate.getAge(testBirthdate.ageSeconds)).toEqual(27);

  })

  it('getMercuryYrs will get the age of person in Mercury years', function(){
    testBirthdate.setAge();
    expect(testBirthdate.getMercuryYrs()).toEqual(113);
  });

  it('getVenusYrs will get the age of person in Venus years', function(){
    testBirthdate.setAge();
    expect(testBirthdate.getVenusYrs()).toEqual(113);
  });

})
