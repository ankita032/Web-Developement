let array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

array.sort(function(a,b){return a-b});
console.log(array);														
let temp = [];
let doubles = [];

let cleanTheRoom = (array) => {
	temp[0] = array[0];
	for(let i=1;i<=array.length;i++){
		if(array[i] === array[i-1])
			temp.push(array[i]);
		else{
			doubles.push(temp);
			temp = [];
			temp[0] = array[i];
		}
	}
	return doubles;
};

cleanTheRoom(array);

