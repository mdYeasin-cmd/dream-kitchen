import React from 'react';
import BlogImg1 from './../../../assets/Blog/blog-img-1.jpg';
import BlogImg2 from './../../../assets/Blog/blog-img-2.jpg';
import { FaRegCalendarAlt, FaThumbsUp } from 'react-icons/fa';
import { BsFillChatFill } from 'react-icons/bs';
import './FoodBlog.css';
import ReusableButton from '../../Shared/ReusableButton/ReusableButton';

const FoodBlog = () => {
    return (
        <div className="food-blog">
            <h2 className="section-title text-center">Food Blog</h2>
            <p className="section-lede text-center mb-5">
                Here you can see all my interesting food blog. Where I Write about food nutrition and hygiene etc. And also talk about food test.
            </p>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 gx-4 gy-4">
                    <div className="col">
                        <div className="blog-card shadow p-3 pb-4 rounded">
                            <img className="w-100 rounded blog-img" src={BlogImg1} alt="" />
                            <h3 className="fs-5 mt-4 ">COP27: BE PART OF IT WITH THESE SIX CLIMATE-FRIENDLY RECIPES</h3>
                            <div className="row mt-2">
                                <div className="col">
                                    <p className="blog-info d-flex align-items-center text-muted">
                                        <FaRegCalendarAlt /> <span className="ms-1">November 08, 2022</span>
                                    </p>
                                </div>
                                <div className="col">
                                    <p className="blog-info d-flex align-items-center text-muted">
                                        <FaThumbsUp /> <span className="ms-1">2.5M</span>
                                    </p>
                                </div>
                                <div className="col">
                                    <p className="blog-info d-flex align-items-center text-muted">
                                        <BsFillChatFill /> <span className="ms-1">1.5M</span>
                                    </p>
                                </div>
                            </div>
                            <p>
                                Food4Climate is run by a coalition of 20 organisations committed to putting food on the agenda at COP27. The Pavilion will host meetings and side events in order to make global leaders aware of the urgent need for a just and inclusive food-systems transformation.
                            </p>
                            <div className="text-center">
                                <ReusableButton className="btn btn-primary fw-semibold">
                                    Read More
                                </ReusableButton>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="blog-card shadow p-3 pb-4 rounded">
                            <img className="w-100 rounded blog-img" src={BlogImg2} alt="" />
                            <h3 className="fs-5 mt-4 ">Everybody’s Favorite Corn Casserole With Salad is Now here</h3>
                            <div className="row mt-2">
                                <div className="col">
                                    <p className="blog-info d-flex align-items-center text-muted">
                                        <FaRegCalendarAlt /> <span className="ms-1">November 09, 2022</span>
                                    </p>
                                </div>
                                <div className="col">
                                    <p className="blog-info d-flex align-items-center text-muted">
                                        <FaThumbsUp /> <span className="ms-1">2.2M</span>
                                    </p>
                                </div>
                                <div className="col">
                                    <p className="blog-info d-flex align-items-center text-muted">
                                        <BsFillChatFill /> <span className="ms-1">1.2M</span>
                                    </p>
                                </div>
                            </div>
                            <p>
                                Clear a spot on the Thanksgiving table this year for this deliciously savory, unstoppably scoopable corn casserole with its hint of sweet, its confetti of bacon, and pulls of sharp cheddar cheese. There is a new side dish in town and it is not messing around.
                            </p>
                            <div className="text-center">
                                <ReusableButton className="btn btn-primary fw-semibold">
                                    Read More
                                </ReusableButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodBlog;
