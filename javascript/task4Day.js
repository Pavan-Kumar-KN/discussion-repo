// // Promise

// const promise = new Promise((resolve, reject) => {
//     const success = true;
//     if (success) resolve("Data loaded!");
//     else reject("Failed to load");
// }, 1000);


// promise
//     .then(result => console.log("✅", result))
//     .catch(error => console.log("❌", error));



// //   fetch and then method
// // fetch("https://jsonplaceholder.typicode.com/posts/1")
// //     .then(response => {
// //         console.log(response)
// //         // console.log(response.json())
// //         return response.json()
// //     }
// //     )            // Convert response to JSON
// //     .then(data => console.log(data))    // Success
// //     .catch(err => console.log("Error:", err)); // Failure


// async/await
async function getData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.log("Error:", err);
    }
}
getData();


// Pal Practice on Promise
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = Math.random() > 1.0;
        if (success) resolve("yay, done")
        else reject(new Error('Something went wrong'));
}, 1000);
});

p.then(
    value => console.log('Success',value), 
    err=>console.log('Error',err)
)
// p
.then(result => console.log("Correct", result))
.catch(error => console.log("Incoorect", error));

Async/Await
async function doStuff() {
  try {
    const url = await doSomething();      
    const res = await fetch(url);         
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  } finally {
    console.log('Done!');
  }
}

async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  console.log(response)
  const data = await response.json();
  console.log(data)
  return data;
  console.log(data)
}


async function loadUser(userId) {
  try {
    const res = await fetch(`/users/`);
    if (!res.ok) throw new Error(res.status);
    const user = await res.json();
    return user;
  } catch (err) {
    console.error('Failed to load user:', err);
    throw err;
  }
}

loadUser(123)
  .then(user => console.log(user))
  .catch(err => console.error('Error:', err));
