arr=[1,2,3,4,5]

function copy(list){

	let copiArr=[...list];
	let arrFuncResult=[];
	let=myFunc=false;
	for(let i=0;i<arguments.length;i++)

		if(typeof arguments[i]==='function'){
			myFunc=arguments[i];
		}

		if(myFunc){
			for(let i=0;i<list.length;i++){
				arrFuncResult.push(myFunc(list[i])) ;
			}
		} else {
			return  copiArr
		}
		return arrFuncResult
}

let newArr=copy(arr, function(value){ return value*10; })
console.log('newArr: ', newArr);
