import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import "../App.css";

export default function View() {
  const [user, setUser] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    newdata();
  }, []);

  const newdata = async () => {
    const response = await axios.get(`http://localhost:7000/data/${id}`);
    setUser(response.data[0]);
  };

  return (
    <div className="w-[300px] rounded-md border card">
      <img
        src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt="Laptop"
        className="h-[200px] w-full rounded-md object-cover"
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold">Item_id:-{user.id}</h1>
        <h1 className="text-lg font-semibold">Name:-{user.name}</h1>
        <h1 className="text-lg font-semibold">Email:-{user.email}</h1>
        <h1 className="text-lg font-semibold">Password:-{user.password}</h1>

        <Link
          type="button"
          to="/"
          className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
