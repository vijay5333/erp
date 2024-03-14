import React, { useState } from "react";
import Calendar from "react-calendar";

const ProductsManagement = () => {
  // Mock data for products
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      category: "Category 1",
      price: 10.99,
      stockQuantity: 50,
    },
    {
      id: 2,
      name: "Product 2",
      category: "Category 2",
      price: 20.99,
      stockQuantity: 30,
    },
    {
      id: 3,
      name: "Product 3",
      category: "Category 2",
      price: 15.99,
      stockQuantity: 20,
    },
    {
      id: 4,
      name: "Product 4",
      category: "Category 1",
      price: 15.99,
      stockQuantity: 50,
    },
    {
      id: 5,
      name: "Product 5",
      category: "Category 2",
      price: 15.99,
      stockQuantity: 40,
    },
  ]);

  // calander
  const [orders, setOrders] = useState([
    {
      id: 1,
      customerId: 1,
      orderDate: new Date(),
      deliveryDate: new Date(new Date().setDate(new Date().getDate() + 2)),
      status: "Pending",
    },
    {
      id: 2,
      customerId: 2,
      orderDate: new Date(),
      deliveryDate: new Date(new Date().setDate(new Date().getDate() + 3)),
      status: "Pending",
    },
    {
      id: 3,
      customerId: 3,
      orderDate: new Date(),
      deliveryDate: new Date(new Date().setDate(new Date().getDate() + 5)),
      status: "Pending",
    },
    {
      id: 4,
      customerId: 3,
      orderDate: new Date(),
      deliveryDate: new Date(new Date().setDate(new Date().getDate() + 6)),
      status: "Pending",
    },
    {
      id: 5,
      customerId: 3,
      orderDate: new Date(),
      deliveryDate: new Date(new Date().setDate(new Date().getDate() + 8)),
      status: "Pending",
    },
  ]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Function to handle date selection
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // Filter orders for the selected date
  const filteredOrders = orders.filter((order) => {
    const orderDate = new Date(order.deliveryDate);
    return orderDate.toDateString() === selectedDate.toDateString();
  });

  console.log(filteredOrders);

  // Form state for adding/editing products
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    category: "",
    price: "",
    stockQuantity: "",
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to add/edit a product
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.id) {
      // Add new product
      const newProduct = {
        ...formData,
        id: products.length + 1, // Generate new ID
      };
      setProducts([...products, newProduct]);
    } else {
      // Edit existing product
      const updatedProducts = products.map((product) => {
        if (product.id === formData.id) {
          return { ...product, ...formData };
        }
        return product;
      });
      setProducts(updatedProducts);
    }
    // Reset form data
    setFormData({
      id: "",
      name: "",
      category: "",
      price: "",
      stockQuantity: "",
    });
  };

  // Function to delete a product
  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  // Function to set form data for editing a product
  const editProduct = (product) => {
    setFormData(product);
  };

  return (
    <main className="main-container">
      <div>
        <h2>Total products - {products.length}</h2>
      </div>
      <h2>Product Management</h2>
      <div className="row g-3 ">
        <h5>Add/Edit Product</h5>
        <form onSubmit={handleFormSubmit}>
          <input
            className="col-sm-3 backgrounf-form"
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            className="col-sm-3 backgrounf-form"
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleInputChange}
          />
          <input
            className="col-sm-3 backgrounf-form"
            type="text"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleInputChange}
          />
          <input
            className="col-sm-3 backgrounf-form"
            type="text"
            name="stockQuantity"
            placeholder="Stock Quantity"
            value={formData.stockQuantity}
            onChange={handleInputChange}
          />
          <button className="p-2 m-2 btn btn-outline-primary" type="submit">
            {formData.id ? "Update Product" : "Add Product"}
          </button>
        </form>
      </div>
      <table className="table table-success table-striped border-primary border">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>${product.price}</td>
              <td>{product.stockQuantity}</td>
              <td>
                <button
                  className="btn btn-outline-danger btn-space"
                  onClick={() => deleteProduct(product.id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => editProduct(product)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="table table-success table-striped border-primary">
        <Calendar onChange={handleDateChange} value={selectedDate} />
      </div>
      {/* Display orders for the selected date */}
      <div className="orders-container">
        <h3>Orders for {selectedDate.toDateString()}</h3>
        <ul>
          {filteredOrders.map((order) => (
            <li key={order.id}>
              Order ID: {order.id}, Delivery Date:{" "}
              {order.deliveryDate.toDateString()}, Status: {order.status}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default ProductsManagement;
