let people = [];

export const loadAllPeople = async () => {
  // usin promises
  // fetch("https://randomuser.me/api/")
  //   .then(response => {
  //     return response.json();
  //   })
  //   .then(result => {
  //     this.people = result.results;
  //   });

  // using async await
  let response = await fetch("https://randomuser.me/api/?results=10");
  let result = await response.json();
  people = result.results;
};

export const getAllPeople = () => {
  return people;
};
