import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

const ManageForum = () => {
  const [posts, setPosts] = useState([
    { title: "Post Title", description: "This is the content of the post." },
    { title: "Another Post", description: "Here's some more discussion content." }
  ]);

  const [newPost, setNewPost] = useState({
    title: "",
    description: ""
  });

  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentEditIndex, setCurrentEditIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleAddPost = () => {
    if (isEditing) {
      const updatedPosts = [...posts];
      updatedPosts[currentEditIndex] = newPost;
      setPosts(updatedPosts);
      setIsEditing(false);
    } else {
      setPosts([...posts, newPost]);
    }
    setNewPost({ title: "", description: "" });
    setIsAdding(false);
  };

  const handleEditPost = (index) => {
    setCurrentEditIndex(index);
    setNewPost(posts[index]);
    setIsEditing(true);
    setIsAdding(true);
  };

  const handleDeletePost = (index) => {
    const updatedPosts = posts.filter((_, i) => i !== index);
    setPosts(updatedPosts);
  };

  const handleStartAdding = () => {
    setIsAdding(true);
    setIsEditing(false);
    setNewPost({ title: "", description: "" });
  };

  return (
    <div className="modal-body overflow-auto" style={{ maxHeight: "500px" }}>
      <div className="d-flex flex-wrap justify-content-between">
        {posts.map((post, index) => (
          <Card key={index} style={{ width: "48%", marginBottom: "1rem" }}>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.description}</Card.Text>
              <Button variant="outline-secondary" size="sm" onClick={() => handleEditPost(index)} className="me-2">
                <i className="bi bi-pencil"></i>
              </Button>
              <Button variant="outline-danger" size="sm" onClick={() => handleDeletePost(index)}>
                <i className="bi bi-trash"></i>
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>

      {!isAdding && (
        <div className="text-start mt-3">
          <Button variant="primary" onClick={handleStartAdding}>
            + Add Post
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
                value={newPost.title}
                onChange={handleInputChange}
                placeholder="Enter post title"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={newPost.description}
                onChange={handleInputChange}
                rows={3}
                placeholder="Enter description"
              />
            </Form.Group>

            <Button variant="primary" onClick={handleAddPost}>
              {isEditing ? 'Save Changes' : '+ Add Post'}
            </Button>
          </Form>
        </div>
      )}
    </div>
  );
};

export default ManageForum;
