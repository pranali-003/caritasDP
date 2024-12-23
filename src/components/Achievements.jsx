import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

const Achievements = () => {
  const [achievements, setAchievements] = useState([
    { title: "Achievement Name", description: "Body text for the achievement.", image: "" },
    { title: "Achievement Name", description: "Body text for the achievement.", image: "" }
  ]);

  const [newAchievement, setNewAchievement] = useState({
    title: "",
    description: "",
    image: ""
  });

  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentEditIndex, setCurrentEditIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAchievement({ ...newAchievement, [name]: value });
  };

  const handleAddAchievement = () => {
    if (isEditing) {
      const updatedAchievements = [...achievements];
      updatedAchievements[currentEditIndex] = newAchievement;
      setAchievements(updatedAchievements);
      setIsEditing(false);
    } else {
      setAchievements([...achievements, newAchievement]);
    }
    setNewAchievement({ title: "", description: "", image: "" });
    setIsAdding(false);
  };

  const handleEditAchievement = (index) => {
    setCurrentEditIndex(index);
    setNewAchievement(achievements[index]);
    setIsEditing(true);
    setIsAdding(true);
  };

  const handleDeleteAchievement = (index) => {
    const updatedAchievements = achievements.filter((_, i) => i !== index);
    setAchievements(updatedAchievements);
  };

  const handleStartAdding = () => {
    setIsAdding(true);
    setIsEditing(false);
    setNewAchievement({ title: "", description: "", image: "" });
  };

  return (
    <div className="modal-body overflow-auto" style={{ maxHeight: "500px" }}>
      <div className="d-flex flex-wrap justify-content-between">
        {achievements.map((achievement, index) => (
          <Card key={index} style={{ width: "48%", marginBottom: "1rem" }}>
            <Card.Img variant="top" src={achievement.image || "https://via.placeholder.com/100"} />
            <Card.Body>
              <Card.Title>{achievement.title}</Card.Title>
              <Card.Text>{achievement.description}</Card.Text>
              <Button variant="outline-secondary" size="sm" onClick={() => handleEditAchievement(index)} className="me-2">
                <i className="bi bi-pencil"></i>
              </Button>
              <Button variant="outline-danger" size="sm" onClick={() => handleDeleteAchievement(index)}>
                <i className="bi bi-trash"></i>
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>

      {!isAdding && (
        <div className="text-start mt-3">
          <Button variant="primary" onClick={handleStartAdding}>
            + Add Achievement
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
                value={newAchievement.title}
                onChange={handleInputChange}
                placeholder="Type here..."
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={newAchievement.description}
                onChange={handleInputChange}
                rows={3}
                placeholder="Type here..."
              />
            </Form.Group>

            <Button variant="primary" onClick={handleAddAchievement}>
              {isEditing ? 'Save Changes' : '+ Add Achievement'}
            </Button>
          </Form>
        </div>
      )}
    </div>
  );
};

export default Achievements;
