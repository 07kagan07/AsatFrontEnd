import React from "react";
//import TableProp from "./TableProp";
import data from "../data.json";
import Vaxt from "./Date";
import Clock from "./Clock";

const Table = () => {
  let mls;

  return (
    <div>
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th scope="col">Gün</th>
            <th scope="col">Tarih</th>
            <th scope="col">Menü</th>
          </tr>
        </thead>
        <tbody>
          {data.Yemekler.map((meal) => {
            if (
              meal.Tarih > Vaxt() ||
              (meal.Tarih === Vaxt() && String(Clock()) <= "14:00:00")
            ) {
              mls = (
                <tr>
                  <td>{meal.Gun}</td>
                  <td>{meal.Tarih}</td>
                  <td>{meal.Yemek}</td>
                </tr>
              );
            }

            return mls;
            // (
            //   <tr>
            //     <td>{meal.Gun}</td>
            //     <td>{meal.Tarih}</td>
            //     <td>{meal.Yemek}</td>
            //   </tr>

            //   // <TableProp
            //   //   key={meal.Tarih}
            //   //   foods={meal.Yemek}
            //   //   date={meal.Tarih}
            //   //   day={meal.Gun}
            //   // />
            // );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

//import foto from "./foto.png";
//import data from "./data.json";

//for (let i = 0; i < data.Yemekler.length; i++) {}

// const Table = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <div className="row row-cols-1 row-cols-md-2 g-4">
//         <div className="col">
//           <div className="card">
//             <table>
//               <tr>
//                 <th>{props.day}</th>
//                 <th>{props.date}</th>
//                 <th>{props.foods}</th>
//               </tr>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Table;

/* <table style={{ border: "5px" }}>
        <div>
          {data.Yemekler.map((meal) => {
            return (
              <div>
                <Table foods={meal.Yemek} date={meal.Tarih} day={meal.Gun} />
              </div>
            );
          })}
        </div>
      </table> */
