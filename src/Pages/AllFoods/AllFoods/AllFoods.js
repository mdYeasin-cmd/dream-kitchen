import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import FoodCard from '../../Shared/FoodCard/FoodCard';
import './AllFoods.css';
import { AuthContext } from '../../../contexts/AuthProvider';
import { LoaderIcon } from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';
import useTitle from '../../../hooks/useTitle';

const AllFoods = () => {

    useTitle('All Foods - Dream Kitchen');
    const { loading } = useContext(AuthContext);
    const { allFoods } = useLoaderData();

    if(loading) {
        return <Loading></Loading>
    }

    return (
        <div className="mt-4 mb-5">
            <h2 className="text-center services-title">All Foods</h2>
            <div className="container mt-5">
                <Row xs={1} md={3} className="g-4">
                    {
                        allFoods.map(food => <FoodCard
                            key={food._id}
                            food={food}
                        ></FoodCard>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default AllFoods;