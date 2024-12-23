import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

const Photos = () => {
  const [photos, setPhotos] = useState([
    { title: "Title", date: "DD/MM/YYYY", image: "" },
    { title: "Title", date: "DD/MM/YYYY", image: "" }
  ]);

  const [newPhoto, setNewPhoto] = useState({
    title: "",
    date: "",
    image: ""
  });

  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentEditIndex, setCurrentEditIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPhoto({ ...newPhoto, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setNewPhoto({ ...newPhoto, image: imageUrl });
    }
  };

  const handleAddPhoto = () => {
    if (isEditing) {
      const updatedPhotos = [...photos];
      updatedPhotos[currentEditIndex] = newPhoto;
      setPhotos(updatedPhotos);
      setIsEditing(false);
    } else {
      setPhotos([...photos, newPhoto]);
    }
    setNewPhoto({ title: "", date: "", image: "" });
    setIsAdding(false);
  };

  const handleEditPhoto = (index) => {
    setCurrentEditIndex(index);
    setNewPhoto(photos[index]);
    setIsEditing(true);
    setIsAdding(true);
  };

  const handleDeletePhoto = (index) => {
    const updatedPhotos = photos.filter((_, i) => i !== index);
    setPhotos(updatedPhotos);
  };

  const handleStartAdding = () => {
    setIsAdding(true);
    setIsEditing(false);
    setNewPhoto({ title: "", date: "", image: "" });
  };

  return (
    <div className="modal-body overflow-auto" style={{ maxHeight: "500px" }}>
      <div className="d-flex flex-wrap justify-content-between">
        {photos.map((photo, index) => (
          <Card key={index} style={{ width: "31%", marginBottom: "1rem" }}>
            <Card.Img variant="top" src={photo.image || "https://via.placeholder.com/100"} />
            <Card.Body>
              <Card.Title>{photo.title}</Card.Title>
              <Card.Text>{photo.date}</Card.Text>
              <Button variant="outline-secondary" size="sm" onClick={() => handleEditPhoto(index)} className="me-2">
                <i className="bi bi-pencil"></i>
              </Button>
              <Button variant="outline-danger" size="sm" onClick={() => handleDeletePhoto(index)}>
                <i className="bi bi-trash"></i>
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>

      {!isAdding && (
        <div className="text-start mt-3">
          <Button variant="primary" onClick={handleStartAdding}>
            + Add Photo
          </Button>
        </div>
      )}

      {isAdding && (
        <div className="border p-3 mt-3">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={newPhoto.title}
                onChange={handleInputChange}
                placeholder="Enter title"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="text"
                name="date"
                value={newPhoto.date}
                onChange={handleInputChange}
                placeholder="DD/MM/YYYY"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" onChange={handleImageUpload} />
            </Form.Group>

            <Button variant="primary" onClick={handleAddPhoto}>
              {isEditing ? 'Save Changes' : '+ Add Photo'}
            </Button>
          </Form>
        </div>
      )}
    </div>
  );
};

export default Photos;
