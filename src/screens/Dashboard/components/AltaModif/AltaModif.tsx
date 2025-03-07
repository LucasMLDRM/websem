// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// const patients = ["Paciente 1", "Paciente 2", "Paciente 3"]; // Datos de ejemplo

// export default function MealPlanTable() {
//   const [selectedPatient, setSelectedPatient] = useState<string>("");
//   const [data, setData] = useState<any[]>([]); // Aquí cargarías los datos reales

//   const handleSearch = () => {
//     console.log("Buscar plan del paciente:", selectedPatient);
//   };

//   const handleAdd = () => {
//     console.log("Agregar nuevo plan");
//   };

//   return (
//     <div className="p-4">
//       <div className="flex items-center gap-2 mb-4">
//         <label className="font-bold">Paciente</label>
//         <Select onValueChange={setSelectedPatient}>
//           <SelectTrigger className="w-60">
//             <SelectValue placeholder="Seleccionar paciente" />
//           </SelectTrigger>
//           <SelectContent>
//             {patients.map((p, index) => (
//               <SelectItem key={index} value={p}>{p}</SelectItem>
//             ))}
//           </SelectContent>
//         </Select>
//         <Button onClick={handleSearch}>Buscar</Button>
//         <Button onClick={handleAdd} variant="outline">Agregar</Button>
//       </div>

//       <Table>
//         <TableHeader>
//           <TableRow>
//             <TableHead>Día</TableHead>
//             <TableHead>Paciente</TableHead>
//             <TableHead>Desayuno</TableHead>
//             <TableHead>Media Mañana</TableHead>
//             <TableHead>Almuerzo</TableHead>
//             <TableHead>Postre</TableHead>
//             <TableHead>Snack</TableHead>
//             <TableHead>Cena</TableHead>
//             <TableHead>Postre</TableHead>
//             <TableHead>Acciones</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {data.length === 0 ? (
//             <TableRow>
//               <TableCell colSpan={10} className="text-center">
//                 No hay datos disponibles
//               </TableCell>
//             </TableRow>
//           ) : (
//             data.map((row, index) => (
//               <TableRow key={index}>
//                 <TableCell>{row.dia}</TableCell>
//                 <TableCell>{row.paciente}</TableCell>
//                 <TableCell>{row.desayuno}</TableCell>
//                 <TableCell>{row.mediaManana}</TableCell>
//                 <TableCell>{row.almuerzo}</TableCell>
//                 <TableCell>{row.postre1}</TableCell>
//                 <TableCell>{row.snack}</TableCell>
//                 <TableCell>{row.cena}</TableCell>
//                 <TableCell>{row.postre2}</TableCell>
//                 <TableCell>
//                   <Button variant="outline" size="sm">Editar</Button>
//                   <Button variant="destructive" size="sm" className="ml-2">Eliminar</Button>
//                 </TableCell>
//               </TableRow>
//             ))
//           )}
//         </TableBody>
//       </Table>
//     </div>
//   );
// }



// import React, { useState } from "react";
// import "./AltaModif.css"; // Importamos el archivo de estilos

// const AltaModif: React.FC = () => {
//   const [selectedPatient, setSelectedPatient] = useState("");
//   const [mealPlans] = useState([
//     {
//       id: 1,
//       day: "Lunes",
//       patient: "Juan Pérez",
//       desayuno: "Cereal",
//       mediaMañana: "Fruta",
//       almuerzo: "Pollo y arroz",
//       postre1: "Gelatina",
//       snack: "Yogur",
//       cena: "Ensalada",
//       postre2: "Flan",
//     },
//   ]);

//   const handleSearch = () => {
//     console.log("Buscando paciente:", selectedPatient);
//   };

//   const handleAdd = () => {
//     console.log("Agregando nuevo plan de comidas");
//   };

//   return (
//     <div className="container">
//       {/* Filtro de paciente */}
//       <div className="controls">
//         <label><h2>Paciente:</h2>
//         </label>
//         <select
//           value={selectedPatient}
//           onChange={(e) => setSelectedPatient(e.target.value)}
//         >
//           <option value="">Seleccione un paciente</option>
//           <option value="Juan Pérez">Juan Pérez</option>
//           <option value="Ana López">Ana López</option>
//         </select>
//         <button className="search-btn" onClick={handleSearch}>
//           Buscar
//         </button>
//         <button className="add-btn" onClick={handleAdd}>
//           Agregar
//         </button>
//       </div>

//       {/* Tabla de planes de comida */}
//       <div className="table-container">
//         <table>
//           <thead>
//             <tr>
//               <th>Día</th>
//               <th>Paciente</th>
//               <th>Desayuno</th>
//               <th>Media Mañana</th>
//               <th>Almuerzo</th>
//               <th>Postre</th>
//               <th>Snack</th>
//               <th>Cena</th>
//               <th>Postre</th>
//               <th>Acciones</th>
//             </tr>
//           </thead>
//           <tbody>
//             {mealPlans.map((plan) => (
//               <tr key={plan.id}>
//                 <td>{plan.day}</td>
//                 <td>{plan.patient}</td>
//                 <td>{plan.desayuno}</td>
//                 <td>{plan.mediaMañana}</td>
//                 <td>{plan.almuerzo}</td>
//                 <td>{plan.postre1}</td>
//                 <td>{plan.snack}</td>
//                 <td>{plan.cena}</td>
//                 <td>{plan.postre2}</td>
//                 <td className="actions">
//                   <button className="edit-btn">Editar</button>
//                   <button className="delete-btn">Eliminar</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AltaModif;








// import React, { useState } from "react";
// import "./AltaModif.css"; // Importamos el archivo de estilos

// const AltaModif: React.FC = () => {
//   const [selectedPatient, setSelectedPatient] = useState("");
//   const [mealPlans, setMealPlans] = useState([
//     {
//       id: 1,
//       day: "Lunes",
//       patient: "Juan Pérez",
//       desayuno: "Cereal",
//       mediaMañana: "Fruta",
//       almuerzo: "Pollo y arroz",
//       postre1: "Gelatina",
//       snack: "Yogur",
//       cena: "Ensalada",
//       postre2: "Flan",
//     },
//   ]);

//   const handleSearch = () => {
//     if (selectedPatient) {
//       console.log("Buscando paciente:", selectedPatient);
//     }
//   };

//   const handleAdd = () => {
//     alert("Funcionalidad de agregar aún no implementada.");
//   };

//   return (
//     <div className="container">
//       {/* Filtro de paciente */}
//       <div className="controls">
//         <label><h2>Paciente:</h2></label>
//         <select
//           value={selectedPatient}
//           onChange={(e) => setSelectedPatient(e.target.value)}
//         >
//           <option value="">Seleccione un paciente</option>
//           <option value="Juan Pérez">Juan Pérez</option>
//           <option value="Ana López">Ana López</option>
//         </select>
//         <button 
//           className="search-btn" 
//           onClick={handleSearch}
//           disabled={!selectedPatient}
//         >
//           Buscar
//         </button>
//         <button className="add-btn" onClick={handleAdd}>
//           Agregar
//         </button>
//       </div>

//       {/* Tabla de planes de comida */}
//       <div className="table-container">
//         <table>
//           <thead>
//             <tr>
//               <th>Día</th>
//               <th>Paciente</th>
//               <th>Desayuno</th>
//               <th>Media Mañana</th>
//               <th>Almuerzo</th>
//               <th>Postre</th>
//               <th>Snack</th>
//               <th>Cena</th>
//               <th>Postre</th>
//               <th>Acciones</th>
//             </tr>
//           </thead>
//           <tbody>
//             {mealPlans.map((plan) => (
//               <tr key={plan.id}>
//                 <td>{plan.day}</td>
//                 <td>{plan.patient}</td>
//                 <td>{plan.desayuno}</td>
//                 <td>{plan.mediaMañana}</td>
//                 <td>{plan.almuerzo}</td>
//                 <td>{plan.postre1}</td>
//                 <td>{plan.snack}</td>
//                 <td>{plan.cena}</td>
//                 <td>{plan.postre2}</td>
//                 <td className="actions">
//                   <button className="edit-btn">Editar</button>
//                   <button className="delete-btn">Eliminar</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AltaModif;






// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./AltaModif.css"; // Archivo de estilos

// const AltaModif: React.FC = () => {
//   const [patients, setPatients] = useState<{ id: number; name: string }[]>([]);
//   const [selectedPatient, setSelectedPatient] = useState("");
//   const [allMealPlans, setAllMealPlans] = useState([
//     {
//       id: 1,
//       day: "Lunes",
//       patient: "Juan Pérez",
//       desayuno: "Cereal",
//       mediaMañana: "Fruta",
//       almuerzo: "Pollo y arroz",
//       postre1: "Gelatina",
//       snack: "Yogur",
//       cena: "Ensalada",
//       postre2: "Flan",
//     },
//     {
//       id: 2,
//       day: "Martes",
//       patient: "Ana López",
//       desayuno: "Pan con queso",
//       mediaMañana: "Jugo",
//       almuerzo: "Pescado con ensalada",
//       postre1: "Tarta",
//       snack: "Frutas",
//       cena: "Sopa",
//       postre2: "Helado",
//     },
//   ]);
//   const [filteredMealPlans, setFilteredMealPlans] = useState(allMealPlans);

//   // Simulación de una API para obtener pacientes
//   useEffect(() => {
//     axios
//       .get("https://emmanuel.somee.com/api/v1/Users/GetAll")
//       .then((response) => {
//         setPatients(response.data);
//       })
//       .catch((error) => {
//         console.error("Error al obtener pacientes", error);
//       });
//   }, []);

//   // Maneja la búsqueda y filtrado
//   const handleSearch = () => {
//     if (selectedPatient) {
//       const filteredPlans = allMealPlans.filter(
//         (plan) => plan.patient === selectedPatient
//       );
//       setFilteredMealPlans(filteredPlans);
//     } else {
//       setFilteredMealPlans(allMealPlans);
//     }
//   };

//   return (
//     <div className="container">
//       {/* Selector de paciente */}
//       <div className="controls">
//         <label>
//           <h2>Paciente:</h2>
//         </label>
//         <select
//           value={selectedPatient}
//           onChange={(e) => setSelectedPatient(e.target.value)}
//         >
//           <option value="">Seleccione un paciente</option>
//           {patients.map((patient) => (
//             <option key={patient.id} value={patient.name}>
//               {patient.name}
//             </option>
//           ))}
//         </select>
//         <button className="search-btn" onClick={handleSearch} disabled={!selectedPatient}>
//           Buscar
//         </button>
//         <button className="add-btn">Agregar</button>
//       </div>

//       {/* Tabla de planes de comida */}
//       <div className="table-container">
//         <table>
//           <thead>
//             <tr>
//               <th>Día</th>
//               <th>Paciente</th>
//               <th>Desayuno</th>
//               <th>Media Mañana</th>
//               <th>Almuerzo</th>
//               <th>Postre</th>
//               <th>Snack</th>
//               <th>Cena</th>
//               <th>Postre</th>
//               <th>Acciones</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredMealPlans.map((plan) => (
//               <tr key={plan.id}>
//                 <td>{plan.day}</td>
//                 <td>{plan.patient}</td>
//                 <td>{plan.desayuno}</td>
//                 <td>{plan.mediaMañana}</td>
//                 <td>{plan.almuerzo}</td>
//                 <td>{plan.postre1}</td>
//                 <td>{plan.snack}</td>
//                 <td>{plan.cena}</td>
//                 <td>{plan.postre2}</td>
//                 <td className="actions">
//                   <button className="edit-btn">Editar</button>
//                   <button className="delete-btn">Eliminar</button>
//                 </td>
//               </tr>
//             ))}
//             {filteredMealPlans.length === 0 && (
//               <tr>
//                 <td colSpan={10} style={{ textAlign: "center", color: "gray" }}>
//                   No hay planes de comida para este paciente
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AltaModif;





