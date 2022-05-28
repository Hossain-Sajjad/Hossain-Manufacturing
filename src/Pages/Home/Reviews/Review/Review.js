import React from 'react';

const Review = () => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, voluptates quo incidunt harum minus mollitia!</p>
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkpclgdZQ3ZHBh6xTt4wlROP30NE_GY7MdVw&usqp=CAU" alt="" />
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl'>superman</h4>
                        <p>ratings</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;