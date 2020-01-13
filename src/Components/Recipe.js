import React from 'react'

export default function Recipe({title, calories, image}) {
    return (
        <div className="dark-blue-text-color w-50 rounded m-auto bg-light shadow">
            <div className="d-flex justify-content-center align-items-center flex-column m-3">
                <h3 className="mt-2">{title}</h3>
                <p>{calories.toFixed(0)} kcal</p>
                <img src={image} alt="recipe_pic" className="mb-3 rounded-circle shadow"></img>
            </div>
        </div>
    )
}