// import React, { useState } from "react";
// import "./AltaModif.css"; // Archivo de estilos

// const AltaModif: React.FC = () => {
//   // Lista estática de pacientes
//   const patients = [
//     { id: 1, name: "Juan Pérez" },
//     { id: 2, name: "Ana López" },
//     { id: 3, name: "Carlos Gómez" },
//   ];

//   const [selectedPatient, setSelectedPatient] = useState("");
//   const [allMealPlans] = useState([
//     {
//       id: 1,
//       day: "Lunes",
//       patient: "Juan Pérez",
//       desayuno: "Cereal",
//       mediaMañana: "Fruta",
//       almuerzo: "Pollo y arroz",
//       postre1: "Gelatina",
//       snack: "Yogur",
//       cena: "Ensalada",
//       postre2: "Flan",
//     },
//     {
//       id: 2,
//       day: "Martes",
//       patient: "Ana López",
//       desayuno: "Pan con queso",
//       mediaMañana: "Jugo",
//       almuerzo: "Pescado con ensalada",
//       postre1: "Tarta",
//       snack: "Frutas",
//       cena: "Sopa",
//       postre2: "Helado",
//     },
//     {
//       id: 3,
//       day: "Miércoles",
//       patient: "Carlos Gómez",
//       desayuno: "Huevos revueltos",
//       mediaMañana: "Barra de cereal",
//       almuerzo: "Milanesa con puré",
//       postre1: "Frutas",
//       snack: "Galletas",
//       cena: "Pasta",
//       postre2: "Yogur",
//     },
//   ]);
//   const [filteredMealPlans, setFilteredMealPlans] = useState(allMealPlans);

//   // Maneja la búsqueda y filtrado
//   const handleSearch = () => {
//     if (selectedPatient) {
//       setFilteredMealPlans(
//         allMealPlans.filter((plan) => plan.patient === selectedPatient)
//       );
//     } else {
//       setFilteredMealPlans(allMealPlans);
//     }
//   };

//   return (
//     <div className="container">
//       {/* Selector de paciente */}
//       <div className="controls">
//         <label>
//           <h2>Paciente:</h2>
//         </label>
//         <select
//           value={selectedPatient}
//           onChange={(e) => setSelectedPatient(e.target.value)}
//         >
//           <option value="">Seleccione un paciente</option>
//           {patients.map((patient) => (
//             <option key={patient.id} value={patient.name}>
//               {patient.name}
//             </option>
//           ))}
//         </select>
//         <button className="search-btn" onClick={handleSearch} disabled={!selectedPatient}>
//           Buscar
//         </button>
//         <button className="add-btn">Agregar</button>
//       </div>

//       {/* Tabla de planes de comida */}
//       <div className="table-container">
//         <table>
//           <thead>
//             <tr>
//               <th>Día</th>
//               <th>Paciente</th>
//               <th>Desayuno</th>
//               <th>Media Mañana</th>
//               <th>Almuerzo</th>
//               <th>Postre</th>
//               <th>Snack</th>
//               <th>Cena</th>
//               <th>Postre</th>
//               <th>Acciones</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredMealPlans.map((plan) => (
//               <tr key={plan.id}>
//                 <td>{plan.day}</td>
//                 <td>{plan.patient}</td>
//                 <td>{plan.desayuno}</td>
//                 <td>{plan.mediaMañana}</td>
//                 <td>{plan.almuerzo}</td>
//                 <td>{plan.postre1}</td>
//                 <td>{plan.snack}</td>
//                 <td>{plan.cena}</td>
//                 <td>{plan.postre2}</td>
//                 <td className="actions">
//                   <button className="edit-btn">Editar</button>
//                   <button className="delete-btn">Eliminar</button>
//                 </td>
//               </tr>
//             ))}
//             {filteredMealPlans.length === 0 && (
//               <tr>
//                 <td colSpan={10} style={{ textAlign: "center", color: "gray" }}>
//                   No hay planes de comida para este paciente
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AltaModif;





// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./AltaModif.css"; // Archivo de estilos

// const AltaModif: React.FC = () => {
//   const [selectedPatient, setSelectedPatient] = useState("");
//   const [mealPlans, setMealPlans] = useState([]);
//   const [filteredMealPlans, setFilteredMealPlans] = useState([]);

//   useEffect(() => {
//     const fetchMealPlans = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get("https://emmanuel.somee.com/api/v1/FoodMenus", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setMealPlans(response.data);
//         setFilteredMealPlans(response.data);
//       } catch (error) {
//         console.error("Error al obtener los planes de comida", error);
//       }
//     };

//     fetchMealPlans();
//   }, []);

//   // Maneja la búsqueda y filtrado
//   const handleSearch = () => {
//     if (selectedPatient) {
//       setFilteredMealPlans(
//         mealPlans.filter((plan) => plan.patientId.toString() === selectedPatient)
//       );
//     } else {
//       setFilteredMealPlans(mealPlans);
//     }
//   };

//   return (
//     <div className="container">
//       {/* Selector de paciente */}
//       <div className="controls">
//         <label>
//           <h2>Paciente:</h2>
//         </label>
//         <select
//           value={selectedPatient}
//           onChange={(e) => setSelectedPatient(e.target.value)}
//         >
//           <option value="">Seleccione un paciente</option>
//           {[...new Set(mealPlans.map((plan) => plan.patientId))].map((id) => (
//             <option key={id} value={id}>
//               Paciente {id}
//             </option>
//           ))}
//         </select>
//         <button className="search-btn" onClick={handleSearch} disabled={!selectedPatient}>
//           Buscar
//         </button>
//         <button className="add-btn">Agregar</button>
//       </div>

//       {/* Tabla de planes de comida */}
//       <div className="table-container">
//         <table>
//           <thead>
//             <tr>
//               <th>Día</th>
//               <th>Paciente ID</th>
//               <th>Desayuno</th>
//               <th>Media Mañana</th>
//               <th>Almuerzo</th>
//               <th>Postre Almuerzo</th>
//               <th>Snack</th>
//               <th>Cena</th>
//               <th>Postre Cena</th>
//               <th>Observaciones</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredMealPlans.map((plan) => (
//               <tr key={plan.id}>
//                 <td>{plan.day}</td>
//                 <td>{plan.patientId}</td>
//                 <td>{plan.breakfast}</td>
//                 <td>{plan.midMorning}</td>
//                 <td>{plan.lunch}</td>
//                 <td>{plan.dessertLunch}</td>
//                 <td>{plan.snack}</td>
//                 <td>{plan.dinner}</td>
//                 <td>{plan.dessertDinner}</td>
//                 <td>{plan.observations}</td>
//               </tr>
//             ))}
//             {filteredMealPlans.length === 0 && (
//               <tr>
//                 <td colSpan={10} style={{ textAlign: "center", color: "gray" }}>
//                   No hay planes de comida para este paciente
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AltaModif;









// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./AltaModif.css"; // Archivo de estilos

// interface MealPlan {
//   id: number;
//   day: string;
//   patientId: number;
//   breakfast: string;
//   midMorning: string;
//   lunch: string;
//   dessertLunch: string;
//   snack: string;
//   dinner: string;
//   dessertDinner: string;
//   observations: string;
// }

// const AltaModif: React.FC = () => {
//   const [selectedPatient, setSelectedPatient] = useState<string>("");
//   const [mealPlans, setMealPlans] = useState<MealPlan[]>([]);
//   const [filteredMealPlans, setFilteredMealPlans] = useState<MealPlan[]>([]);

//   useEffect(() => {
//     const fetchMealPlans = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get<MealPlan[]>("https://emmanuel.somee.com/api/v1/FoodMenus", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setMealPlans(response.data);
//         setFilteredMealPlans(response.data);
//       } catch (error) {
//         console.error("Error al obtener los planes de comida", error);
//       }
//     };

//     fetchMealPlans();
//   }, []);

//   // Maneja la búsqueda y filtrado
//   const handleSearch = () => {
//     if (selectedPatient) {
//       setFilteredMealPlans(
//         mealPlans.filter((plan) => plan.patientId.toString() === selectedPatient)
//       );
//     } else {
//       setFilteredMealPlans(mealPlans);
//     }
//   };

//   return (
//     <div className="container">
//       {/* Selector de paciente */}
//       <div className="controls">
//         <label>
//           <h2>Paciente:</h2>
//         </label>
//         <select
//           value={selectedPatient}
//           onChange={(e) => setSelectedPatient(e.target.value)}
//         >
//           <option value="">Seleccione un paciente</option>
//           {[...new Set(mealPlans.map((plan) => plan.patientId))].map((id) => (
//             <option key={id} value={id.toString()}>
//               Paciente {id}
//             </option>
//           ))}
//         </select>
//         <button className="search-btn" onClick={handleSearch} disabled={!selectedPatient}>
//           Buscar
//         </button>
//         <button className="add-btn">Agregar</button>
//       </div>

//       {/* Tabla de planes de comida */}
//       <div className="table-container">
//         <table>
//           <thead>
//             <tr>
//               <th>Día</th>
//               <th>Paciente ID</th>
//               <th>Desayuno</th>
//               <th>Media Mañana</th>
//               <th>Almuerzo</th>
//               <th>Postre Almuerzo</th>
//               <th>Snack</th>
//               <th>Cena</th>
//               <th>Postre Cena</th>
//               <th>Observaciones</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredMealPlans.map((plan) => (
//               <tr key={plan.id}>
//                 <td>{plan.day}</td>
//                 <td>{plan.patientId}</td>
//                 <td>{plan.breakfast}</td>
//                 <td>{plan.midMorning}</td>
//                 <td>{plan.lunch}</td>
//                 <td>{plan.dessertLunch}</td>
//                 <td>{plan.snack}</td>
//                 <td>{plan.dinner}</td>
//                 <td>{plan.dessertDinner}</td>
//                 <td>{plan.observations}</td>
//               </tr>
//             ))}
//             {filteredMealPlans.length === 0 && (
//               <tr>
//                 <td colSpan={10} style={{ textAlign: "center", color: "gray" }}>
//                   No hay planes de comida para este paciente
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AltaModif;










// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./AltaModif.css"; // Archivo de estilos

// interface MealPlan {
//   id: number;
//   day: string;
//   patientId: number;
//   breakfast: string;
//   midMorning: string;
//   lunch: string;
//   dessertLunch: string;
//   snack: string;
//   dinner: string;
//   dessertDinner: string;
//   observations: string;
// }

// const AltaModif: React.FC = () => {
//   const [selectedPatient, setSelectedPatient] = useState<string>("");
//   const [mealPlans, setMealPlans] = useState<MealPlan[]>([]);
//   const [filteredMealPlans, setFilteredMealPlans] = useState<MealPlan[]>([]);
//   const [showPopup, setShowPopup] = useState<boolean>(false);
//   const [newMealPlan, setNewMealPlan] = useState<Omit<MealPlan, "id">>({
//     day: "",
//     patientId: 0,
//     breakfast: "",
//     midMorning: "",
//     lunch: "",
//     dessertLunch: "",
//     snack: "",
//     dinner: "",
//     dessertDinner: "",
//     observations: "",
//   });

//   useEffect(() => {
//     const fetchMealPlans = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get<MealPlan[]>("https://emmanuel.somee.com/api/v1/FoodMenus", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setMealPlans(response.data);
//         setFilteredMealPlans(response.data);
//       } catch (error) {
//         console.error("Error al obtener los planes de comida", error);
//       }
//     };

//     fetchMealPlans();
//   }, []);

//   const handleSearch = () => {
//     if (selectedPatient) {
//       setFilteredMealPlans(
//         mealPlans.filter((plan) => plan.patientId.toString() === selectedPatient)
//       );
//     } else {
//       setFilteredMealPlans(mealPlans);
//     }
//   };

