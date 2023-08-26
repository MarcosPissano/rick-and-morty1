import React from "react";
import styles from './Card.module.css';
let { 
   divMale, 
   divFemale,
   btn, 
   nameStyle, 
   data, 
   imageStyle
} = styles;

//styles

let Card = ({name, species, gender, image, id, onClose}) =>{
   //stados locales
   //logica local
   //functiones locales

   return(
      <div className={gender === 'Male' ? divMale : divFemale   }>
         <button onClick={()=>onClose(id)} className={btn}>X</button>
         <h2 className={nameStyle}>{name}</h2>
         <h2 className={data}>{species}</h2>
         <h2>{gender}</h2>
         <img  src={image} alt="" className={imageStyle} />
      </div>
   );
}

export default Card;


// // Definir constantes de colores
// const primaryColor = '#e74c3c';
// const secondaryColor = '#3498db';
// const textColor = '#333';

// const rotateAnimation = keyframes`
//   0% {
//     transform: rotate(0deg);
//   }
//   50% {
//     transform: rotate(180deg);
//   }
//   100% {
//     transform: rotate(360deg);
//   }
// `;

// const CardContainer = styled.div`
// border: 5px solid ${primaryColor};
// padding: 10px;
// margin: 2%;
// width: 10vw;
// background-color: ${secondaryColor};
// color: ${textColor};
// transition: transform 0.3s, background-color 0.3s;
// cursor: pointer;


// &:hover {
//   transform: scale(1.05);
//   background-color: #f39c12;
//   box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
//   animation: ${rotateAnimation} 3s infinite; /* Aplicar la animación al hacer hover */
// }
// `;

// const CloseButton = styled.button`
//   background-color: ${secondaryColor};
//   color: black;
//   border: none;
//   cursor: pointer;
// `;

// const CardContent = styled.div`
// margin-top: 5%;
// p {
//   line-height: 1.0; /* Ajusta el valor según tus preferencias */
// }
// `;

// const CardImage = styled.img`
//   max-width: 80%;
//   height: auto;
// `;

// const Card = (props) => {
//   return (
//     <CardContainer className="card">
//       <CloseButton className="close-button" onClick={props.onClose}>
//         X
//       </CloseButton>
//       <CardContent className="card-content">
//         <p style={{ color: textColor }}><strong>Name:</strong> {props.name}</p>
//         <p style={{ color: textColor }}><strong>Status:</strong> {props.status}</p>
//         <p style={{ color: textColor }}><strong>Species:</strong> {props.species}</p>
//         <p style={{ color: textColor }}><strong>Gender:</strong> {props.gender}</p>
//         <p style={{ color: textColor }}><strong>Origin:</strong> {props.origin.name}</p>
//       </CardContent>
//       <CardImage src={props.image} alt={props.name} />
//     </CardContainer>
//   );
// };

// export default Card;
