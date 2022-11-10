import React from 'react';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import useTitle from '../../../hooks/useTitle';

const AddNewFood = () => {

    useTitle('Add Service - Dream Kitchen')

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.foodName.value;
        const photoUrl = form.foodPhotoURL.value;
        const deliveryTime = form.foodDeliveryTime.value;
        const price = form.foodPrice.value;
        const description = form.foodDescription.value;
        // console.log(name, photoUrl, deliveryTime, price, description);

        const newFoodItem = {
            foodName: name,
            photoUrl,
            deliveryTime,
            price,
            description
        }

        console.log(newFoodItem);

        fetch('http://localhost:5000/addNewFood', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFoodItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('A new food is successfully added');
                }
            })
            .catch(error => console.error(error));

    }

    return (
        <div className="container">
            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3">
                    <Form.Label>Food Name</Form.Label>
                    <Form.Control type="text" placeholder="Food Name" name="foodName" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Food Photo URL</Form.Label>
                    <Form.Control type="text" placeholder="Food Photo URL" name="foodPhotoURL" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Food Delivery Time</Form.Label>
                    <Form.Control type="text" placeholder="Food Delivery Time" name="foodDeliveryTime" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Food Price</Form.Label>
                    <Form.Control type="text" placeholder="Food Price" name="foodPrice" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Food Description</Form.Label>
                    <Form.Control as="textarea" rows={6} placeholder="Food Description" name="foodDescription" />
                </Form.Group>

                <Form.Group className="mb-3 d-flex justify-content-center">
                    <Form.Control className="btn btn-primary w-25" type="submit" value="Add Food" />
                </Form.Group>

            </Form>
        </div>
    );
};

export default AddNewFood;