//   const handleAddMealPlan = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.post("https://emmanuel.somee.com/api/v1/FoodMenus", newMealPlan, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       });
//       setMealPlans([...mealPlans, response.data]);
//       setFilteredMealPlans([...mealPlans, response.data]);
//       setShowPopup(false);
//     } catch (error) {
//       console.error("Error al agregar un nuevo plan de comida", error);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="controls">
//         <label>
//           <h2>Paciente:</h2>
//         </label>
//         <select
//           value={selectedPatient}
//           onChange={(e) => setSelectedPatient(e.target.value)}
//         >
//           <option value="">Seleccione un paciente</option>
//           {[...new Set(mealPlans.map((plan) => plan.patientId))].map((id) => (
//             <option key={id} value={id.toString()}>
//               Paciente {id}
//             </option>
//           ))}
//         </select>
//         <button className="search-btn" onClick={handleSearch} disabled={!selectedPatient}>
//           Buscar
//         </button>
//         <button className="add-btn" onClick={() => setShowPopup(true)}>Agregar</button>
//       </div>

//       {showPopup && (
//         <div className="popup">
//           <div className="popup-content">
//             <h2>Agregar Nuevo Plan de Comida</h2>
//             <input
//               type="text"
//               placeholder="Día"
//               value={newMealPlan.day}
//               onChange={(e) => setNewMealPlan({ ...newMealPlan, day: e.target.value })}
//             />
//             <input
//               type="number"
//               placeholder="ID Paciente"
//               value={newMealPlan.patientId}
//               onChange={(e) => setNewMealPlan({ ...newMealPlan, patientId: Number(e.target.value) })}
//             />
//             <input
//               type="text"
//               placeholder="Desayuno"
//               value={newMealPlan.breakfast}
//               onChange={(e) => setNewMealPlan({ ...newMealPlan, breakfast: e.target.value })}
//             />
//             <input
//               type="text"
//               placeholder="Media Mañana"
//               value={newMealPlan.midMorning}
//               onChange={(e) => setNewMealPlan({ ...newMealPlan, midMorning: e.target.value })}
//             />
//             <input
//               type="text"
//               placeholder="Almuerzo"
//               value={newMealPlan.lunch}
//               onChange={(e) => setNewMealPlan({ ...newMealPlan, lunch: e.target.value })}
//             />
//             <button onClick={handleAddMealPlan}>Guardar</button>
//             <button onClick={() => setShowPopup(false)}>Cancelar</button>
//           </div>
//         </div>
//       )}

//       <div className="table-container">
//         <table>
//           <thead>
//             <tr>
//               <th>Día</th>
//               <th>Paciente ID</th>
//               <th>Desayuno</th>
//               <th>Media Mañana</th>
//               <th>Almuerzo</th>
//               <th>Postre Almuerzo</th>
//               <th>Snack</th>
//               <th>Cena</th>
//               <th>Postre Cena</th>
//               <th>Observaciones</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredMealPlans.map((plan) => (
//               <tr key={plan.id}>
//                 <td>{plan.day}</td>
//                 <td>{plan.patientId}</td>
//                 <td>{plan.breakfast}</td>
//                 <td>{plan.midMorning}</td>
//                 <td>{plan.lunch}</td>
//                 <td>{plan.dessertLunch}</td>
//                 <td>{plan.snack}</td>
//                 <td>{plan.dinner}</td>
//                 <td>{plan.dessertDinner}</td>
//                 <td>{plan.observations}</td>
//               </tr>
//             ))}
//             {filteredMealPlans.length === 0 && (
//               <tr>
//                 <td colSpan={10} style={{ textAlign: "center", color: "gray" }}>
//                   No hay planes de comida para este paciente
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AltaModif;











// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./AltaModif.css"; // Archivo de estilos

// interface MealPlan {
//   id: number;
//   day: string;
//   patientId: number;
//   breakfast: string;
//   midMorning: string;
//   lunch: string;
//   dessertLunch: string;
//   snack: string;
//   dinner: string;
//   dessertDinner: string;
//   observations: string;
// }

// const AltaModif: React.FC = () => {
//   const [selectedPatient, setSelectedPatient] = useState<string>("");
//   const [mealPlans, setMealPlans] = useState<MealPlan[]>([]);
//   const [filteredMealPlans, setFilteredMealPlans] = useState<MealPlan[]>([]);
//   const [showPopup, setShowPopup] = useState<boolean>(false);
//   const [newMealPlan, setNewMealPlan] = useState<Omit<MealPlan, "id">>({
//     day: "",
//     patientId: 0,
//     breakfast: "",
//     midMorning: "",
//     lunch: "",
//     dessertLunch: "",
//     snack: "",
//     dinner: "",
//     dessertDinner: "",
//     observations: "",
//   });

//   useEffect(() => {
//     const fetchMealPlans = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get<MealPlan[]>("https://emmanuel.somee.com/api/v1/FoodMenus", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setMealPlans(response.data);
//         setFilteredMealPlans(response.data);
//       } catch (error) {
//         console.error("Error al obtener los planes de comida", error);
//       }
//     };

//     fetchMealPlans();
//   }, []);

//   const handleSearch = () => {
//     if (selectedPatient) {
//       setFilteredMealPlans(
//         mealPlans.filter((plan) => plan.patientId.toString() === selectedPatient)
//       );
//     } else {
//       setFilteredMealPlans(mealPlans);
//     }
//   };

//   const handleAddMealPlan = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.post("https://emmanuel.somee.com/api/v1/FoodMenus", newMealPlan, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       });
//       setMealPlans([...mealPlans, response.data]);
//       setFilteredMealPlans([...mealPlans, response.data]);
//       setShowPopup(false);
//     } catch (error) {
//       console.error("Error al agregar un nuevo plan de comida", error);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="controls">
//         <label>
//           <h2>Paciente:</h2>
//         </label>
//         <select
//           value={selectedPatient}
//           onChange={(e) => setSelectedPatient(e.target.value)}
//         >
//           <option value="">Seleccione un paciente</option>
//           {[...new Set(mealPlans.map((plan) => plan.patientId))].map((id) => (
//             <option key={id} value={id.toString()}>
//               Paciente {id}
//             </option>
//           ))}
//         </select>
//         <button className="search-btn" onClick={handleSearch} disabled={!selectedPatient}>
//           Buscar
//         </button>
//         <button className="add-btn" onClick={() => setShowPopup(true)}>Agregar</button>
//       </div>

//       {showPopup && (
//         <div className="popup">
//           <div className="popup-content">
//             <h2>Agregar Nuevo Plan de Comida</h2>
//             {Object.keys(newMealPlan).map((key) => (
//               <input
//                 key={key}
//                 type={key === "patientId" ? "number" : "text"}
//                 placeholder={key}
//                 value={(newMealPlan as any)[key]}
//                 onChange={(e) => setNewMealPlan({ ...newMealPlan, [key]: key === "patientId" ? Number(e.target.value) : e.target.value })}
//               />
//             ))}
//             <button onClick={handleAddMealPlan}>Guardar</button>
//             <button onClick={() => setShowPopup(false)}>Cancelar</button>
//           </div>
//         </div>
//       )}

//       <div className="table-container">
//         <table>
//           <thead>
//             <tr>
//               <th>Día</th>
//               <th>Paciente ID</th>
//               <th>Desayuno</th>
//               <th>Media Mañana</th>
//               <th>Almuerzo</th>
//               <th>Postre Almuerzo</th>
//               <th>Snack</th>
//               <th>Cena</th>
//               <th>Postre Cena</th>
//               <th>Observaciones</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredMealPlans.map((plan) => (
//               <tr key={plan.id}>
//                 <td>{plan.day}</td>
//                 <td>{plan.patientId}</td>
//                 <td>{plan.breakfast}</td>
//                 <td>{plan.midMorning}</td>
//                 <td>{plan.lunch}</td>
//                 <td>{plan.dessertLunch}</td>
//                 <td>{plan.snack}</td>
//                 <td>{plan.dinner}</td>
//                 <td>{plan.dessertDinner}</td>
//                 <td>{plan.observations}</td>
//               </tr>
//             ))}
//             {filteredMealPlans.length === 0 && (
//               <tr>
//                 <td colSpan={10} style={{ textAlign: "center", color: "gray" }}>
//                   No hay planes de comida para este paciente
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AltaModif;








// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./AltaModif.css"; // Archivo de estilos

// interface MealPlan {
//   id: number;
//   day: string;
//   patientId: number;
//   breakfast: string;
//   midMorning: string;
//   lunch: string;
//   dessertLunch: string;
//   snack: string;
//   dinner: string;
//   dessertDinner: string;
//   observations: string;
// }

// const AltaModif: React.FC = () => {
//   const [selectedPatient, setSelectedPatient] = useState<string>("");
//   const [mealPlans, setMealPlans] = useState<MealPlan[]>([]);
//   const [filteredMealPlans, setFilteredMealPlans] = useState<MealPlan[]>([]);
//   const [showPopup, setShowPopup] = useState<boolean>(false);
//   const [newMealPlan, setNewMealPlan] = useState<Omit<MealPlan, "id">>({
//     day: "",
//     patientId: 0,
//     breakfast: "",
//     midMorning: "",
//     lunch: "",
//     dessertLunch: "",
//     snack: "",
//     dinner: "",
//     dessertDinner: "",
//     observations: "",
//   });

//   useEffect(() => {
//     const fetchMealPlans = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get<MealPlan[]>("https://emmanuel.somee.com/api/v1/FoodMenus", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setMealPlans(response.data);
//         setFilteredMealPlans(response.data);
//       } catch (error) {
//         console.error("Error al obtener los planes de comida", error);
//       }
//     };

//     fetchMealPlans();
//   }, []);

//   const handleSearch = () => {
//     if (selectedPatient) {
//       setFilteredMealPlans(
//         mealPlans.filter((plan) => plan.patientId.toString() === selectedPatient)
//       );
//     } else {
//       setFilteredMealPlans(mealPlans);
//     }
//   };

//   const handleAddMealPlan = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.post("https://emmanuel.somee.com/api/v1/FoodMenus", newMealPlan, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       });
//       setMealPlans([...mealPlans, response.data]);
//       setFilteredMealPlans([...mealPlans, response.data]);
//       setShowPopup(false);
//     } catch (error) {
//       console.error("Error al agregar un nuevo plan de comida", error);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="controls">
//         <label>
//           <h2>Paciente:</h2>
//         </label>
//         <select
//           value={selectedPatient}
//           onChange={(e) => setSelectedPatient(e.target.value)}
//         >
//           <option value="">Seleccione un paciente</option>
//           {[...new Set(mealPlans.map((plan) => plan.patientId))].map((id) => (
//             <option key={id} value={id.toString()}>
//               Paciente {id}
//             </option>
//           ))}
//         </select>
//         <button className="search-btn" onClick={handleSearch} disabled={!selectedPatient}>
//           Buscar
//         </button>
//         <button className="add-btn" onClick={() => setShowPopup(true)}>Agregar</button>
//       </div>

//       {showPopup && (
//         <div className="popup">
//           <div className="popup-content">
//             <h2>Agregar Nuevo Plan de Comida</h2>
//             {Object.keys(newMealPlan).map((key) => (
//               <input
//                 key={key}
//                 type={key === "patientId" ? "number" : "text"}
//                 placeholder={key}
//                 value={(newMealPlan as any)[key]}
//                 onChange={(e) => setNewMealPlan({ ...newMealPlan, [key]: key === "patientId" ? Number(e.target.value) : e.target.value })}
//               />
//             ))}
//             <button onClick={handleAddMealPlan}>Guardar</button>
//             <button onClick={() => setShowPopup(false)}>Cancelar</button>
//           </div>
//         </div>
//       )}

