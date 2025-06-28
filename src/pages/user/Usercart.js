import React, { useEffect, useState } from "react";
import axios from "axios";

const Usercart = () => {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8888/Cart")
      .then((res) => setCartData(res.data))
      .catch((err) => console.error("Error fetching cart:", err));
  }, []);

  return (
    <div className="container my-4">
      <h3 className="mb-4">🛒 Your Cart</h3>

      {cartData.length === 0 ? (
        <div className="alert alert-info">Your cart is empty.</div>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="table-success">
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Subtitle</th>
                <th>Duration</th>
                <th>Price</th>
                <th>Original</th>
              </tr>
            </thead>
            <tbody>
              {cartData.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img
                      src={item.imgpath}
                      alt={item.title}
                      width="100"
                      height="80"
                      className="img-thumbnail"
                    />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.subtitle}</td>
                  <td>{item.duration}</td>
                  <td className="text-success fw-bold">{item.price}</td>
                  <td>
                    <del>{item.original}</del>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Usercart;
