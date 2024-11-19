import pets from "../petsData";
import PetItem from "./PetItem";
import { useState } from "react";
import "../App.css" ;

function PetsList() {
  
const [query, setQuery] = useState("");
const [type,setType] = useState("");
const [available , setAvailable] = useState(pets);

const handleAdopt = (petId) => {
  const petList = available.filter((pet) => pet.id !== petId);
  setAvailable(petList);
};

const filterByName=available.filter((pet)=>pet.name.includes(query));
const filterByType=filterByName.filter((pet)=>pet.type.includes(type));
const petList = filterByType.map((pet) => (
   <PetItem adoptFunction ={handleAdopt} pet={pet} key={pet.id} />
  ));


  return (
    <section id="doctors" className="doctor-section pt-140">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-6 col-lg-7">
            <div className="section-title text-center mb-30">
              <h1 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                Fur-ends
              </h1>
              <div className="input-group rounded">
                <input
                  type="search"
                  className="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  onChange={(event)=> setQuery(event.target.value)}
                />
              </div>
              <br />
              Type:
              <select 
              onChange={(event)=> setType(event.target.value)}
              className="form-select">
                <option value="" selected>
                  All
                </option>
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
                <option value="Rabbit">Rabbit</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">{petList}</div>
      </div>
    </section>
  );
}

export default PetsList;
