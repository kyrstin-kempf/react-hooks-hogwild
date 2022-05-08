import React from "react";

function Filter({ isGreased,handleGreasedFilter, sortNameWeight, handleSort }) {
    return (
        <div>
            <label>
                Greased Hogs 
            <input 
            type="checkbox" 
            checked={isGreased} 
            onChange={() => handleGreasedFilter()}
            />
            </label>
            <select value={sortNameWeight} onChange={(e) => handleSort(e.target.value)}>
                <option value="name" >Sort By Name</option>
                <option value="weight">Sort By Weight</option>
            </select>
        </div>
    )
}

export default Filter;