//       <div className="table-container">
//         <table>
//           <thead>
//             <tr>
//               <th>Día</th>
//               <th>Paciente ID</th>
//               <th>Desayuno</th>
//               <th>Media Mañana</th>
//               <th>Almuerzo</th>
//               <th>Postre Almuerzo</th>
//               <th>Snack</th>
//               <th>Cena</th>
//               <th>Postre Cena</th>
//               <th>Observaciones</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredMealPlans.map((plan) => (
//               <tr key={plan.id}>
//                 <td>{plan.day}</td>
//                 <td>{plan.patientId}</td>
//                 <td>{plan.breakfast}</td>
//                 <td>{plan.midMorning}</td>
//                 <td>{plan.lunch}</td>
//                 <td>{plan.dessertLunch}</td>
//                 <td>{plan.snack}</td>
//                 <td>{plan.dinner}</td>
//                 <td>{plan.dessertDinner}</td>
//                 <td>{plan.observations}</td>
//               </tr>
//             ))}
//             {filteredMealPlans.length === 0 && (
//               <tr>
//                 <td colSpan={10} style={{ textAlign: "center", color: "gray" }}>
//                   No hay planes de comida para este paciente
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AltaModif;















// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./AltaModif.css"; // Archivo de estilos

// interface MealPlan {
//   id: number;
//   day: string;
//   patientId: number;
//   breakfast: string;
//   midMorning: string;
//   lunch: string;
//   dessertLunch: string;
//   snack: string;
//   dinner: string;
//   dessertDinner: string;
//   observations: string;
// }

// const daysOfWeek = [
//   "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"
// ];

// const AltaModif: React.FC = () => {
//   const [selectedPatient, setSelectedPatient] = useState<string>("");
//   const [mealPlans, setMealPlans] = useState<MealPlan[]>([]);
//   const [filteredMealPlans, setFilteredMealPlans] = useState<MealPlan[]>([]);
//   const [showPopup, setShowPopup] = useState<boolean>(false);
//   const [newMealPlan, setNewMealPlan] = useState<Omit<MealPlan, "id">>({
//     day: "",
//     patientId: 0,
//     breakfast: "",
//     midMorning: "",
//     lunch: "",
//     dessertLunch: "",
//     snack: "",
//     dinner: "",
//     dessertDinner: "",
//     observations: "",
//   });

//   useEffect(() => {
//     const fetchMealPlans = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get<MealPlan[]>("https://emmanuel.somee.com/api/v1/FoodMenus", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setMealPlans(response.data);
//         setFilteredMealPlans(response.data);
//       } catch (error) {
//         console.error("Error al obtener los planes de comida", error);
//       }
//     };

//     fetchMealPlans();
//   }, []);

//   const handleSearch = () => {
//     if (selectedPatient) {
//       setFilteredMealPlans(
//         mealPlans.filter((plan) => plan.patientId.toString() === selectedPatient)
//       );
//     } else {
//       setFilteredMealPlans(mealPlans);
//     }
//   };

//   const handleAddMealPlan = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.post("https://emmanuel.somee.com/api/v1/FoodMenus", newMealPlan, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       });
//       setMealPlans([...mealPlans, response.data]);
//       setFilteredMealPlans([...mealPlans, response.data]);
//       setShowPopup(false);
//     } catch (error) {
//       console.error("Error al agregar un nuevo plan de comida", error);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="controls">
//         <label>
//           <h2>Paciente:</h2>
//         </label>
//         <select
//           value={selectedPatient}
//           onChange={(e) => setSelectedPatient(e.target.value)}
//         >
//           <option value="">Seleccione un paciente</option>
//           {[...new Set(mealPlans.map((plan) => plan.patientId))].map((id) => (
//             <option key={id} value={id.toString()}>
//               Paciente {id}
//             </option>
//           ))}
//         </select>
//         <button className="search-btn" onClick={handleSearch} disabled={!selectedPatient}>
//           Buscar
//         </button>
//         <button className="add-btn" onClick={() => setShowPopup(true)}>Agregar</button>
//       </div>

//       {showPopup && (
//         <div className="popup">
//           <div className="popup-content">
//             <h2>Agregar Nuevo Plan de Comida</h2>
//             <select
//               value={newMealPlan.day}
//               onChange={(e) => setNewMealPlan({ ...newMealPlan, day: e.target.value })}
//             >
//               <option value="">Seleccione un día</option>
//               {daysOfWeek.map((day) => (
//                 <option key={day} value={day}>{day}</option>
//               ))}
//             </select>
//             {Object.keys(newMealPlan).filter(key => key !== "day").map((key) => (
//               <input
//                 key={key}
//                 type={key === "patientId" ? "number" : "text"}
//                 placeholder={key}
//                 value={(newMealPlan as any)[key]}
//                 onChange={(e) => setNewMealPlan({ ...newMealPlan, [key]: key === "patientId" ? Number(e.target.value) : e.target.value })}
//               />
//             ))}
//             <button onClick={handleAddMealPlan}>Guardar</button>
//             <button onClick={() => setShowPopup(false)}>Cancelar</button>
//           </div>
//         </div>
//       )}

//       <div className="table-container">
//         <table>
//           <thead>
//             <tr>
//               <th>Día</th>
//               <th>Paciente ID</th>
//               <th>Desayuno</th>
//               <th>Media Mañana</th>
//               <th>Almuerzo</th>
//               <th>Postre Almuerzo</th>
//               <th>Snack</th>
//               <th>Cena</th>
//               <th>Postre Cena</th>
//               <th>Observaciones</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredMealPlans.map((plan) => (
//               <tr key={plan.id}>
//                 <td>{plan.day}</td>
//                 <td>{plan.patientId}</td>
//                 <td>{plan.breakfast}</td>
//                 <td>{plan.midMorning}</td>
//                 <td>{plan.lunch}</td>
//                 <td>{plan.dessertLunch}</td>
//                 <td>{plan.snack}</td>
//                 <td>{plan.dinner}</td>
//                 <td>{plan.dessertDinner}</td>
//                 <td>{plan.observations}</td>
//               </tr>
//             ))}
//             {filteredMealPlans.length === 0 && (
//               <tr>
//                 <td colSpan={10} style={{ textAlign: "center", color: "gray" }}>
//                   No hay planes de comida para este paciente
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AltaModif;










// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./AltaModif.css"; // Archivo de estilos

// interface MealPlan {
//   id: number;
//   day: string;
//   patientId: number;
//   breakfast: string;
//   midMorning: string;
//   lunch: string;
//   dessertLunch: string;
//   snack: string;
//   dinner: string;
//   dessertDinner: string;
//   observations: string;
// }

// interface Patient {
//   id: number;
//   name: string;
// }

// const daysOfWeek = [
//   "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"
// ];

// const AltaModif: React.FC = () => {
//   const [selectedPatient, setSelectedPatient] = useState<string>("");
//   const [mealPlans, setMealPlans] = useState<MealPlan[]>([]);
//   const [filteredMealPlans, setFilteredMealPlans] = useState<MealPlan[]>([]);
//   const [showPopup, setShowPopup] = useState<boolean>(false);
//   const [patients, setPatients] = useState<Patient[]>([]);
//   const [newMealPlan, setNewMealPlan] = useState<Omit<MealPlan, "id">>({
//     day: "",
//     patientId: 0,
//     breakfast: "",
//     midMorning: "",
//     lunch: "",
//     dessertLunch: "",
//     snack: "",
//     dinner: "",
//     dessertDinner: "",
//     observations: "",
//   });

//   useEffect(() => {
//     const fetchMealPlans = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get<MealPlan[]>("https://emmanuel.somee.com/api/v1/FoodMenus", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setMealPlans(response.data);
//         setFilteredMealPlans(response.data);
//       } catch (error) {
//         console.error("Error al obtener los planes de comida", error);
//       }
//     };

//     const fetchPatients = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get<Patient[]>("https://emmanuel.somee.com/api/v1/Users/GetByRol/Paciente", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setPatients(response.data);
//       } catch (error) {
//         console.error("Error al obtener la lista de pacientes", error);
//       }
//     };

//     fetchMealPlans();
//     fetchPatients();
//   }, []);

//   const handleSearch = () => {
//     if (selectedPatient) {
//       setFilteredMealPlans(
//         mealPlans.filter((plan) => plan.patientId.toString() === selectedPatient)
//       );
//     } else {
//       setFilteredMealPlans(mealPlans);
//     }
//   };

//   const handleAddMealPlan = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.post("https://emmanuel.somee.com/api/v1/FoodMenus", newMealPlan, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       });
//       setMealPlans([...mealPlans, response.data]);
//       setFilteredMealPlans([...mealPlans, response.data]);
//       setShowPopup(false);
//     } catch (error) {
//       console.error("Error al agregar un nuevo plan de comida", error);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="controls">
//         <label>
//           <h2>Paciente:</h2>
//         </label>
//         <select
//           value={selectedPatient}
//           onChange={(e) => setSelectedPatient(e.target.value)}
//         >
//           <option value="">Seleccione un paciente</option>
//           {patients.map((patient) => (
//             <option key={patient.id} value={patient.id.toString()}>
//               {patient.name}
//             </option>
//           ))}
//         </select>
//         <button className="search-btn" onClick={handleSearch} disabled={!selectedPatient}>
//           Buscar
//         </button>
//         <button className="add-btn" onClick={() => setShowPopup(true)}>Agregar</button>
//       </div>

//       {showPopup && (
//         <div className="popup">
//           <div className="popup-content">
//             <h2>Agregar Nuevo Plan de Comida</h2>
//             <select
//               value={newMealPlan.day}
//               onChange={(e) => setNewMealPlan({ ...newMealPlan, day: e.target.value })}
//             >
//               <option value="">Seleccione un día</option>
//               {daysOfWeek.map((day) => (
//                 <option key={day} value={day}>{day}</option>
//               ))}
//             </select>
//             <select
//               value={newMealPlan.patientId}
//               onChange={(e) => setNewMealPlan({ ...newMealPlan, patientId: Number(e.target.value) })}
//             >
//               <option value="">Seleccione un paciente</option>
//               {patients.map((patient) => (
//                 <option key={patient.id} value={patient.id}>
//                   {patient.name}
//                 </option>
//               ))}
//             </select>
//             {Object.keys(newMealPlan).filter(key => key !== "day" && key !== "patientId").map((key) => (
//               <input
//                 key={key}
//                 type="text"
//                 placeholder={key}
//                 value={(newMealPlan as any)[key]}
//                 onChange={(e) => setNewMealPlan({ ...newMealPlan, [key]: e.target.value })}
//               />
//             ))}
//             <button onClick={handleAddMealPlan}>Guardar</button>
//             <button onClick={() => setShowPopup(false)}>Cancelar</button>
//           </div>
//         </div>
//       )}

//       <div className="table-container">
//         <table>
//           <thead>
//             <tr>
//               <th>Día</th>
//               <th>Paciente ID</th>
//               <th>Desayuno</th>
//               <th>Media Mañana</th>
//               <th>Almuerzo</th>
//               <th>Postre Almuerzo</th>
//               <th>Snack</th>
//               <th>Cena</th>
//               <th>Postre Cena</th>
//               <th>Observaciones</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredMealPlans.map((plan) => (
//               <tr key={plan.id}>
//                 <td>{plan.day}</td>
//                 <td>{plan.patientId}</td>
//                 <td>{plan.breakfast}</td>
//                 <td>{plan.midMorning}</td>
//                 <td>{plan.lunch}</td>
//                 <td>{plan.dessertLunch}</td>
//                 <td>{plan.snack}</td>
//                 <td>{plan.dinner}</td>
//                 <td>{plan.dessertDinner}</td>
//                 <td>{plan.observations}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AltaModif;












// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./AltaModif.css"; // Archivo de estilos

