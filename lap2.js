let characters = [
    [
    "Luke Skywalker",
       177,
      "male",
      77,
    "brown",
    ],
    [
       "Leia Organa",
      160,
      "female",
       56,
       "blue",
    ],
    [
       "Han Solo",
      180,
      "male",
      80,
      "brown",
    ],
    [
       "Chewie",
      222,
      "male",
      190,
       "black",
    ],
    [
      "kevien",
      106,
       "male",
      32.2,
       "red",
    ],
  ];
  let namesmap = characters.map((character)=>character[0]);
  console.log(namesmap);

  let heightmap = characters.map((character)=>character[1]);
  console.log(heightmap);

  let heights1 = characters.filter((character)=>character[1]<200);
  console.log(heights1);

  let male1 = characters.filter((character)=>character[2] === "male")
  console.log(male1);

  let mass1 = characters.sort((a,b)=> a[3]-b[3]);
  console.log(mass1);
  
  let sortHeight = characters.sort((a,b)=> a[1]-b[1]);
  console.log(sortHeight);

  let everymass = characters.every((character)=>character[3]>40);
  console.log(everymass);
  
  let everyheights = characters.every((character)=>character[1]<200);
  console.log(everyheights)

  let someEyes = characters.some((character)=>character[4]==="blue");
  console.log(someEyes);

  let someHeight = characters.some((character)=>character[1]>210);
  console.log(someHeight);

const initialValue = 0;
const totalHeights = characters.reduce(
  (accumulator, character) => accumulator + character[1],
  initialValue,
);
console.log(totalHeights);