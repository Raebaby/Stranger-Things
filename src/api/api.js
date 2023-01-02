const BASEURL = "https://strangers-things.herokuapp.com/api/2207-FTB-ET-WEB-PT";


export const makeHeaders = (token) => {
  const headers = {
    "Content-Type": "application/json",
  };
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  return headers;
  };


  export const callAPI = async (endPointPath, defaultOptions = {}) => {
    const { token, method, body } = defaultOptions;
    const options = {
      headers: makeHeaders(token),
    };
    if (method) {
      options.method = method;
    }
    if (body) {
      options.body = JSON.stringify(body);
    }
    const response = await fetch(`${BASEURL}${endPointPath}`, options);
    const result = await response.json();
    return result;
  };



export const fetchPost = async (token) => {
  try {
      const { success, error, data } = await callAPI("/posts", {
        token: token,
      });
      if (success) {
        return {
          error: null,
          posts: data.posts,
        };
      } else {
        return {
          error: error.message,
          posts: [],
        };
      }
    } catch (error) {
      console.error("There was an error fetching posts", error);
      return {
        error: "Could Not Load Posts",
        posts: [],
      };
    }
  };



export const registerUser = async (username, password) => {
  try {
    const { success, error, data } = await callAPI("/users/register", {
      method: "POST",
      body: {
        user: {
          username,
          password,
        },
      },
    });
    if (success) {
      return {
        error: null,
        token: data.token,
        message: data.message,
      };
    } else {
      return {
        error: error.message,
        token: null,
        message: null,
      };
    }
  } catch (error) {
    console.error("There was  an error registering the user", error);

    return {
      error: "Error Registering User",
      token: null,
      message: null,
    };
  }
  };


export const loginUser = async (username, password) => {
  try {
    const { success, error, data } = await callAPI("/users/login", {
      method: "POST",
      body: {
        user: {
          username,
          password,
        },
      },
    });
    if (success) {
      return {
        error: null,
        token: data.token,
        message: data.message,
      };
    } else {
      return {
        error: error.message,
        token: null,
        message: null,
      };
    }
  } catch (error) {
    console.error("There was  an error logging in the user", error);

    return {
      error: "Error Logging In",
      token: null,
      message: null,
    };
  }
  };



export const fetchGuest = async(token) => {
  try {
    const { success, data, error } = await callAPI("/users/me", {
      token: token,
    });
    if (success) {
      return {
        error: null,
        username: data.username,
      };
    } else {
      return {
        error: error.message,
        username: null,
      };
    }
  } catch (error) {
    return {
      error: "Could Not Pull User Information",
      username: null,
    };
  }
  };


export const createPost = async ( token, title, description, price, willDeliver ) => {
  try {
    const post = {
      title,
      description,
      price,
      willDeliver,
    };
    const { success, error, data } = await callAPI("/posts", {
      token: token,
      method: "POST",
      body: {
        post: post,
      },
    });
    if (success) {
      return {
        error: null,
        post: data.post,
      };
    } else {
      return {
        error: error.message,
        post: null,
      };
    }
  } catch (error) {
    console.error("POST /posts failed: ", error);

    return {
      error: "Failed to create Post",
      post: null,
    };
  }
};



export const deletePost = async ( token, postId ) => {
  try {
    const { success, error } = await callAPI(`/posts/${postId}`, {
      method: "DELETE",
      token: token,
    });
    if (success) {
      return {
        error: null,
        data: null,
      };
    } else {
      return {
        error: error.message,
        data: null,
      };
    }
  } catch (error) {
    console.error("DELETE /posts/postId failed", error);
    return {
      error: "Failed to delete Post",
      data: null,
    };
  }
};