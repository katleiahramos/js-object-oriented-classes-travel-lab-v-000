

class Driver{
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  };

  yearsExperienceFromBeginningOf(endYear){
    let end = new Date(endYear, 0, 1);
    let total =  (end - this.startDate)/(31536000000);//returns in miliseconds

    return Math.round(total);
  };

};

class Route{
  let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;


  };

  aveToIndex(ave){
    return eastWest.indexOf(ave);
  };

  blocksTravelled(){
    const deltaX = aveToIndex(this.endingLocation.horizontal) -
  };

};
