const response= fetch("https://jsonplaceholder.typicode.com/users")
                    .then((response) =>{
                        return response.json()
                    })
                    .then((data)=>{
                        console.log(data)
                        return data;
                    })

console.log(response)


async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) throw new Error(`Request failed: ${response.status}`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Could not load users:", error.message);
    return [];
  }
}
 getUsers();