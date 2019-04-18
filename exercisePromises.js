// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
const promise = new Promise((resolve)=>{
	setTimeout(resolve,4000,"Success");
})

// #2) Run the above promise and make it console.log "success"
Promise.all([promise]).then(values => {console.log(values);})
//correct soln
promise.then(console.log)
// or
promise.then(resp => console.log(resp))


// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
const promise = Promise.resolve(
  setTimeout(() => {
    console.log("success");
  }, 4000)
);

// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed')

Soln :
const promise1 = ((reject) =>{
	throw error;
	Promise.reject('failed');
})

new Promise((resolve,reject) =>{
	promise1();
})
.catch(() => console.log("Oops! Something went wrong"))

//better soln
Promise.reject('failed')
  .catch(console.log('Ooops something went wrong'))

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'https://swapi.co/api/people/1',
  'https://swapi.co/api/people/2',
  'https://swapi.co/api/people/3',
  'https://swapi.co/api/people/4'
]

Soln :
Promise.all(urls.map(url => {
	return fetch(url).then(resp => resp.json())
})).then(results =>{
		console.log(results[0]);
		console.log(results[1]);
		console.log(results[2]);
		console.log(results[3]);
	})
.catch(() => console.log("Error!"))
// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?
