const BASEURL = "https://strangers-things.herokuapp.com/api/2207-FTB-ET-WEB-PT";

export const fetchPosts = async () => {
  try{
    const response = await fetch(`"https://strangers-things.herokuapp.com/api/2207-FTB-ET-WEB-PT/posts"`);
    console.log("fetchPosts is working!", result);
    const { data } = await result.json(); 
    console.log("THIS IS DATA", data.posts);
    return data.posts;
  } catch(error){
    //console.error("There was an error fetching posts", error)
  }
};


// export const registerUser = async (username, password) => {
//     try {
//       const response = await fetch(`'${BASEURL}/users/register'`, {
//           method: "POST",
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             user: {
//               username: username,
//               password: password
//               //username, 
//               //password //alt code
//             }
//           })
//         })
//         return  response.json()
//   } catch(error) {
//       console.error("There's an error with the registerUser", error)
//   }
//   }


// export const registerUser = async (username, password) => {
//   try{
//       const response = await fetch(`${BASEURL}/users/register`, {
//           method: "POST",
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             user: {
//               username,
//               password,
//             }
//           })
//       });
//       const data = await response.json()
//       return data
//   } catch(error){
//       console.error('error registering user', error)
//   }
// };


export const registerUser = async (username, password) => {
  try {
    const response = await fetch('https://strangers-things.herokuapp.com/api/2207-FTB-ET-WEB-PT/users/register', {
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
    console.error(error)
}
}




  registerUser();