// interface MealPlan {
//   id: number;
//   day: string;
//   patientId: number;
//   breakfast: string;
//   midMorning: string;
//   lunch: string;
//   dessertLunch: string;
//   snack: string;
//   dinner: string;
//   dessertDinner: string;
//   observations: string;
// }

// interface Patient {
//   id: number;
//   name: string;
// }

// const daysOfWeek = [
//   "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"
// ];

// const AltaModif: React.FC = () => {
//   const [selectedPatient, setSelectedPatient] = useState<string>("");
//   const [mealPlans, setMealPlans] = useState<MealPlan[]>([]);
//   const [filteredMealPlans, setFilteredMealPlans] = useState<MealPlan[]>([]);
//   const [showPopup, setShowPopup] = useState<boolean>(false);
//   const [patients, setPatients] = useState<Patient[]>([]);
//   const [newMealPlan, setNewMealPlan] = useState<Omit<MealPlan, "id">>({
//     day: "",
//     patientId: 0,
//     breakfast: "",
//     midMorning: "",
//     lunch: "",
//     dessertLunch: "",
//     snack: "",
//     dinner: "",
//     dessertDinner: "",
//     observations: "",
//   });

//   useEffect(() => {
//     const fetchMealPlans = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get<MealPlan[]>("https://emmanuel.somee.com/api/v1/FoodMenus", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setMealPlans(response.data);
//         setFilteredMealPlans(response.data);
//       } catch (error) {
//         console.error("Error al obtener los planes de comida", error);
//       }
//     };

//     const fetchPatients = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get<Patient[]>("https://emmanuel.somee.com/api/v1/Users/GetByRol/Paciente", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setPatients(response.data);
//       } catch (error) {
//         console.error("Error al obtener la lista de pacientes", error);
//       }
//     };

//     fetchMealPlans();
//     fetchPatients();
//   }, []);

//   const handleSearch = () => {
//     if (selectedPatient) {
//       setFilteredMealPlans(
//         mealPlans.filter((plan) => plan.patientId.toString() === selectedPatient)
//       );
//     } else {
//       setFilteredMealPlans(mealPlans);
//     }
//   };

//   const handleAddMealPlan = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.post("https://emmanuel.somee.com/api/v1/FoodMenus", newMealPlan, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       });
//       setMealPlans([...mealPlans, response.data]);
//       setFilteredMealPlans([...mealPlans, response.data]);
//       setShowPopup(false);
//     } catch (error) {
//       console.error("Error al agregar un nuevo plan de comida", error);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="controls">
//         <label>
//           <h2>Paciente:</h2>
//         </label>
//         <select
//           value={selectedPatient}
//           onChange={(e) => setSelectedPatient(e.target.value)}
//         >
//           <option value="">Seleccione un paciente</option>
//           {patients.map((patient) => (
//             <option key={patient.id} value={patient.id.toString()}>
//               {patient.name}
//             </option>
//           ))}
//         </select>
//         <button className="search-btn" onClick={handleSearch} disabled={!selectedPatient}>
//           Buscar
//         </button>
//         <button className="add-btn" onClick={() => setShowPopup(true)}>Agregar</button>
//       </div>

//       {showPopup && (
//         <div className="popup">
//           <div className="popup-content">
//             <h2>Agregar Nuevo Plan de Comida</h2>
//             <select
//               value={newMealPlan.day}
//               onChange={(e) => setNewMealPlan({ ...newMealPlan, day: e.target.value })}
//             >
//               <option value="">Seleccione un día</option>
//               {daysOfWeek.map((day) => (
//                 <option key={day} value={day}>{day}</option>
//               ))}
//             </select>
//             <select
//               value={newMealPlan.patientId}
//               onChange={(e) => setNewMealPlan({ ...newMealPlan, patientId: Number(e.target.value) })}
//             >
//               <option value="">Seleccione un paciente</option>
//               {patients.map((patient) => (
//                 <option key={patient.id} value={patient.id}>
//                   {patient.name}
//                 </option>
//               ))}
//             </select>
//             {Object.keys(newMealPlan).filter(key => key !== "day" && key !== "patientId").map((key) => (
//               <input
//                 key={key}
//                 type="text"
//                 placeholder={key}
//                 value={(newMealPlan as any)[key]}
//                 onChange={(e) => setNewMealPlan({ ...newMealPlan, [key]: e.target.value })}
//               />
//             ))}
//             <button onClick={handleAddMealPlan}>Guardar</button>
//             <button onClick={() => setShowPopup(false)}>Cancelar</button>
//           </div>
//         </div>
//       )}

//       <div className="table-container">
//         <table>
//           <thead>
//             <tr>
//               <th>Día</th>
//               <th>Paciente ID</th>
//               <th>Desayuno</th>
//               <th>Media Mañana</th>
//               <th>Almuerzo</th>
//               <th>Postre Almuerzo</th>
//               <th>Snack</th>
//               <th>Cena</th>
//               <th>Postre Cena</th>
//               <th>Observaciones</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredMealPlans.map((plan) => (
//               <tr key={plan.id}>
//                 <td>{plan.day}</td>
//                 <td>{plan.patientId}</td>
//                 <td>{plan.breakfast}</td>
//                 <td>{plan.midMorning}</td>
//                 <td>{plan.lunch}</td>
//                 <td>{plan.dessertLunch}</td>
//                 <td>{plan.snack}</td>
//                 <td>{plan.dinner}</td>
//                 <td>{plan.dessertDinner}</td>
//                 <td>{plan.observations}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AltaModif;










// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./AltaModif.css"; // Archivo de estilos

// interface MealPlan {
//   id: number;
//   day: string;
//   patientId: number;
//   breakfast: string;
//   midMorning: string;
//   lunch: string;
//   dessertLunch: string;
//   snack: string;
//   dinner: string;
//   dessertDinner: string;
//   observations: string;
// }

// interface Patient {
//   id: number;
//   name: string;
// }

// const daysOfWeek = [
//   "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"
// ];

// const AltaModif: React.FC = () => {
//   const [selectedPatient, setSelectedPatient] = useState<string>("");
//   const [mealPlans, setMealPlans] = useState<MealPlan[]>([]);
//   const [filteredMealPlans, setFilteredMealPlans] = useState<MealPlan[]>([]);
//   const [showPopup, setShowPopup] = useState<boolean>(false);
//   const [patients, setPatients] = useState<Patient[]>([]);
//   const [newMealPlan, setNewMealPlan] = useState<Omit<MealPlan, "id">>({
//     day: "",
//     patientId: 0,
//     breakfast: "",
//     midMorning: "",
//     lunch: "",
//     dessertLunch: "",
//     snack: "",
//     dinner: "",
//     dessertDinner: "",
//     observations: "",
//   });

//   useEffect(() => {
//     const fetchMealPlans = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get<MealPlan[]>("https://emmanuel.somee.com/api/v1/FoodMenus", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setMealPlans(response.data);
//         setFilteredMealPlans(response.data);
//       } catch (error) {
//         console.error("Error al obtener los planes de comida", error);
//       }
//     };

//     const fetchPatients = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get("https://emmanuel.somee.com/api/v1/Users/GetByRol/Paciente", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         const formattedPatients = response.data.map((patient: any) => ({
//           id: patient.id,
//           name: `${patient.firstName} ${patient.lastName}`,
//         }));
//         setPatients(formattedPatients);
//       } catch (error) {
//         console.error("Error al obtener la lista de pacientes", error);
//       }
//     };

//     fetchMealPlans();
//     fetchPatients();
//   }, []);

//   const handleSearch = () => {
//     if (selectedPatient) {
//       setFilteredMealPlans(
//         mealPlans.filter((plan) => plan.patientId.toString() === selectedPatient)
//       );
//     } else {
//       setFilteredMealPlans(mealPlans);
//     }
//   };

//   const handleAddMealPlan = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.post("https://emmanuel.somee.com/api/v1/FoodMenus", newMealPlan, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       });
//       setMealPlans([...mealPlans, response.data]);
//       setFilteredMealPlans([...mealPlans, response.data]);
//       setShowPopup(false);
//     } catch (error) {
//       console.error("Error al agregar un nuevo plan de comida", error);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="controls">
//         <label>
//           <h2>Paciente:</h2>
//         </label>
//         <select
//           value={selectedPatient}
//           onChange={(e) => setSelectedPatient(e.target.value)}
//         >
//           <option value="">Seleccione un paciente</option>
//           {patients.map((patient) => (
//             <option key={patient.id} value={patient.id.toString()}>
//               {patient.name}
//             </option>
//           ))}
//         </select>
//         <button className="search-btn" onClick={handleSearch} disabled={!selectedPatient}>
//           Buscar
//         </button>
//         <button className="add-btn" onClick={() => setShowPopup(true)}>Agregar</button>
//       </div>

//       {showPopup && (
//         <div className="popup">
//           <div className="popup-content">
//             <h2>Agregar Nuevo Plan de Comida</h2>
//             <select
//               value={newMealPlan.day}
//               onChange={(e) => setNewMealPlan({ ...newMealPlan, day: e.target.value })}
//             >
//               <option value="">Seleccione un día</option>
//               {daysOfWeek.map((day) => (
//                 <option key={day} value={day}>{day}</option>
//               ))}
//             </select>
//             <select
//               value={newMealPlan.patientId}
//               onChange={(e) => setNewMealPlan({ ...newMealPlan, patientId: Number(e.target.value) })}
//             >
//               <option value="">Seleccione un paciente</option>
//               {patients.map((patient) => (
//                 <option key={patient.id} value={patient.id}>
//                   {patient.name}
//                 </option>
//               ))}
//             </select>
//             {Object.keys(newMealPlan).filter(key => key !== "day" && key !== "patientId").map((key) => (
//               <input
//                 key={key}
//                 type="text"
//                 placeholder={key}
//                 value={(newMealPlan as any)[key]}
//                 onChange={(e) => setNewMealPlan({ ...newMealPlan, [key]: e.target.value })}
//               />
//             ))}
//             <button onClick={handleAddMealPlan}>Guardar</button>
//             <button onClick={() => setShowPopup(false)}>Cancelar</button>
//           </div>
//         </div>
//       )}

//       <div className="table-container">
//         <table>
//           <thead>
//             <tr>
//               <th>Día</th>
//               <th>Paciente ID</th>
//               <th>Desayuno</th>
//               <th>Media Mañana</th>
//               <th>Almuerzo</th>
//               <th>Postre Almuerzo</th>
//               <th>Snack</th>
//               <th>Cena</th>
//               <th>Postre Cena</th>
//               <th>Observaciones</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredMealPlans.map((plan) => (
//               <tr key={plan.id}>
//                 <td>{plan.day}</td>
//                 <td>{plan.patientId}</td>
//                 <td>{plan.breakfast}</td>
//                 <td>{plan.midMorning}</td>
//                 <td>{plan.lunch}</td>
//                 <td>{plan.dessertLunch}</td>
//                 <td>{plan.snack}</td>
//                 <td>{plan.dinner}</td>
//                 <td>{plan.dessertDinner}</td>
//                 <td>{plan.observations}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AltaModif;










// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./AltaModif.css"; // Archivo de estilos

// interface MealPlan {
//   id: number;
//   day: string;
//   patientId: number;
//   breakfast: string;
//   midMorning: string;
//   lunch: string;
//   dessertLunch: string;
//   snack: string;
//   dinner: string;
//   dessertDinner: string;
//   observations: string;
// }

// interface Patient {
//   id: number;
//   name: string;
// }

// const daysOfWeek = [
//   "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"
// ];

