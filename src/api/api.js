const BASEURL = "https://strangers-things.herokuapp.com/api/2207-FTB-ET-WEB-PT";


export const fetchPost = async (token) => {
    try {
        const response = await fetch(`https://strangers-things.herokuapp.com/api/2207-FTB-ET-WEB-PT/posts`, {
          headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
          }
        })
        const {data} = await response.json()
        return data.posts

    }catch(error) {
        console.error(error)
    }
}


export const registerUser = async (username, password) => {
  try {
    const response = await fetch(`https://strangers-things.herokuapp.com/api/2207-FTB-ET-WEB-PT/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username,
            password,
          },
        }),
      });
      const data = await response.json();
      console.log("Here's our data", data)
      return data;
} catch(error) {
    console.error('There was an error registering the user', error)
}
}

