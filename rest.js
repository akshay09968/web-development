//------------Example 3:---------------//
// Here the first two arguments go into variables and the rest go into titles array
function showName(firstName, lastName, ...titles) {
    const t = (firstName + ' ' + lastName ); 
    console.log(t); 
  
    // the rest go into titles array
    // i.e. titles = ["Consul", "Imperator"]
    const x = titles[0] ; 
    console.log(x);
    const y = titles[1] ; 
    console.log(y);
    const b = titles[2] ; 
    console.log(b);
    const z = titles.length; 
    console.log(z);
  }
  
  showName("Julius", "Caesar", "Consul", "Imperator","ABC");