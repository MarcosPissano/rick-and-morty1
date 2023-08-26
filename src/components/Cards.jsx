import Card from '../components/Card';

export default function Cards({characters, onClose}) {

   return <div>
      {
         characters.map(({id, name, species, gender, image}) => 
            <Card 
               key={id}
               id={id}
               name={name}
               species={species}
               gender={gender}
               image={image}
               onClose={onClose}
            />
         )
      }
   </div>;
}



// import React from 'react';
// import styled from 'styled-components';
// import Card from './Card';

// const CardsContainer = styled.div`
//   display: flex;
//   overflow-x: auto;
//   flex-wrap: nowrap;
//   height: 450px; /* Establece la altura deseada para todas las tarjetas */
// `;

// export default function Cards(props) {
//   return (
//     <CardsContainer className="cards-container">
//       {props.characters.map((character) => (
//         <Card
//           key={character.id}
//           name={character.name}
//           status={character.status}
//           species={character.species}
//           gender={character.gender}
//           origin={character.origin}
//           image={character.image}
//           onClose={() => window.alert('Emulamos que se cierra la card')}
//         />
//       ))}
//     </CardsContainer>
//   );
// }

