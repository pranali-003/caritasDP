import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

const FindVolunteers = () => {
  const [volunteers, setVolunteers] = useState([
    { name: "John Doe", contact: "123-456-7890", skills: "Teaching" },
    { name: "Jane Smith", contact: "098-765-4321", skills: "Cooking" }
  ]);

  const [newVolunteer, setNewVolunteer] = useState({
    name: "",
    contact: "",
    skills: ""
  });

  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentEditIndex, setCurrentEditIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewVolunteer({ ...newVolunteer, [name]: value });
  };

  const handleAddVolunteer = () => {
    if (isEditing) {
      const updatedVolunteers = [...volunteers];
      updatedVolunteers[currentEditIndex] = newVolunteer;
      setVolunteers(updatedVolunteers);
      setIsEditing(false);
    } else {
      setVolunteers([...volunteers, newVolunteer]);
    }
    setNewVolunteer({ name: "", contact: "", skills: "" });
    setIsAdding(false);
  };

  const handleEditVolunteer = (index) => {
    setCurrentEditIndex(index);
    setNewVolunteer(volunteers[index]);
    setIsEditing(true);
    setIsAdding(true);
  };

  const handleDeleteVolunteer = (index) => {
    const updatedVolunteers = volunteers.filter((_, i) => i !== index);
    setVolunteers(updatedVolunteers);
  };

  const handleStartAdding = () => {
    setIsAdding(true);
    setIsEditing(false);
    setNewVolunteer({ name: "", contact: "", skills: "" });
  };

  return (
    <div className="modal-body overflow-auto" style={{ maxHeight: "500px" }}>
      <div className="d-flex flex-wrap justify-content-between">
        {volunteers.map((volunteer, index) => (
          <Card key={index} style={{ width: "31%", marginBottom: "1rem" }}>
            <Card.Body>
              <Card.Title>{volunteer.name}</Card.Title>
              <Card.Text>Contact: {volunteer.contact}</Card.Text>
              <Card.Text>Skills: {volunteer.skills}</Card.Text>
              <Button variant="outline-secondary" size="sm" onClick={() => handleEditVolunteer(index)} className="me-2">
                <i className="bi bi-pencil"></i>
              </Button>
              <Button variant="outline-danger" size="sm" onClick={() => handleDeleteVolunteer(index)}>
                <i className="bi bi-trash"></i>
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>

      {!isAdding && (
        <div className="text-start mt-3">
          <Button variant="primary" onClick={handleStartAdding}>
            + Add Volunteer
          </Button>
        </div>
      )}

      {isAdding && (
        <div className="border p-3 mt-3">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={newVolunteer.name}
                onChange={handleInputChange}
                placeholder="Enter name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Contact</Form.Label>
              <Form.Control
                type="text"
                name="contact"
                value={newVolunteer.contact}
                onChange={handleInputChange}
                placeholder="Enter contact info"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Skills</Form.Label>
              <Form.Control
                type="text"
                name="skills"
                value={newVolunteer.skills}
                onChange={handleInputChange}
                placeholder="Enter skills"
              />
            </Form.Group>

            <Button variant="primary" onClick={handleAddVolunteer}>
              {isEditing ? 'Save Changes' : '+ Add Volunteer'}
            </Button>
          </Form>
        </div>
      )}
    </div>
  );
};

export default FindVolunteers;
