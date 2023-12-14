//ContactCard.js
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteUser } from '../JS/actions/user';


const UserCard = ({user}) => {
    const dispatch = useDispatch();
    const navigate =useNavigate();
  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>{user.email}</Card.Text>
        <Card.Text>{user.phoneNumber}</Card.Text>
        <Button variant="primary" onClick={() => navigate(`/edit/${user._id}`)}>Edit</Button>
        <Button variant="primary" onClick={() => dispatch(deleteUser(user._id))}>Delete</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default UserCard
