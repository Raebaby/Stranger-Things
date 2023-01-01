const BASEURL = "https://strangers-things.herokuapp.com/api/2207-FTB-ET-WEB-PT";



export const fetchPost = async (token) => {
    try {
        const response = await fetch(`https://strangers-things.herokuapp.com/api/2207-FTB-ET-WEB-PT/posts`, {
          headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
          }
        })
        //console.log("This is data:", response);
        const {data} = await response.json();
        return data.posts
        
    }catch(error) {
        console.error('There was an error fetching posts',error)
    }
}



export const registerUser = async (username, password) => {
  try {
    const response = await fetch(`https://strangers-things.herokuapp.com/api/2207-FTB-ET-WEB-PT/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password
          },
        }),
      });
      //console.log("This is the response:",response);
      const data = await response.json();
      //console.log('<----DATA---->', data)
      return data;
} catch(error) {
    console.error('There was an error registering the user', error)
}
}


export const loginUser = async (username, password) => {
  try {
      const response = await fetch(`https://strangers-things.herokuapp.com/api/2207-FTB-ET-WEB-PT/users/login`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
            user: {
              username: username, 
              password: password
          }
        })
      });
      //console.log("User response data", response)
      const data = await response.json();
      //console.log("User data", data);
      return data;
  } catch (error) {
      console.error("An error occured while attempting to login", error);
  }
}



export const fetchGuest = async(token) => {
  try {
    const response = await fetch(`${BASEURL}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    })
    //console.log("User response data", response)
    const { data } = await response.json();
    //console.log("User data", data);
    return data;
  }catch(error){
    console.error("There was an error fetcgin the guest", error)
  }
}


export const createPost = async(title, description, price, willDeliver, token) => {
  try {
    const response = await fetch('https://strangers-things.herokuapp.com/api/2207-FTB-ET-WEB-PT/posts', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        post: {
          title: title,
          description: description,
          price: price,
          willDeliver: willDeliver
          }
        })
      })
      return  response.json()
} catch(error) {
    console.error("There was an error creating this post", error)
}}


//export const createPosts = async(token)