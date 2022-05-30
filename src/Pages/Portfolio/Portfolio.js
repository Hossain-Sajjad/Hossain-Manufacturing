import React from 'react';

const Portfolio = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col justify-evenly lg:flex-row">
                    <img className='lg:w-5/12 rounded-xl' src="https://scontent.fcgp27-1.fna.fbcdn.net/v/t1.6435-9/53868147_1116038761901913_3493118200579620864_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_eui2=AeG4nrot4Tvv5BXLlgyPX0Tj73y7pLc2RJnvfLuktzZEmZHFt5H7pmiOQ3ekW_GxwZyQM5N3cWwuEwPBMGIau5Bx&_nc_ohc=18XIhQrm-0MAX97TY3B&_nc_ht=scontent.fcgp27-1.fna&oh=00_AT9LzdrijeBZlujtmmnkGUz5QLHn_FwZ7bBrSvYWyHHDkg&oe=62BA967E" alt='' />
                    <div>
                        <h1 class="text-5xl font-bold text-primary">Hossain Sajjad</h1>
                        <p class="pt-3">sunshinems58@gmail.com</p>
                        <p class="pt-3">Bsc in CSE (4<sup>th</sup> year), International Islamic University Chittagong</p>
                        <p class="pt-3"><strong>Skills: </strong>html5, css3, bootstrap, tailwind, media query, javascript, react, node.js, mongodb</p>
                        <h3 className='text-2xl font-bold mt-4'>Some of my works</h3>
                        <ul>
                            <li><a class="link link-hover link-primary" target='_blank' rel='noreferrer' href='https://hossain-electronics.web.app/'>Hossain Electronics</a></li>
                            <li><a class="link link-hover link-primary" target='_blank' rel='noreferrer' href='https://incandescent-brigadeiros-cffa93.netlify.app/'>Fitness Friend</a></li>
                            <li><a class="link link-hover link-primary" target='_blank' rel='noreferrer' href='https://hossain-manufacturing.web.app/'>Hossain Manufacturing</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;