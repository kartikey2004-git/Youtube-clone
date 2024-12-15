import axios from "axios"

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY

const BASE_URL = "https://youtube138.p.rapidapi.com"


const options = {
	headers: {
		'x-rapidapi-key': API_KEY,
		'x-rapidapi-host': 'youtube138.p.rapidapi.com'
	}
}

export const fetchData = async (url) => {
  try {
    const {data} = await axios.get(`${BASE_URL}/${url}`,options)
    return data
    // data ko store krliya hai destructure krke and then humko usko return krwa de rhe

  } catch (error) {
    console.error("error fetching api data",error)
    throw error
  }
}


// rapid api for youtube api handle krne ke liye 

// Axios helps developers make HTTP requests from NodeJS or XMLHttpRequests from a browser.

// If the request is successful, you will receive a response with the data requested. If the request fails, you will get an error. You can also intercept the requests and responses and transform or modify them

// fetchdata function ko hum use krenge dusre component mein data fetch krne ke liye

// through context api hum ye sab krenge , by creating custom hooks

// context api : we create globally to manage states and pass the data b/w components