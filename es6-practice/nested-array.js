let data = {
  location: [
    {
      latitude: "34.5,037.8",
      longitude: "98.77,58.7",
      city: "Hyderabadh",
      country: "India",
    },
  ],
};

console.log(data.location[0].city);

// https://jsonplaceholder.typicode.com/users/1
const copyCode = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};
console.log("Email id:", copyCode.email);
console.log("This is", copyCode.address.city);
console.log("Lactitude:", copyCode.address.geo.lat);
console.log("Company name:", copyCode.company.name);