// const AltaModif: React.FC = () => {
//   const [selectedPatient, setSelectedPatient] = useState<string>("");
//   const [mealPlans, setMealPlans] = useState<MealPlan[]>([]);
//   const [filteredMealPlans, setFilteredMealPlans] = useState<MealPlan[]>([]);
//   const [showPopup, setShowPopup] = useState<boolean>(false);
//   const [patients, setPatients] = useState<Patient[]>([]);
//   const [newMealPlan, setNewMealPlan] = useState<Omit<MealPlan, "id">>({
//     day: "",
//     patientId: 0,
//     breakfast: "",
//     midMorning: "",
//     lunch: "",
//     dessertLunch: "",
//     snack: "",
//     dinner: "",
//     dessertDinner: "",
//     observations: "",
//   });

//   useEffect(() => {
//     const fetchMealPlans = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get<MealPlan[]>("https://emmanuel.somee.com/api/v1/FoodMenus", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setMealPlans(response.data);
//         setFilteredMealPlans(response.data);
//       } catch (error) {
//         console.error("Error al obtener los planes de comida", error);
//       }
//     };

//     const fetchPatients = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get("https://emmanuel.somee.com/api/v1/Users/GetByRol/Paciente", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         const formattedPatients = response.data.map((patient: any) => ({
//           id: patient.id,
//           name: `${patient.firstName} ${patient.lastName}`,
//         }));
//         setPatients(formattedPatients);
//       } catch (error) {
//         console.error("Error al obtener la lista de pacientes", error);
//       }
//     };

//     fetchMealPlans();
//     fetchPatients();
//   }, []);

//   const handleSearch = () => {
//     if (selectedPatient) {
//       setFilteredMealPlans(
//         mealPlans.filter((plan) => plan.patientId.toString() === selectedPatient)
//       );
//     } else {
//       setFilteredMealPlans(mealPlans);
//     }
//   };

//   const handleAddMealPlan = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.post("https://emmanuel.somee.com/api/v1/FoodMenus", newMealPlan, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       });
//       setMealPlans([...mealPlans, response.data]);
//       setFilteredMealPlans([...mealPlans, response.data]);
//       setShowPopup(false);
//     } catch (error) {
//       console.error("Error al agregar un nuevo plan de comida", error);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="controls">
//         <label>
//           <h2>Paciente:</h2>
//         </label>
//         <select
//           value={selectedPatient}
//           onChange={(e) => setSelectedPatient(e.target.value)}
//         >
//           <option value="">Seleccione un paciente</option>
//           {patients.map((patient) => (
//             <option key={patient.id} value={patient.id.toString()}>
//               {patient.name}
//             </option>
//           ))}
//         </select>
//         <button className="search-btn" onClick={handleSearch} disabled={!selectedPatient}>
//           Buscar
//         </button>
//         <button className="add-btn" onClick={() => setShowPopup(true)}>Agregar</button>
//       </div>

//       {showPopup && (
//         <div className="popup">
//           <div className="popup-content">
//             <h2>Agregar Nuevo Plan de Comida</h2>
//             <select
//               value={newMealPlan.day}
//               onChange={(e) => setNewMealPlan({ ...newMealPlan, day: e.target.value })}
//             >
//               <option value="">Seleccione un día</option>
//               {daysOfWeek.map((day) => (
//                 <option key={day} value={day}>{day}</option>
//               ))}
//             </select>
//             <select
//               value={newMealPlan.patientId}
//               onChange={(e) => setNewMealPlan({ ...newMealPlan, patientId: Number(e.target.value) })}
//             >
//               <option value="">Seleccione un paciente</option>
//               {patients.map((patient) => (
//                 <option key={patient.id} value={patient.id}>
//                   {patient.name}
//                 </option>
//               ))}
//             </select>
//             {Object.keys(newMealPlan).filter(key => key !== "day" && key !== "patientId").map((key) => (
//               <input
//                 key={key}
//                 type="text"
//                 placeholder={key}
//                 value={(newMealPlan as any)[key]}
//                 onChange={(e) => setNewMealPlan({ ...newMealPlan, [key]: e.target.value })}
//               />
//             ))}
//             <button onClick={handleAddMealPlan}>Guardar</button>
//             <button onClick={() => setShowPopup(false)}>Cancelar</button>
//           </div>
//         </div>
//       )}

//       <div className="table-container">
//         <table>
//           <thead>
//             <tr>
//               <th>Día</th>
//               <th>Paciente</th>
//               <th>Desayuno</th>
//               <th>Media Mañana</th>
//               <th>Almuerzo</th>
//               <th>Postre Almuerzo</th>
//               <th>Snack</th>
//               <th>Cena</th>
//               <th>Postre Cena</th>
//               <th>Observaciones</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredMealPlans.map((plan) => (
//               <tr key={plan.id}>
//                 <td>{plan.day}</td>
//                 <td>{patients.find(patient => patient.id === plan.patientId)?.name || "Desconocido"}</td>
//                 <td>{plan.breakfast}</td>
//                 <td>{plan.midMorning}</td>
//                 <td>{plan.lunch}</td>
//                 <td>{plan.dessertLunch}</td>
//                 <td>{plan.snack}</td>
//                 <td>{plan.dinner}</td>
//                 <td>{plan.dessertDinner}</td>
//                 <td>{plan.observations}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AltaModif;














// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./AltaModif.css"; // Archivo de estilos

// interface MealPlan {
//   id: number;
//   day: string;
//   patientId: number;
//   breakfast: string;
//   midMorning: string;
//   lunch: string;
//   dessertLunch: string;
//   snack: string;
//   dinner: string;
//   dessertDinner: string;
//   observations: string;
// }

// interface Patient {
//   id: number;
//   name: string;
// }

// const daysOfWeek = [
//   "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"
// ];

// const AltaModif: React.FC = () => {
//   const [selectedPatient, setSelectedPatient] = useState<string>("");
//   const [mealPlans, setMealPlans] = useState<MealPlan[]>([]);
//   const [filteredMealPlans, setFilteredMealPlans] = useState<MealPlan[]>([]);
//   const [showPopup, setShowPopup] = useState<boolean>(false);
//   const [patients, setPatients] = useState<Patient[]>([]);
//   const [newMealPlan, setNewMealPlan] = useState<Omit<MealPlan, "id">>({
//     day: "",
//     patientId: 0,
//     breakfast: "",
//     midMorning: "",
//     lunch: "",
//     dessertLunch: "",
//     snack: "",
//     dinner: "",
//     dessertDinner: "",
//     observations: "",
//   });

//   useEffect(() => {
//     const fetchMealPlans = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get<MealPlan[]>("https://emmanuel.somee.com/api/v1/FoodMenus", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setMealPlans(response.data);
//         setFilteredMealPlans(response.data);
//       } catch (error) {
//         console.error("Error al obtener los planes de comida", error);
//       }
//     };

//     const fetchPatients = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get("https://emmanuel.somee.com/api/v1/Users/GetByRol/Paciente", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         const formattedPatients = response.data.map((patient: any) => ({
//           id: patient.id,
//           name: `${patient.firstName} ${patient.lastName}`,
//         }));
//         setPatients(formattedPatients);
//       } catch (error) {
//         console.error("Error al obtener la lista de pacientes", error);
//       }
//     };

//     fetchMealPlans();
//     fetchPatients();
//   }, []);

//   const handleSearch = () => {
//     if (selectedPatient) {
//       setFilteredMealPlans(
//         mealPlans.filter((plan) => plan.patientId.toString() === selectedPatient)
//       );
//     } else {
//       setFilteredMealPlans(mealPlans);
//     }
//   };

//   const handleAddMealPlan = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.post("https://emmanuel.somee.com/api/v1/FoodMenus", newMealPlan, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       });
//       setMealPlans([...mealPlans, response.data]);
//       setFilteredMealPlans([...mealPlans, response.data]);
//       setShowPopup(false);
//     } catch (error) {
//       console.error("Error al agregar un nuevo plan de comida", error);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="controls">
//         <label>
//           <h2>Paciente:</h2>
//         </label>
//         <select
//           value={selectedPatient}
//           onChange={(e) => setSelectedPatient(e.target.value)}
//         >
//           <option value="">Seleccione un paciente</option>
//           {patients.map((patient) => (
//             <option key={patient.id} value={patient.id.toString()}>
//               {patient.name}
//             </option>
//           ))}
//         </select>
//         <button className="search-btn" onClick={handleSearch} disabled={!selectedPatient}>
//           Buscar
//         </button>
//         <button className="add-btn" onClick={() => setShowPopup(true)}>Agregar</button>
//       </div>

//       {showPopup && (
//         <div className="popup">
//           <div className="popup-content">
//             <h2>Agregar Nuevo Plan de Comida</h2>
//             <select
//               value={newMealPlan.day}
//               onChange={(e) => setNewMealPlan({ ...newMealPlan, day: e.target.value })}
//               className="select"
//             >
//               <option value="">Seleccione un día</option>
//               {daysOfWeek.map((day) => (
//                 <option key={day} value={day}>{day}</option>
//               ))}
//             </select>
//             <select
//               value={newMealPlan.patientId}
//               onChange={(e) => setNewMealPlan({ ...newMealPlan, patientId: Number(e.target.value) })}
//               className="select"
//             >
//               <option value="">Seleccione un paciente</option>
//               {patients.map((patient) => (
//                 <option key={patient.id} value={patient.id}>
//                   {patient.name}
//                 </option>
//               ))}
//             </select>
//             {Object.keys(newMealPlan).filter(key => key !== "day" && key !== "patientId").map((key) => (
//               <input
//                 key={key}
//                 type="text"
//                 placeholder={key}
//                 value={(newMealPlan as any)[key]}
//                 onChange={(e) => setNewMealPlan({ ...newMealPlan, [key]: e.target.value })}
//                 className="input-field"
//               />
//             ))}
//             <button onClick={handleAddMealPlan}>Guardar</button>
//             <button onClick={() => setShowPopup(false)}>Cancelar</button>
//           </div>
//         </div>
//       )}

//       <div className="table-container">
//         <table>
//           <thead>
//             <tr>
//               <th>Día</th>
//               <th>Paciente</th>
//               <th>Desayuno</th>
//               <th>Media Mañana</th>
//               <th>Almuerzo</th>
//               <th>Postre Almuerzo</th>
//               <th>Snack</th>
//               <th>Cena</th>
//               <th>Postre Cena</th>
//               <th>Observaciones</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredMealPlans.map((plan) => (
//               <tr key={plan.id}>
//                 <td>{plan.day}</td>
//                 <td>{patients.find(patient => patient.id === plan.patientId)?.name || "Desconocido"}</td>
//                 <td>{plan.breakfast}</td>
//                 <td>{plan.midMorning}</td>
//                 <td>{plan.lunch}</td>
//                 <td>{plan.dessertLunch}</td>
//                 <td>{plan.snack}</td>
//                 <td>{plan.dinner}</td>
//                 <td>{plan.dessertDinner}</td>
//                 <td>{plan.observations}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AltaModif;









// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./AltaModif.css"; // Archivo de estilos

// interface MealPlan {
//   id: number;
//   day: string;
//   patientId: number;
//   breakfast: string;
//   midMorning: string;
//   lunch: string;
//   dessertLunch: string;
//   snack: string;
//   dinner: string;
//   dessertDinner: string;
//   observations: string;
// }

// interface Patient {
//   id: number;
//   name: string;
// }

// const daysOfWeek = [
//   "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"
// ];

// const AltaModif: React.FC = () => {
//   const [selectedPatient, setSelectedPatient] = useState<string>("");
//   const [mealPlans, setMealPlans] = useState<MealPlan[]>([]);
//   const [filteredMealPlans, setFilteredMealPlans] = useState<MealPlan[]>([]);
//   const [showPopup, setShowPopup] = useState<boolean>(false);
//   const [patients, setPatients] = useState<Patient[]>([]);
//   const [newMealPlan, setNewMealPlan] = useState<Omit<MealPlan, "id">>({
//     day: "",
//     patientId: 0,
//     breakfast: "",
//     midMorning: "",
//     lunch: "",
//     dessertLunch: "",
//     snack: "",
//     dinner: "",
//     dessertDinner: "",
//     observations: "",
//   });

