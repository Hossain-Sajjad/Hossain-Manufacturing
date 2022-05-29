import React, { useEffect, useState } from 'react';
import Tool from './Tool/Tool';

const Tools = () => {
    const [tools, setTools] = useState('');
    useEffect(() => {
        fetch("http://localhost:5000/tool")
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])

    return (
        <div>
            <h2 className='text-primary text-3xl text-center my-10 font-semibold'>Our Products:</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                {

                    tools && tools?.map(tool =>
                        <Tool
                            key={tool._id}
                            tool={tool}
                        ></Tool>
                    )

                }
            </div>
        </div>
    );
};

export default Tools;