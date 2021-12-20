import axios from "axios";
import { useEffect, useState } from "react";

function Home() {

  const [message, setMessage] = useState("");

  useEffect(() => {
    const API_url = "http://localhost:8080/";
    const fetchMessage = async () =>{
      try{
        const response = await axios.get(API_url);
        setMessage(response.data);
      }
      catch(error){
        console.log("error", error);
      }
    };
    fetchMessage();
  }, [])

  return (
    <div className="Home">
      {message}
    </div>
  );
  }
  
  export default Home;
  