//   useEffect(() => {
//     const fetchMealPlans = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get<MealPlan[]>("https://emmanuel.somee.com/api/v1/FoodMenus", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setMealPlans(response.data);
//         setFilteredMealPlans(response.data);
//       } catch (error) {
//         console.error("Error al obtener los planes de comida", error);
//       }
//     };

//     const fetchPatients = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get("https://emmanuel.somee.com/api/v1/Users/GetByRol/Paciente", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         const formattedPatients = response.data.map((patient: any) => ({
//           id: patient.id,
//           name: `${patient.firstName} ${patient.lastName}`,
//         }));
//         setPatients(formattedPatients);
//       } catch (error) {
//         console.error("Error al obtener la lista de pacientes", error);
//       }
//     };

//     fetchMealPlans();
//     fetchPatients();
//   }, []);

//   const handleSearch = () => {
//     if (selectedPatient) {
//       setFilteredMealPlans(
//         mealPlans.filter((plan) => plan.patientId.toString() === selectedPatient)
//       );
//     } else {
//       setFilteredMealPlans(mealPlans);
//     }
//   };

//   const handleAddMealPlan = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.post("https://emmanuel.somee.com/api/v1/FoodMenus", newMealPlan, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       });
//       setMealPlans([...mealPlans, response.data]);
//       setFilteredMealPlans([...mealPlans, response.data]);
//       setShowPopup(false);
//     } catch (error) {
//       console.error("Error al agregar un nuevo plan de comida", error);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="controls">
//         <label>
//           <h2>Paciente:</h2>
//         </label>
//         <select
//           value={selectedPatient}
//           onChange={(e) => setSelectedPatient(e.target.value)}
//         >
//           <option value="">Seleccione un paciente</option>
//           {patients.map((patient) => (
//             <option key={patient.id} value={patient.id.toString()}>
//               {patient.name}
//             </option>
//           ))}
//         </select>
//         <button className="search-btn" onClick={handleSearch} disabled={!selectedPatient}>
//           Buscar
//         </button>
//         <button className="add-btn" onClick={() => setShowPopup(true)}>Agregar</button>
//       </div>

//       {showPopup && (
//         <div className="popup">
//           <div className="popup-content">
//             <h2>Agregar Nuevo Plan de Comida</h2>
//             <select
//               value={newMealPlan.day}
//               onChange={(e) => setNewMealPlan({ ...newMealPlan, day: e.target.value })}
//               className="select"
//             >
//               <option value="">Seleccione un día</option>
//               {daysOfWeek.map((day) => (
//                 <option key={day} value={day}>{day}</option>
//               ))}
//             </select>
//             <select
//               value={newMealPlan.patientId}
//               onChange={(e) => setNewMealPlan({ ...newMealPlan, patientId: Number(e.target.value) })}
//               className="select"
//             >
//               <option value="">Seleccione un paciente</option>
//               {patients.map((patient) => (
//                 <option key={patient.id} value={patient.id}>
//                   {patient.name}
//                 </option>
//               ))}
//             </select>
//             {Object.keys(newMealPlan).filter(key => key !== "day" && key !== "patientId").map((key) => (
//               <input
//                 key={key}
//                 type="text"
//                 placeholder={key === "observations" ? "Observaciones" : key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
//                 value={(newMealPlan as any)[key]}
//                 onChange={(e) => setNewMealPlan({ ...newMealPlan, [key]: e.target.value })}
//                 className="input-field"
//               />
//             ))}
//             <button onClick={handleAddMealPlan}>Guardar</button>
//             <button onClick={() => setShowPopup(false)}>Cancelar</button>
//           </div>
//         </div>
//       )}

//       <div className="table-container">
//         <table>
//           <thead>
//             <tr>
//               <th>Día</th>
//               <th>Paciente</th>
//               <th>Desayuno</th>
//               <th>Media Mañana</th>
//               <th>Almuerzo</th>
//               <th>Postre Almuerzo</th>
//               <th>Snack</th>
//               <th>Cena</th>
//               <th>Postre Cena</th>
//               <th>Observaciones</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredMealPlans.map((plan) => (
//               <tr key={plan.id}>
//                 <td>{plan.day}</td>
//                 <td>{patients.find(patient => patient.id === plan.patientId)?.name || "Desconocido"}</td>
//                 <td>{plan.breakfast}</td>
//                 <td>{plan.midMorning}</td>
//                 <td>{plan.lunch}</td>
//                 <td>{plan.dessertLunch}</td>
//                 <td>{plan.snack}</td>
//                 <td>{plan.dinner}</td>
//                 <td>{plan.dessertDinner}</td>
//                 <td>{plan.observations}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AltaModif;










// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./AltaModif.css"; // Archivo de estilos

// interface MealPlan {
//   id: number;
//   day: string;
//   patientId: number;
//   breakfast: string;
//   midMorning: string;
//   lunch: string;
//   dessertLunch: string;
//   snack: string;
//   dinner: string;
//   dessertDinner: string;
//   observations: string;
// }

// interface Patient {
//   id: number;
//   name: string;
// }

// const daysOfWeek = [
//   "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"
// ];

// const AltaModif: React.FC = () => {
//   const [selectedPatient, setSelectedPatient] = useState<string>("");
//   const [mealPlans, setMealPlans] = useState<MealPlan[]>([]);
//   const [filteredMealPlans, setFilteredMealPlans] = useState<MealPlan[]>([]);
//   const [showPopup, setShowPopup] = useState<boolean>(false);
//   const [patients, setPatients] = useState<Patient[]>([]);
//   const [newMealPlan, setNewMealPlan] = useState<Omit<MealPlan, "id">>({
//     day: "",
//     patientId: 0,
//     breakfast: "",
//     midMorning: "",
//     lunch: "",
//     dessertLunch: "",
//     snack: "",
//     dinner: "",
//     dessertDinner: "",
//     observations: "",
//   });

//   useEffect(() => {
//     const fetchMealPlans = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get<MealPlan[]>("https://emmanuel.somee.com/api/v1/FoodMenus", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setMealPlans(response.data);
//         setFilteredMealPlans(response.data);
//       } catch (error) {
//         console.error("Error al obtener los planes de comida", error);
//       }
//     };

//     const fetchPatients = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get("https://emmanuel.somee.com/api/v1/Users/GetByRol/Paciente", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         const formattedPatients = response.data.map((patient: any) => ({
//           id: patient.id,
//           name: `${patient.firstName} ${patient.lastName}`,
//         }));
//         setPatients(formattedPatients);
//       } catch (error) {
//         console.error("Error al obtener la lista de pacientes", error);
//       }
//     };

//     fetchMealPlans();
//     fetchPatients();
//   }, []);

//   const handleSearch = () => {
//     if (selectedPatient) {
//       setFilteredMealPlans(
//         mealPlans.filter((plan) => plan.patientId.toString() === selectedPatient)
//       );
//     } else {
//       setFilteredMealPlans(mealPlans);
//     }
//   };

//   const handleAddMealPlan = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.post("https://emmanuel.somee.com/api/v1/FoodMenus", newMealPlan, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       });
//       setMealPlans([...mealPlans, response.data]);
//       setFilteredMealPlans([...mealPlans, response.data]);
//       setShowPopup(false);
//     } catch (error) {
//       console.error("Error al agregar un nuevo plan de comida", error);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="controls">
//         <label>
//           <h2>Paciente:</h2>
//         </label>
//         <select
//           value={selectedPatient}
//           onChange={(e) => setSelectedPatient(e.target.value)}
//         >
//           <option value="">Seleccione un paciente</option>
//           {patients.map((patient) => (
//             <option key={patient.id} value={patient.id.toString()}>
//               {patient.name}
//             </option>
//           ))}
//         </select>
//         <button className="search-btn" onClick={handleSearch} disabled={!selectedPatient}>
//           Buscar
//         </button>
//         <button className="add-btn" onClick={() => setShowPopup(true)}>Agregar</button>
//       </div>

//       {showPopup && (
//         <div className="popup">
//           <div className="popup-content">
//             <h2>Agregar Nuevo Plan de Comida</h2>
//             <select
//               value={newMealPlan.day}
//               onChange={(e) => setNewMealPlan({ ...newMealPlan, day: e.target.value })}
//               className="select"
//             >
//               <option value="">Seleccione un día</option>
//               {daysOfWeek.map((day) => (
//                 <option key={day} value={day}>{day}</option>
//               ))}
//             </select>
//             <select
//               value={newMealPlan.patientId}
//               onChange={(e) => setNewMealPlan({ ...newMealPlan, patientId: Number(e.target.value) })}
//               className="select"
//             >
//               <option value="">Seleccione un paciente</option>
//               {patients.map((patient) => (
//                 <option key={patient.id} value={patient.id}>
//                   {patient.name}
//                 </option>
//               ))}
//             </select>
//             {Object.keys(newMealPlan).filter(key => key !== "day" && key !== "patientId").map((key) => (
//               <input
//                 key={key}
//                 type="text"
//                 placeholder={key === "observations" ? "Observaciones" : key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
//                 value={(newMealPlan as any)[key]}
//                 onChange={(e) => setNewMealPlan({ ...newMealPlan, [key]: e.target.value })}
//                 className="input-field"
//               />
//             ))}
//             <button onClick={handleAddMealPlan}>Guardar</button>
//             <button onClick={() => setShowPopup(false)}>Cancelar</button>
//           </div>
//         </div>
//       )}

//       <div className="table-container">
//         <table>
//           <thead>
//             <tr>
//               <th>Día</th>
//               <th>Paciente</th>
//               <th>Desayuno</th>
//               <th>Media Mañana</th>
//               <th>Almuerzo</th>
//               <th>Postre Almuerzo</th>
//               <th>Snack</th>
//               <th>Cena</th>
//               <th>Postre Cena</th>
//               <th>Observaciones</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredMealPlans.map((plan) => (
//               <tr key={plan.id}>
//                 <td>{plan.day}</td>
//                 <td>{patients.find(patient => patient.id === plan.patientId)?.name || "Desconocido"}</td>
//                 <td>{plan.breakfast}</td>
//                 <td>{plan.midMorning}</td>
//                 <td>{plan.lunch}</td>
//                 <td>{plan.dessertLunch}</td>
//                 <td>{plan.snack}</td>
//                 <td>{plan.dinner}</td>
//                 <td>{plan.dessertDinner}</td>
//                 <td>{plan.observations}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AltaModif;




















// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./AltaModif.css"; // Archivo de estilos

// interface MealPlan {
//   id: number;
//   day: string;
//   patientId: number;
//   breakfast: string;
//   midMorning: string;
//   lunch: string;
//   dessertLunch: string;
//   snack: string;
//   dinner: string;
//   dessertDinner: string;
//   observations: string;
// }

// interface Patient {
//   id: number;
//   name: string;
// }

// const daysOfWeek = [
//   "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"
// ];

// const AltaModif: React.FC = () => {
//   const [selectedPatient, setSelectedPatient] = useState<string>("");
//   const [mealPlans, setMealPlans] = useState<MealPlan[]>([]);
//   const [filteredMealPlans, setFilteredMealPlans] = useState<MealPlan[]>([]);
//   const [showPopup, setShowPopup] = useState<boolean>(false);
//   const [patients, setPatients] = useState<Patient[]>([]);
//   const [newMealPlan, setNewMealPlan] = useState<Omit<MealPlan, "id">>({
//     day: "",
//     patientId: 0,
//     breakfast: "",
//     midMorning: "",
//     lunch: "",
//     dessertLunch: "",
//     snack: "",
//     dinner: "",
//     dessertDinner: "",
//     observations: "",
//   });

