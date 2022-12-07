let data = [
  {
    id: "1",
    name: "Casio G-Schock",
    category: "men",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora dolor quo earum ipsum maxime? Enim necessitatibus aperiam quam dolor corrupti maiores libero laborum, neque sed tempora facere dolore assumenda architecto, asperiores tenetur quos laboriosam numquam repellat ea voluptatum cumque beatae.",
    price: "150",
    stock: "15",
    picture: "/src/assets/images/casio1.webp",
  },
  {
    id: "2",
    name: "Casio Digital",
    category: "men",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora dolor quo earum ipsum maxime? Enim necessitatibus aperiam quam dolor corrupti maiores libero laborum, neque sed tempora facere dolore assumenda architecto, asperiores tenetur quos laboriosam numquam repellat ea voluptatum cumque beatae.",

    price: "85",
    stock: "12",
    picture: "/src/assets/images/casio2.webp",
  },
  {
    id: "3",
    name: "Curren Analog",
    category: "men",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora dolor quo earum ipsum maxime? Enim necessitatibus aperiam quam dolor corrupti maiores libero laborum, neque sed tempora facere dolore assumenda architecto, asperiores tenetur quos laboriosam numquam repellat ea voluptatum cumque beatae.",

    price: "100",
    stock: "8",
    picture: "/src/assets/images/curren3.webp",
  },
  {
    id: "4",
    name: "Pink Analog Watch",
    category: "women",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora dolor quo earum ipsum maxime? Enim necessitatibus aperiam quam dolor corrupti maiores libero laborum, neque sed tempora facere dolore assumenda architecto, asperiores tenetur quos laboriosam numquam repellat ea voluptatum cumque beatae.",

    price: "99",
    stock: "17",
    picture: "/src/assets/images/relojdama1.webp",
  },
  {
    id: "5",
    name: "Casio Analog Stainless",
    category: "women",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora dolor quo earum ipsum maxime? Enim necessitatibus aperiam quam dolor corrupti maiores libero laborum, neque sed tempora facere dolore assumenda architecto, asperiores tenetur quos laboriosam numquam repellat ea voluptatum cumque beatae.",

    price: "120",
    stock: "5",
    picture: "/src/assets/images/relojdama2.webp",
  },
  {
    id: "6",
    name: "Casio Digital Pink",
    category: "women",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora dolor quo earum ipsum maxime? Enim necessitatibus aperiam quam dolor corrupti maiores libero laborum, neque sed tempora facere dolore assumenda architecto, asperiores tenetur quos laboriosam numquam repellat ea voluptatum cumque beatae.",

    price: "95",
    stock: "12",
    picture: "/src/assets/images/relojdama3.webp",
  },
  {
    id: "7",
    name: "Girl Watch",
    category: "kids",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora dolor quo earum ipsum maxime? Enim necessitatibus aperiam quam dolor corrupti maiores libero laborum, neque sed tempora facere dolore assumenda architecto, asperiores tenetur quos laboriosam numquam repellat ea voluptatum cumque beatae.",

    price: "50",
    stock: "20",
    picture: "/src/assets/images/relojnina2.webp",
  },
  {
    id: "8",
    name: "Boy Watch",
    category: "kids",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora dolor quo earum ipsum maxime? Enim necessitatibus aperiam quam dolor corrupti maiores libero laborum, neque sed tempora facere dolore assumenda architecto, asperiores tenetur quos laboriosam numquam repellat ea voluptatum cumque beatae.",

    price: "50",
    stock: "18",
    picture: "/src/assets/images/relojnino1.webp",
  },
];

export const dataBase = () => {
  return new Promise((res, rej) => {
    const condition = true; //Simula que la promise responde correctamente
    condition
      ? setTimeout(() => {
          res(data);
        }, 1500)
      : rej(`Can't reach server database`);
  });
};
