(() => {

  type Avenger = {
    name: string,
    weapon: string;
  }

  const ironman: Avenger = {
    name: 'Tony Stark',
    weapon: 'Armor suit'
  }

  const captainAmerica: Avenger = {
    name: 'Capitán América',
    weapon: 'Shield'
  }

  const thor: Avenger = {
    name: 'Thor',
    weapon: 'Mjolnir'
  }

  const arr = [1,2,3,4]
  const avengers: Avenger[] = [ ironman, thor, captainAmerica ];

  //* For tradicional
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
  }

  //* for of
  for (const avenger of avengers) {
    console.log( avenger.name, avenger.weapon )
  }

})()