//   useEffect(() => {
//     const fetchMealPlans = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get<MealPlan[]>("https://emmanuel.somee.com/api/v1/FoodMenus", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setMealPlans(response.data);
//         setFilteredMealPlans(response.data);
//       } catch (error) {
//         console.error("Error al obtener los planes de comida", error);
//       }
//     };

//     const fetchPatients = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get("https://emmanuel.somee.com/api/v1/Users/GetByRol/Paciente", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         const formattedPatients = response.data.map((patient: any) => ({
//           id: patient.id,
//           name: `${patient.firstName} ${patient.lastName}`,
//         }));
//         setPatients(formattedPatients);
//       } catch (error) {
//         console.error("Error al obtener la lista de pacientes", error);
//       }
//     };

//     fetchMealPlans();
//     fetchPatients();
//   }, []);

//   const handleSearch = () => {
//     if (selectedPatient) {
//       setFilteredMealPlans(
//         mealPlans.filter((plan) => plan.patientId.toString() === selectedPatient)
//       );
//     } else {
//       setFilteredMealPlans(mealPlans);
//     }
//   };

//   const handleAddMealPlan = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.post("https://emmanuel.somee.com/api/v1/FoodMenus", newMealPlan, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       });
//       setMealPlans([...mealPlans, response.data]);
//       setFilteredMealPlans([...mealPlans, response.data]);
//       setShowPopup(false);
//     } catch (error) {
//       console.error("Error al agregar un nuevo plan de comida", error);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="controls">
//         <label>
//           <h2>Paciente:</h2>
//         </label>
//         <select
//           value={selectedPatient}
//           onChange={(e) => setSelectedPatient(e.target.value)}
//         >
//           <option value="">Seleccione un paciente</option>
//           {patients.map((patient) => (
//             <option key={patient.id} value={patient.id.toString()}>
//               {patient.name}
//             </option>
//           ))}
//         </select>
//         <button className="search-btn" onClick={handleSearch} disabled={!selectedPatient}>
//           Buscar
//         </button>
//         <button className="add-btn" onClick={() => setShowPopup(true)}>Agregar</button>
//       </div>

//       {showPopup && (
//         <div className="popup">
//           <div className="popup-content">
//             <h2>Agregar Nuevo Plan de Comida</h2>
//             <select
//               value={newMealPlan.day}
//               onChange={(e) => setNewMealPlan({ ...newMealPlan, day: e.target.value })}
//               className="select"
//             >
//               <option value="">Seleccione un día</option>
//               {daysOfWeek.map((day) => (
//                 <option key={day} value={day}>{day}</option>
//               ))}
//             </select>
//             <select
//               value={newMealPlan.patientId}
//               onChange={(e) => setNewMealPlan({ ...newMealPlan, patientId: Number(e.target.value) })}
//               className="select"
//             >
//               <option value="">Seleccione un paciente</option>
//               {patients.map((patient) => (
//                 <option key={patient.id} value={patient.id}>
//                   {patient.name}
//                 </option>
//               ))}
//             </select>
//             {Object.keys(newMealPlan).filter(key => key !== "day" && key !== "patientId").map((key) => (
//               <input
//                 key={key}
//                 type="text"
//                 placeholder={key === "observations" ? "Observaciones" : key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1').toLowerCase()}
//                 value={(newMealPlan as any)[key]}
//                 onChange={(e) => setNewMealPlan({ ...newMealPlan, [key]: e.target.value })}
//                 className="input-field"
//               />
//             ))}
//             <button onClick={handleAddMealPlan}>Guardar</button>
//             <button onClick={() => setShowPopup(false)}>Cancelar</button>
//           </div>
//         </div>
//       )}

//       <div className="table-container">
//         <table>
//           <thead>
//             <tr>
//               <th>Día</th>
//               <th>Paciente</th>
//               <th>Desayuno</th>
//               <th>Media Mañana</th>
//               <th>Almuerzo</th>
//               <th>Postre Almuerzo</th>
//               <th>Snack</th>
//               <th>Cena</th>
//               <th>Postre Cena</th>
//               <th>Observaciones</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredMealPlans.map((plan) => (
//               <tr key={plan.id}>
//                 <td>{plan.day}</td>
//                 <td>{patients.find(patient => patient.id === plan.patientId)?.name || "Desconocido"}</td>
//                 <td>{plan.breakfast}</td>
//                 <td>{plan.midMorning}</td>
//                 <td>{plan.lunch}</td>
//                 <td>{plan.dessertLunch}</td>
//                 <td>{plan.snack}</td>
//                 <td>{plan.dinner}</td>
//                 <td>{plan.dessertDinner}</td>
//                 <td>{plan.observations}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AltaModif;




















import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AltaModif.css"; // Archivo de estilos

interface MealPlan {
  id: number;
  day: string;
  patientId: number;
  breakfast: string;
  midMorning: string;
  lunch: string;
  dessertLunch: string;
  snack: string;
  dinner: string;
  dessertDinner: string;
  observations: string;
}

interface Patient {
  id: number;
  name: string;
}

const daysOfWeek = [
  "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"
];

const AltaModif: React.FC = () => {
  const [selectedPatient, setSelectedPatient] = useState<string>("");
  const [mealPlans, setMealPlans] = useState<MealPlan[]>([]);
  const [filteredMealPlans, setFilteredMealPlans] = useState<MealPlan[]>([]);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [patients, setPatients] = useState<Patient[]>([]);
  const [newMealPlan, setNewMealPlan] = useState<Omit<MealPlan, "id">>({
    day: "",
    patientId: 0,
    breakfast: "",
    midMorning: "",
    lunch: "",
    dessertLunch: "",
    snack: "",
    dinner: "",
    dessertDinner: "",
    observations: "",
  });

  const [editingMealPlanId, setEditingMealPlanId] = useState<number | null>(null);

  useEffect(() => {
    const fetchMealPlans = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get<MealPlan[]>("https://emmanuel.somee.com/api/v1/FoodMenus", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMealPlans(response.data);
        setFilteredMealPlans(response.data);
      } catch (error) {
        console.error("Error al obtener los planes de comida", error);
      }
    };

    const fetchPatients = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("https://emmanuel.somee.com/api/v1/Users/GetByRol/Paciente", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const formattedPatients = response.data.map((patient: any) => ({
          id: patient.id,
          name: `${patient.firstName} ${patient.lastName}`,
        }));
        setPatients(formattedPatients);
      } catch (error) {
        console.error("Error al obtener la lista de pacientes", error);
      }
    };

    fetchMealPlans();
    fetchPatients();
  }, []);

  const handleSearch = () => {
    if (selectedPatient) {
      setFilteredMealPlans(
        mealPlans.filter((plan) => plan.patientId.toString() === selectedPatient)
      );
    } else {
      setFilteredMealPlans(mealPlans);
    }
  };

  const handleAddMealPlan = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post("https://emmanuel.somee.com/api/v1/FoodMenus", newMealPlan, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      setMealPlans([...mealPlans, response.data]);
      setFilteredMealPlans([...mealPlans, response.data]);
      setShowPopup(false);
    } catch (error) {
      console.error("Error al agregar un nuevo plan de comida", error);
    }
  };

  const handleEditMealPlan = async (id: number) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get<MealPlan>(`https://emmanuel.somee.com/api/v1/FoodMenus/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setNewMealPlan(response.data);
      setEditingMealPlanId(id);
      setShowPopup(true);
    } catch (error) {
      console.error("Error al obtener el plan de comida", error);
    }
  };

  const handleUpdateMealPlan = async () => {
    if (editingMealPlanId) {
      try {
        const token = localStorage.getItem("token");
        await axios.put(`https://emmanuel.somee.com/api/v1/FoodMenus/`, newMealPlan, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        const updatedMealPlans = mealPlans.map((plan) =>
          plan.id === editingMealPlanId ? { ...plan, ...newMealPlan } : plan
        );
        setMealPlans(updatedMealPlans);
        setFilteredMealPlans(updatedMealPlans);
        setShowPopup(false);
      } catch (error) {
        console.error("Error al actualizar el plan de comida", error);
      }
    }
  };

  const handleDeleteMealPlan = async (id: number) => {
    const token = localStorage.getItem("token");
    try {
      await axios.delete(`https://emmanuel.somee.com/api/v1/FoodMenus/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMealPlans(mealPlans.filter((plan) => plan.id !== id));
      setFilteredMealPlans(filteredMealPlans.filter((plan) => plan.id !== id));
    } catch (error) {
      console.error("Error al eliminar el plan de comida", error);
    }
  };

  return (
    <div className="container">
      <div className="controls">
        <label>
          <h2>Paciente:</h2>
        </label>
        <select
          value={selectedPatient}
          onChange={(e) => setSelectedPatient(e.target.value)}
        >
          <option value="">Seleccione un paciente</option>
          {patients.map((patient) => (
            <option key={patient.id} value={patient.id.toString()}>
              {patient.name}
            </option>
          ))}
        </select>
        <button className="search-btn" onClick={handleSearch} disabled={!selectedPatient}>
          Buscar
        </button>
        <button className="add-btn" onClick={() => {
          setNewMealPlan({
            day: "",
            patientId: 0,
            breakfast: "",
            midMorning: "",
            lunch: "",
            dessertLunch: "",
            snack: "",
            dinner: "",
            dessertDinner: "",
            observations: "",
          });
          setEditingMealPlanId(null);
          setShowPopup(true);
        }}>Agregar</button>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>{editingMealPlanId ? "Editar Plan de Comida" : "Agregar Nuevo Plan de Comida"}</h2>
            <select
              value={newMealPlan.day}
              onChange={(e) => setNewMealPlan({ ...newMealPlan, day: e.target.value })}
              className="select"
            >
              <option value="">Seleccione un día</option>
              {daysOfWeek.map((day) => (
                <option key={day} value={day}>{day}</option>
              ))}
            </select>
            <select
              value={newMealPlan.patientId}
              onChange={(e) => setNewMealPlan({ ...newMealPlan, patientId: Number(e.target.value) })}
              className="select"
            >
              <option value="">Seleccione un paciente</option>
              {patients.map((patient) => (
                <option key={patient.id} value={patient.id}>
                  {patient.name}
                </option>
              ))}
            </select>
            {Object.keys(newMealPlan).filter(key => key !== "day" && key !== "patientId").map((key) => (
              <input
                key={key}
                type="text"
                placeholder={key === "observations" ? "Observaciones" : key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1').toLowerCase()}
                value={(newMealPlan as any)[key]}
                onChange={(e) => setNewMealPlan({ ...newMealPlan, [key]: e.target.value })}
                className="input-field"
              />
            ))}
            <button onClick={editingMealPlanId ? handleUpdateMealPlan : handleAddMealPlan}>
              {editingMealPlanId ? "Actualizar" : "Guardar"}
            </button>
            <button onClick={() => setShowPopup(false)}>Cancelar</button>
          </div>
        </div>
      )}

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Día</th>
              <th>Paciente</th>
              <th>Desayuno</th>
              <th>Media Mañana</th>
              <th>Almuerzo</th>
              <th>Postre Almuerzo</th>
              <th>Snack</th>
              <th>Cena</th>
              <th>Postre Cena</th>
              <th>Observaciones</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredMealPlans.map((plan) => (
              <tr key={plan.id}>
                <td>{plan.day}</td>
                <td>{patients.find(patient => patient.id === plan.patientId)?.name || "Desconocido"}</td>
                <td>{plan.breakfast}</td>
                <td>{plan.midMorning}</td>
                <td>{plan.lunch}</td>
                <td>{plan.dessertLunch}</td>
                <td>{plan.snack}</td>
                <td>{plan.dinner}</td>
                <td>{plan.dessertDinner}</td>
                <td>{plan.observations}</td>
                <td>
                  <button onClick={() => handleEditMealPlan(plan.id)}>Editar</button>
                  <button onClick={() => handleDeleteMealPlan(plan.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AltaModif;
