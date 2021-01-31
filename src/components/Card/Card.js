import React from 'react';
import PokemonTypes from '../Helpers/PokemonTypes';
import './style.css';

function Card({ pokemon }) {

  console.log("ini pokemon", pokemon);

    return (
      <div className="Card">
        <div className="Card_img">
          <img src={pokemon.sprites.front_default} alt="" />
        </div>
        <div className="Card_name">{pokemon.name}</div>
        <div className="Card_types">
          {pokemon.types.map((type) => {
            return (
              <div
                className="Card_type"
                style={{ backgroundColor: PokemonTypes[type.type.name] }}
              >
                {type.type.name}
              </div>
            );
          })}
        </div>
        <div className="Card_info">
          <div className="Card_data Card_data-weight">
            <p className="title">Weight</p>
            <p>{pokemon.weight}</p>
          </div>
          <div className="Card_data Card_data-height">
            <p className="title">Height</p>
            <p>{pokemon.height}</p>
          </div>
          <div className="Card_data Card_data-ability">
            <p className="title">Ability</p>
            <p>{pokemon.abilities[0].ability.name}</p>
          </div>
          <div className="Card_data Card_data-ability">
            <p className="title">Species</p>
            <p>{pokemon.species.name}</p>
          </div>
          <div className="Card_data Card_data-ability">
            <p className="title">Hp</p>
            <p>{pokemon.stats[0].base_stat}</p>
          </div>
        </div>
      </div>
    );
}

export default Card;