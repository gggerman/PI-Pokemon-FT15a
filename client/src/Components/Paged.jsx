import React from 'react';

export default function Paged({ pokemonsPerPage, allPokemons, paged}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allPokemons/pokemonsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div>
      <span className="paged">
        { pageNumbers && pageNumbers.map(number => (
          <span className="number" key={number}>
            <button onClick={() => paged(number)}>{number}</button>
          </span>
        ))}
      </span>
    </div>
  )
}