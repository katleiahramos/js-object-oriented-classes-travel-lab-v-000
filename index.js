class Driver{
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  };

  yearsExperienceFromBeginningOf(endYear){
    const end = new Date(endYear);
    return end - this.startDate
  };

}
