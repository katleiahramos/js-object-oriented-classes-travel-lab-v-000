class Driver{
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  };

  yearsExperienceFromBeginningOf(endYear){
    let end = new Date(endYear, 0, 1)
    let total =  (end - this.startDate)/(31536000000) //returns in miliseconds

    return total
  };

}
