function uid(){
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export default [
  {
    id: uid(),
    title: 'Welcome Dinner',
    start: '2019-11-04T18:00:00',
    end: '2019-11-04T21:00:00',
    extendedProps: {
      description: 'Dinner at Blanco Borgata',
      address: '6166 N Scottsdale Rd #601, Scottsdale, AZ 85253'
    }
  },
  {
    id: uid(),
    title: 'Tech Talks',
    start: '2019-11-05T09:00:00',
    end: '2019-11-05T13:00:00',
    extendedProps: {
      description: 'Saguaro Hotel: Room Anchusa 1',
      address: '4000 N Drinkwater Blvd, Scottsdale, AZ 85251'
    }
  },
  {
    id: uid(),
    title: 'Lunch',
    start: '2019-11-05T13:00:00',
    end: '2019-11-05T14:00:00',
    extendedProps: {
      description: 'Saguaro Cookout: Room: Anchusa 2',
      address: '4000 N Drinkwater Blvd, Scottsdale, AZ 85251'
    }
  },
  {
    id: uid(),
    title: 'Learn Something New',
    start: '2019-11-05T14:00:00',
    end: '2019-11-05T16:30:00',
    extendedProps: {
      description: 'Get in a group with other people and learn something new',
      address: '4000 N Drinkwater Blvd, Scottsdale, AZ 85251'
    }
  },
  {
    id: uid(),
    title: 'Team Coding Competition',
    start: '2019-11-06T09:00:00',
    end: '2019-11-06T13:00:00',
    extendedProps: {
      description: 'Build Tetris Bots Together Room: Anchusa 1',
      address: '4000 N Drinkwater Blvd, Scottsdale, AZ 85251'
    }
  },
  {
    id: uid(),
    title: 'Lunch',
    start: '2019-11-06T13:00:00',
    end: '2019-11-06T14:00:00',
    extendedProps: {
      description: 'Santa Fe Fajitas in Anchusa 2',
      address: '4000 N Drinkwater Blvd, Scottsdale, AZ 85251'
    }
  },
  {
    id: uid(),
    title: 'Open Spaces',
    start: '2019-11-06T14:00:00',
    end: '2019-11-06T17:00:00',
    extendedProps: {
      description: 'We will split up into smaller groups and learn from each other',
      address: '4000 N Drinkwater Blvd, Scottsdale, AZ 85251'
    }
  },
  {
    id: uid(),
    title: 'Product Team Time',
    start: '2019-11-07T09:00:00',
    end: '2019-11-07T15:00:00',
    extendedProps: {
      description: 'Spend time with your product team!',
      address: 'Scottsdale, AZ'
    }
  },
  {
    id: uid(),
    title: 'Scavenger Hunt',
    start: '2019-11-07T15:00:00',
    end: '2019-11-07T17:30:00',
    extendedProps: {
      description: 'We will split up into teams and see who wins!',
      address: 'Scottsdale, AZ'
    }
  },
  {
    id: uid(),
    title: 'Wrap Up Dinner',
    start: '2019-11-07T17:30:00',
    end: '2019-11-07T20:00:00',
    extendedProps: {
      description: 'When you are done with the hunt, meet at Olive and Ivy',
      address: '7135 E Camelback Rd #195, Scottsdale, AZ 85251'
    }
  }
]
