const BASEURL = "https://strangers-things.herokuapp.com/api/2207-FTB-ET-WEB-PT";



export const fetchPosts = async (token) => {
  console.log("working", post);
  try {
      const response = await fetch(`${BASEURL}/posts`, {
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
        }
      })
      console.log("Still working")
      const {data} = await response.json()
      return data.posts
      
  }catch(error) {
      console.error("end of function",error)
  }
}




export const registerUser = async (username, password) => {
  try {
    const respose = await fetch('https://strangers-things.herokuapp.com/api/2207-FTB-ET-WEB-PT/users/register', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password
          }
        })
      })
      return  response.json()
} catch(error) {
    console.error("There was an error fetching vacations", error)
}
}

