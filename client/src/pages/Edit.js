import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useMatch, useNavigate } from 'react-router-dom';
import { editUser, getUser } from '../JS/actions/user';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Edit = () => {
    const [newUser, setNewUser] = useState({});
    const dispatch = useDispatch();
    const match = useMatch("/edit/:id");
    const navigate = useNavigate();
    const userToGet = useSelector(
        (state) => state.userReducer.userToGet
    );
    const handleChange = (e) =>{
        setNewUser({...newUser, [e.target.name]: e.target.value});
    };
    useEffect(()=> {
        dispatch(getUser(match.params.id));
    });
    const handleEdit =()=>{
        dispatch(editUser(match.params.id, newUser));
        navigate(-1);
    }
  return (
    <div>
        <Form.Label>Name</Form.Label>
      <Form.Control
        type="text"
        placeholder={`${userToGet.name}`}
        name="name"
        value={newUser.name}
        onChange={handleChange}
      />
      <Form.Label>email</Form.Label>
      <Form.Control
        type="text"
        placeholder={`${userToGet.email}`}
        name="email"
        value={newUser.email}
        onChange={handleChange}
      />
      <Form.Label>password</Form.Label>
      <Form.Control
        type="text"
        placeholder={`${userToGet.password}`}
        name="password"
        value={newUser.password}
        onChange={handleChange}
      />
      <Form.Label>phone number</Form.Label>
      <Form.Control
        type="number"
        placeholder={`${userToGet.phoneNumber}`}
        name="phoneNumber"
        value={newUser.phoneNumber}
        onChange={handleChange}
      />
      <Button variant="primary" type="submit" onClick={handleEdit}>
        Edit
      </Button>
    </div>
  )
}

export default Edit