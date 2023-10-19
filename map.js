//----------------------------Example 1 :------------------------------    
    const map = new Map(); // an empty map
    console.log(map); 
	
	map.set('info', {name: 'Jack', age: 26}); // insert key-value pair
	console.log(map); 
	
	console.log(map.get('info'));   // access the elements of a Map
	
	console.log(map.has('info'));  // check if an element is in Set
	
	map.delete('address'); // removing a particular element
	console.log(map); // 

	map.delete('info'); // true
	console.log(map);
	


//----------------------------Example 2:----------------------------//
	// Using Map.prototype.set(k, v) creating an empty map
	var map1 = new Map();
	
	// adding some elements to the map
	map1.set("first name", "sumit");
	map1.set("last name", "ghosh");
	map1.set("website", "geeksforgeeks")
		.set("friend 1","gourav")
		.set("friend 2","sourav");
	
	console.log(map1);
		
	// Using Map.prototype.has(k) retuns true
	console.log("map1 has website ? "+ map1.has("website"));
	
	// return false
	console.log("map1 has friend ?" +map1.has("friend1"));
    // Using Map.prototype.clear() removing all values from map1
	map1.clear();
	
	// map1 is empty
	console.log(map1);