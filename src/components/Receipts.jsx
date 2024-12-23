import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

const Receipts = () => {
  const [receipts, setReceipts] = useState([
    { date: "DD/MM/YYYY", amount: "$0.00", image: "" },
    { date: "DD/MM/YYYY", amount: "$0.00", image: "" }
  ]);

  const [newReceipt, setNewReceipt] = useState({
    date: "",
    amount: "",
    image: ""
  });

  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentEditIndex, setCurrentEditIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReceipt({ ...newReceipt, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setNewReceipt({ ...newReceipt, image: imageUrl });
    }
  };

  const handleAddReceipt = () => {
    if (isEditing) {
      const updatedReceipts = [...receipts];
      updatedReceipts[currentEditIndex] = newReceipt;
      setReceipts(updatedReceipts);
      setIsEditing(false);
    } else {
      setReceipts([...receipts, newReceipt]);
    }
    setNewReceipt({ date: "", amount: "", image: "" });
    setIsAdding(false);
  };

  const handleEditReceipt = (index) => {
    setCurrentEditIndex(index);
    setNewReceipt(receipts[index]);
    setIsEditing(true);
    setIsAdding(true);
  };

  const handleDeleteReceipt = (index) => {
    const updatedReceipts = receipts.filter((_, i) => i !== index);
    setReceipts(updatedReceipts);
  };

  const handleStartAdding = () => {
    setIsAdding(true);
    setIsEditing(false);
    setNewReceipt({ date: "", amount: "", image: "" });
  };

  return (
    <div className="modal-body overflow-auto" style={{ maxHeight: "500px" }}>
      <div className="d-flex flex-wrap justify-content-between">
        {receipts.map((receipt, index) => (
          <Card key={index} style={{ width: "31%", marginBottom: "1rem" }}>
            <Card.Img variant="top" src={receipt.image || "https://via.placeholder.com/100"} />
            <Card.Body>
              <Card.Text>Date: {receipt.date}</Card.Text>
              <Card.Text>Amount: {receipt.amount}</Card.Text>
              <Button variant="outline-secondary" size="sm" onClick={() => handleEditReceipt(index)} className="me-2">
                <i className="bi bi-pencil"></i>
              </Button>
              <Button variant="outline-danger" size="sm" onClick={() => handleDeleteReceipt(index)}>
                <i className="bi bi-trash"></i>
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>

      {!isAdding && (
        <div className="text-start mt-3">
          <Button variant="primary" onClick={handleStartAdding}>
            + Add Receipt
          </Button>
        </div>
      )}

      {isAdding && (
        <div className="border p-3 mt-3">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="text"
                name="date"
                value={newReceipt.date}
                onChange={handleInputChange}
                placeholder="DD/MM/YYYY"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="text"
                name="amount"
                value={newReceipt.amount}
                onChange={handleInputChange}
                placeholder="Enter amount"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" onChange={handleImageUpload} />
            </Form.Group>

            <Button variant="primary" onClick={handleAddReceipt}>
              {isEditing ? 'Save Changes' : '+ Add Receipt'}
            </Button>
          </Form>
        </div>
      )}
    </div>
  );
};

export default Receipts;
