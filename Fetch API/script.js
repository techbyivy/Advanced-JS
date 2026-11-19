const response= fetch("https://jsonplaceholder.typicode.com/users")
                    .then((response) =>{
                        return response.json()
                    })
                    .then((data)=>{
                        console.log(data)
                        return data;
                    })

console.log(response)
