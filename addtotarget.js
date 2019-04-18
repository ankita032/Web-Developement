let size = Number(prompt("Enter the size of array"));
let input_array = [];
let doubles = [];

for(let i =0;i<size;i++)
	input_array[i] = Number(prompt("Enter array element" + i));

let target = Number(prompt("Enter the target sum"));

let addToTarget = (input_array,target) =>{
	for(i=0;i<size;i++){
		for(j=i+1;j<size;j++){
			if(input_array[i] + input_array[j] === target){
			    doubles.push([input_array[i],input_array[j]]);
				break;
            }
            
        }
    }
    return doubles;
}
						
addToTarget(input_array,target);
