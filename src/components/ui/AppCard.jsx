import React from 'react';
import { Link } from 'react-router';

const AppCard = ({app,index}) => {
    return (
        <Link to={`/app/${app.id}`} key={index} className="card bg-base-100 w-96 shadow-sm" >
            <figure>
                <img className='h-50 w-50'
                    src={app.image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{app.title}</h2>
                <p>{app.description}</p>
                <div className="card-actions justify-between">
                    <button className="p-2 rounded-2xl cursor-pointer bg-amber-200">{app.downloads}</button>
                    <button className="p-2 rounded-full cursor-pointer bg-emerald-300">{app.ratingAvg}</button>
                </div>
            </div>
        </Link>
    );
};

export default AppCard;