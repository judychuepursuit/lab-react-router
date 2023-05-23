import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";
import { userParams } from "react-router-dom";

export const PetsList = ({ cats, dogs, path }) => {
  return (
    <section className="pets-wrapper">
      <PetsListNav cats={cats} dogs={dogs} />
      <section className="pets-list">
        {<section>
          {path.includes('cats') || path.includes('all') ? cats.map((cat) => (
            <Pet key={cat.id} kind="cat" pet={cat} />
          )) : null}
          {path.includes('dogs') || path.includes('all') ? dogs.map((dog) => (
            <Pet key={dog.id} kind="dog" pet={dog} />
          )) : null}
        </section>}
      </section>

    </section>
  );
};

export default PetsList;

// export const PetsList = ({ pets }) => {
//   const [cats, dogs] = pets.reduce(
//     (acc, pet) => {
//       const position = pet.kind === "Cat" ? 0 : 1;
//       acc[position].push(pet);
//       return acc;
//     },
//     [[], []]
//   );

//   return (
//     <section className="pets-wrapper">
//       <PetsListNav cats={cats} dogs={dogs} />
//       <section className="pets-list">
//         {/* All cats section */}
//       <Route path="/cats" element={
//           cats.map((cat) => (
//             <Pet key={cat.id} kind="cat" pet={cat} />
//           ))
//          } />

//         {/* All dogs section */}
//       <Route path="/dogs" element={
//           dogs.map((dog) => (
//             <Pet key={dog.id} kind="dog" pet={dog} />
//           ))
//          } />
//       </section>
//     </section>
//   );
// };

// export default PetsList;
