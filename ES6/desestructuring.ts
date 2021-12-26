(() => {

  type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
    activos: boolean;
    poder: number;
  }

  const avengers:Avengers = {
    nick: 'Samuel L. Jackson',
    ironman: 'Robert Downey Jr.',
    vision: 'Paul Bettany',
    activos: true,
    poder: 1500
  }

  // const { poder, vision } = avengers
  // console.log( poder.toFixed(2), vision.toUpperCase() );

  const printAvenger = ( { ironman, ...resto }:Avengers ) => {
    console.log( ironman, resto );
  }

  // printAvenger( avengers );
  const avengersArr: [string, boolean, number] = ['Cap. América', true, 150.15];

  const [ capitan, ironman, seriaNumero ] = avengersArr;
  // console.log({ ironman, capitan });


})()