// http://js.do/


//simple function

function sum(a,b){
	console.log(ab);
};
sum(1,2); //3
//a clearer way to write same function
var sum = function(a,b){
	return a + b;	
};

//HOF- High Order Function (returns or receive a function)

function makeSummator(base){ 
	return function(num){
		return base + num; // returns a function => is a HOF
	}
}

var sum2 = makeSummator(2);
sum2(3); //5
sum2(7); //9

//another "famous" HOF 
var el = document.getElementById("btn");

el.addEventListener("click", function (event){
	alert("hello HOF");
}); // addEventListener receives a function as a parameter so this makes it a HOF


//Loops
while(n--){
	// ...
}

for(var i  =0; i<n; ++i){
	//
}
//common usage of loops 
// iterating through a colection 
var arr = ["c#","java","c++"];
for(var i =0; l< arr.length; i<l; ++i){
	console.log(arr[i]);
}

// extracting data from a colection
var peeps = [{name:"Charlie",surname:"Sheen"},{name:"Hugh",surname:"Hefner"},{name:"Jon",surname:"Doe"}];
var names = [];
for (var i =0, l= peeps.length; i< l; ++i) {
	names.push(peeps[i].name);
}
alert(names.length);

//data agregation 

var html = "";
for(var i =0, l= peeps.length; i< l; ++i){
	html += '<li>' + peeps[i].name + '</li>';
}

this.list.innerHTML = html;

//alternatives for loops

for (var i =1; l = arr.length; i< l; ++i){
	console.log(arr[i]);
}

//use forEach(HOF)

arr.forEach(function(item){
	console.log(item);
});
//Difference is that we focus on performing actions on item rather iterating through colection(in second example we do some operation on each element in colection)


//Map function applies a function to each element(doesn't alter the original list, can return values)

var peeps = [{name:"Charlie",surname:"Sheen"},{name:"Hugh",surname:"Hefner"},{name:"Jon",surname:"Doe"}];
var names = peeps.map(function (tweep){
	return peeps.name;
});
alert(names.length);
