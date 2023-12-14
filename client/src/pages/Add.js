import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../JS/actions/user';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Add = () => {
  const [newUser, setNewUser] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const add = () => {
    dispatch(addUser(newUser));
  };

  return (
    <div>
      <Form.Label>Name</Form.Label>
      <Form.Control
        type="text"
        placeholder="enter name"
        name="name"
        value={newUser.name || ''}
        onChange={handleChange}
      />
      <Form.Label>email</Form.Label>
      <Form.Control
        type="text"
        placeholder="enter email"
        name="email"
        value={newUser.email || ''}
        onChange={handleChange}
      />
      <Form.Label>password</Form.Label>
      <Form.Control
        type="text"
        placeholder="enter password"
        name="password"
        value={newUser.password || ''}
        onChange={handleChange}
      />
      <Form.Label>phone number</Form.Label>
      <Form.Control
        type="number"
        placeholder="enter phone number"
        name="phoneNumber"
        value={newUser.phoneNumber || ''}
        onChange={handleChange}
      />
      <Link to="/return">
        <Button variant="primary" type="submit" onClick={() => add()}>
          Add
        </Button>
      </Link>
    </div>
  );
};

export default Add;
