arr1 = ['Hello','World']
arr2 = [1,3,9,5,4,9,6]
arr3=[...arr1,...arr2]
arr4=arr3
arr5=['a','j','t','r','f']
arr5=[...arr4,...arr5]

//1
cities=['Pune','Goa','Vizag']
cities.unshift('Delhi')
console.log(cities);

//2
city='kolkata'
cities.push(city);
console.log(cities);

cities.pop();
console.log(cities)

cities.pop();
console.log(cities)
