let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((value) => {
      if(value.profession === "developer")
      {
          console.log(value);
      }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(function (person)
  {
      if(person.profession==="developer")
      {
          console.log(person);
      }
  });
}

function addData() {
  //Write your code here, just console.log
  const arr2={id:4,name:"susan",age:"20",profession:"intern"};
    arr.push(arr2);
    console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  const arr2=arr.filter(item => item.profession!="admin");
    arr=arr2;
    console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArr=[
      {id: 5, name: "Rohit", age:"27", profession: "admin" },
      {id: 6, name: "Kohli", age:"26", profession: "tester" },
      {id: 7, name: "Dhoni", age:"30", profession: "analyst" }, 
  ];
  let combineArray=arr.concat(newArr);
  console.log(combineArray);
}
