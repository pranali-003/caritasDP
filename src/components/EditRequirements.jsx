import React, { useState } from 'react';

const EditRequirements = () => {
  const [requirements, setRequirements] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentEditIndex, setCurrentEditIndex] = useState(null);
  const [newRequirement, setNewRequirement] = useState({
    type: 'Clothing',
    quantity: 0,
    note: '',
  });

  const handleRequirementChange = (e) => {
    const { name, value } = e.target;
    setNewRequirement({ ...newRequirement, [name]: value });
  };

  const handleQuantityChange = (e) => {
    setNewRequirement({ ...newRequirement, quantity: e.target.value });
  };

  const handleAddRequirement = () => {
    if (isEditing) {
      const updatedRequirements = [...requirements];
      updatedRequirements[currentEditIndex] = newRequirement;
      setRequirements(updatedRequirements);
      setIsEditing(false);
    } else {
      setRequirements([...requirements, newRequirement]);
    }
    setNewRequirement({ type: 'Clothing', quantity: 0, note: '' });
    setIsAdding(false);
  };

  const handleEditRequirement = (index) => {
    setCurrentEditIndex(index);
    setNewRequirement(requirements[index]);
    setIsEditing(true);
    setIsAdding(true);
  };

  const handleDeleteRequirement = (index) => {
    const updatedRequirements = requirements.filter((_, i) => i !== index);
    setRequirements(updatedRequirements);
  };

  const handleStartAdding = () => {
    setIsAdding(true);
    setIsEditing(false);
    setNewRequirement({ type: 'Clothing', quantity: 0, note: '' });
  };

  return (
    <div className="container mt-4">
      {requirements.length === 0 && !isAdding && (
        <div className="row mt-4">
          <div className="col text-start">
            <button className="btn btn-sm btn-primary" onClick={handleStartAdding}>
              + Add
            </button>
          </div>
        </div>
      )}

      {requirements.length > 0 || isAdding ? (
        <>
          <div className="row">
            <div className="col">
              <ul className="list-group">
                {requirements.map((req, index) => (
                  <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <span>{req.type}</span>
                    </div>
                    <div>
                      <button
                        className="btn btn-outline-secondary btn-sm me-2"
                        onClick={() => handleEditRequirement(index)}
                      >
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => handleDeleteRequirement(index)}
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {isAdding && (
            <div className="row mt-3">
              <div className="col">
                <div className="card p-3">
                  <div className="form-group mb-3">
                    <label>Requirement Type</label>
                    <select
                      className="form-control"
                      name="type"
                      value={newRequirement.type}
                      onChange={handleRequirementChange}
                    >
                      <option value="Clothing">Clothing</option>
                      <option value="Groceries">Groceries</option>
                      <option value="Stationaries">Stationaries</option>
                      <option value="Miscellaneous">Miscellaneous</option>
                    </select>
                  </div>

                  <div className="form-group mb-3">
                    <label>Quantity</label>
                    <input
                      type="range"
                      className="form-range"
                      name="quantity"
                      min="0"
                      max="100"
                      value={newRequirement.quantity}
                      onChange={handleQuantityChange}
                    />
                    <div>{newRequirement.quantity}</div>
                  </div>

                  <div className="form-group mb-3">
                    <label>Add Note</label>
                    <textarea
                      className="form-control"
                      name="note"
                      value={newRequirement.note}
                      onChange={handleRequirementChange}
                      placeholder="Type here..."
                    ></textarea>
                  </div>

                  <div className="text-start">
                    <button className="btn btn-sm btn-primary" onClick={handleAddRequirement}>
                      {isEditing ? 'Save Changes' : '+ Add'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      ) : null}
    </div>
  );
};

export default EditRequirements;
