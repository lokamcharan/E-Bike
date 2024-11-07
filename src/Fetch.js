import React, { useEffect, useState } from "react";
import "./SparePartsList.css";
import { Data } from "./Data";

function SparePartsList() {
  const [spareParts, setSpareParts] = useState([]);

  useEffect(() => {
    setSpareParts(Data);
  }, []);

  return (
    <div>
      <h2>Bike Spare Parts</h2>
      <div className="spare-parts-grid">
        {spareParts.map((part) => (
          <div key={part.id} className="spare-part-card">
            <img
              src={part.image_url}
              alt={part.name} style={{width:"150px" ,height:"125px"}}
              className="spare-part-image"
            />
            <h3>{part.name}</h3>
            <p>{part.description}</p>
            <p>
              <strong>Price:</strong> ₹{part.price}
            </p>
            <p>
              <strong>Stock:</strong> {part.stock}
            </p>
            <button
              style={{
                color: "black",
                backgroundColor: "lightblue",
                border: "none",
                borderRadius: "5px",
              }}
            >
              Buy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SparePartsList;
