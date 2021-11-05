const furnitures = [
  {
    "varnish": [
      "Tan",
      "Chocolate",
      "Black",
      "White"
    ],
    "_id": "5be9cc611c9d440000c1421e",
    "name": "Cross Table",
    "price": 59900,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "imageUrl": "oak_1.jpg"
  },
  {
    "varnish": [
      "#D0A943",
      "#ffe5d9"
    ],
    "_id": "5beaadda1c9d440000a57d98",
    "name": "Coffee Table",
    "price": 89900,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "imageUrl": "oak_2.jpg"
  },
  {
    "varnish": [
      "#98A39B",
      "black",
      "white"
    ],
    "_id": "5beaae361c9d440000a57d99",
    "name": "Dining Table",
    "price": 109900,
    "imageUrl": "oak_3.jpg",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "varnish": [
      "#D99C82",
      "#7f5539"
    ],
    "_id": "5beaaf2e1c9d440000a57d9a",
    "name": "Bench",
    "price": 39900,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "imageUrl": "oak_4.jpg"
  },
  {
    "varnish": [
      "#D99C82",
      "#7f5539"
    ],
    "_id": "5beab2061c9d440000a57d9b",
    "name": "Vintage Chair",
    "price": 79900,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "imageUrl": "oak_5.jpg"
  }
]

exports.find = () => {
  return new Promise((resolve, reject) => resolve(JSON.parse(JSON.stringify(furnitures))));
}

exports.findById = (id) => {
  return new Promise((resolve, reject) =>
    resolve(JSON.parse(JSON.stringify(furnitures)).find(furniture =>
      furniture._id == id)
    )
  );
}