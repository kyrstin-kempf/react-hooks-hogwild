import React, { useState } from "react";
import Tile from "./Tile";
import Filter from "./Filter";

function TileList({ hogs }) {
    const [isGreased, setIsGreased] = useState(false);
    const [sortNameWeight, setSortNameWeight] = useState("name");

    const filterHogs = hogs.filter((hog) => {
        if (isGreased) {
            return hog.greased;
        } else {
            return true; // return true in a filter returns every element in an array
        }
    });

    const sortHogs = filterHogs.sort((hogA, hogB) => {
        if (sortNameWeight === "name") {
            return hogA.name.localeCompare(hogB.name)
        } else {
            return hogA.weight - hogB.weight
        }
    });
    
    const renderTiles = sortHogs.map((hog) => {
        return (
        <Tile 
        name={ hog.name } 
        image={ hog.image } 
        key={ hog.name }
        specialty={ hog.specialty }
        weight={ hog.weight }
        greased={ hog.greased }
        medal={ hog["higest medal achieved"] }
        />
        )
    })

    function handleGreasedFilter() {
        setIsGreased(!isGreased)
    }

    function handleSort(newSort) {
        setSortNameWeight(newSort)
    }

    return (
        <main>
        <Filter 
        isGreased={isGreased}
        handleGreasedFilter={handleGreasedFilter}
        handleSort={handleSort}
        />
        { renderTiles }
        </main>
    );
}

export default TileList;