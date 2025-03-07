
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./Medicacion.css"; // Archivo de estilos

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

// const Medicacion: React.FC = () => {
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

//   const [editingMealPlanId, setEditingMealPlanId] = useState<number | null>(null);

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

//   const handleEditMealPlan = async (id: number) => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.get<MealPlan>(`https://emmanuel.somee.com/api/v1/FoodMenus/${id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setNewMealPlan(response.data);
//       setEditingMealPlanId(id);
//       setShowPopup(true);
//     } catch (error) {
//       console.error("Error al obtener el plan de comida", error);
//     }
//   };

//   const handleUpdateMealPlan = async () => {
//     if (editingMealPlanId) {
//       try {
//         const token = localStorage.getItem("token");
//         await axios.put(`https://emmanuel.somee.com/api/v1/FoodMenus/`, newMealPlan, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         });
//         const updatedMealPlans = mealPlans.map((plan) =>
//           plan.id === editingMealPlanId ? { ...plan, ...newMealPlan } : plan
//         );
//         setMealPlans(updatedMealPlans);
//         setFilteredMealPlans(updatedMealPlans);
//         setShowPopup(false);
//       } catch (error) {
//         console.error("Error al actualizar el plan de comida", error);
//       }
//     }
//   };

//   const handleDeleteMealPlan = async (id: number) => {
//     const token = localStorage.getItem("token");
//     try {
//       await axios.delete(`https://emmanuel.somee.com/api/v1/FoodMenus/${id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setMealPlans(mealPlans.filter((plan) => plan.id !== id));
//       setFilteredMealPlans(filteredMealPlans.filter((plan) => plan.id !== id));
//     } catch (error) {
//       console.error("Error al eliminar el plan de comida", error);
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
//         <button className="add-btn" onClick={() => {
//           setNewMealPlan({
//             day: "",
//             patientId: 0,
//             breakfast: "",
//             midMorning: "",
//             lunch: "",
//             dessertLunch: "",
//             snack: "",
//             dinner: "",
//             dessertDinner: "",
//             observations: "",
//           });
//           setEditingMealPlanId(null);
//           setShowPopup(true);
//         }}>Agregar</button>
//       </div>

//       {showPopup && (
//         <div className="popup">
//           <div className="popup-content">
//             <h2>{editingMealPlanId ? "Editar Plan de Comida" : "Agregar Nuevo Plan de Comida"}</h2>
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
//             <button onClick={editingMealPlanId ? handleUpdateMealPlan : handleAddMealPlan}>
//               {editingMealPlanId ? "Actualizar" : "Guardar"}
//             </button>
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
//               <th>Acciones</th>
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
//                 <td>
//                   <button onClick={() => handleEditMealPlan(plan.id)}>Editar</button>
//                   <button onClick={() => handleDeleteMealPlan(plan.id)}>Eliminar</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Medicacion;



// import React, { useEffect, useState } from "react";
// import axios from "axios";

// interface MedicationPlan {
//   id: number;
//   day: string;
//   patientName: string;
//   time: string;
//   medication: string;
//   dose: string;
// }

// interface Patient {
//   id: number;
//   name: string;
// }

// const MedicationSchedule: React.FC = () => {
//   const [selectedPatient, setSelectedPatient] = useState<string>("");
//   const [medicationPlans, setMedicationPlans] = useState<MedicationPlan[]>([]);
//   const [patients, setPatients] = useState<Patient[]>([]);

//   useEffect(() => {
//     const fetchMedicationPlans = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get<MedicationPlan[]>("https://emmanuel.somee.com/api/v1/Medications", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setMedicationPlans(response.data);
//       } catch (error) {
//         console.error("Error fetching medication plans", error);
//       }
//     };

//     const fetchPatients = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get("https://emmanuel.somee.com/api/v1/Users/GetByRol/Paciente", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setPatients(response.data.map((p: any) => ({ id: p.id, name: `${p.firstName} ${p.lastName}` })));
//       } catch (error) {
//         console.error("Error fetching patients", error);
//       }
//     };

//     fetchMedicationPlans();
//     fetchPatients();
//   }, []);

//   return (
//     <div className="container">
//       <div className="controls">
//         <select value={selectedPatient} onChange={(e) => setSelectedPatient(e.target.value)}>
//           <option value="">Pacientes</option>
//           {patients.map((patient) => (
//             <option key={patient.id} value={patient.id.toString()}>
//               {patient.name}
//             </option>
//           ))}
//         </select>
//         <button onClick={() => {}}>Buscar</button>
//         <button onClick={() => {}}>Nuevo</button>
//       </div>

//       <table>
//         <thead>
//           <tr>
//             <th>Día</th>
//             <th>Paciente</th>
//             <th>Hora</th>
//             <th>Medicamento</th>
//             <th>Dosis</th>
//             <th>Editar</th>
//             <th>Eliminar</th>
//           </tr>
//         </thead>
//         <tbody>
//           {medicationPlans.map((plan) => (
//             <tr key={plan.id}>
//               <td>{plan.day}</td>
//               <td>{plan.patientName}</td>
//               <td>{plan.time}</td>
//               <td>{plan.medication}</td>
//               <td>{plan.dose}</td>
//               <td><button onClick={() => {}}>✏️</button></td>
//               <td><button onClick={() => {}}>🗑️</button></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default MedicationSchedule;




// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./Medicacion.css"; // Archivo de estilos

// interface MedicalForm {
//   id: number;
//   day: string;
//   patientId: number;
//   medicationName: string;
//   dose: string;
//   scheduleHour: string;
//   observations: string;
// }

// interface Patient {
//   id: number;
//   name: string;
// }

// const Medicacion: React.FC = () => {
//   const [selectedPatient, setSelectedPatient] = useState<string>("");
//   const [medicalForms, setMedicalForms] = useState<MedicalForm[]>([]);
//   const [filteredForms, setFilteredForms] = useState<MedicalForm[]>([]);
//   const [patients, setPatients] = useState<Patient[]>([]);

//   useEffect(() => {
//     const fetchMedicalForms = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get<MedicalForm[]>("https://emmanuel.somee.com/api/v1/MedicalForms", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setMedicalForms(response.data);
//         setFilteredForms(response.data);
//       } catch (error) {
//         console.error("Error al obtener los formularios médicos", error);
//       }
//     };

//     const fetchPatients = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get("https://emmanuel.somee.com/api/v1/Users/GetByRol/Paciente", {
//           headers: { Authorization: `Bearer ${token}` },
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

//     fetchMedicalForms();
//     fetchPatients();
//   }, []);

//   const handleSearch = () => {
//     if (selectedPatient) {
//       setFilteredForms(
//         medicalForms.filter((form) => form.patientId.toString() === selectedPatient)
//       );
//     } else {
//       setFilteredForms(medicalForms);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="controls">
//         <label>
//           <h2>Paciente:</h2>
//         </label>
//         <select value={selectedPatient} onChange={(e) => setSelectedPatient(e.target.value)}>
//           <option value="">Seleccione un paciente</option>
//           {patients.map((patient) => (
//             <option key={patient.id} value={patient.id.toString()}>
//               {patient.name}
//             </option>
//           ))}
//         </select>
//         <button className="search-btn" onClick={handleSearch} disabled={!selectedPatient}>Buscar</button>
//         <button className="add-btn">Nuevo</button>
//       </div>
//       <div className="table-container">
//         <table>
//           <thead>
//             <tr>
//               <th>Día</th>
//               <th>Paciente</th>
//               <th>Hora</th>
//               <th>Medicamento</th>
//               <th>Dosis</th>
//               <th>Editar</th>
//               <th>Eliminar</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredForms.map((form) => (
//               <tr key={form.id}>
//                 <td>{form.day}</td>
//                 <td>{patients.find((patient) => patient.id === form.patientId)?.name || "Desconocido"}</td>
//                 <td>{form.scheduleHour}</td>
//                 <td>{form.medicationName}</td>
//                 <td>{form.dose}</td>
//                 <td><button>Editar</button></td>
//                 <td><button>Eliminar</button></td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Medicacion;
















// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./Medicacion.css"; // Archivo de estilos

// interface MedicalForm {
//   id?: number;
//   day: string;
//   patientId: number;
//   medicationName: string;
//   dose: string;
//   scheduleHour: string;
//   observations: string;
// }

// interface Patient {
//   id: number;
//   name: string;
// }

// const Medicacion: React.FC = () => {
//   const [selectedPatient, setSelectedPatient] = useState<string>("");
//   const [medicalForms, setMedicalForms] = useState<MedicalForm[]>([]);
//   const [filteredForms, setFilteredForms] = useState<MedicalForm[]>([]);
//   const [patients, setPatients] = useState<Patient[]>([]);
//   const [showPopup, setShowPopup] = useState(false);
//   const [newMedication, setNewMedication] = useState<MedicalForm>({
//     day: "",
//     patientId: 0,
//     medicationName: "",
//     dose: "",
//     scheduleHour: "",
//     observations: "",
//   });

//   useEffect(() => {
//     const fetchMedicalForms = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get<MedicalForm[]>("https://emmanuel.somee.com/api/v1/MedicalForms", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setMedicalForms(response.data);
//         setFilteredForms(response.data);
//       } catch (error) {
//         console.error("Error al obtener los formularios médicos", error);
//       }
//     };

//     const fetchPatients = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get("https://emmanuel.somee.com/api/v1/Users/GetByRol/Paciente", {
//           headers: { Authorization: `Bearer ${token}` },
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

//     fetchMedicalForms();
//     fetchPatients();
//   }, []);

//   const handleSearch = () => {
//     if (selectedPatient) {
//       setFilteredForms(
//         medicalForms.filter((form) => form.patientId.toString() === selectedPatient)
//       );
//     } else {
//       setFilteredForms(medicalForms);
//     }
//   };

//   const handleAddMedication = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       await axios.post("https://emmanuel.somee.com/api/v1/MedicalForms", newMedication, {
//         headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
//       });
//       setShowPopup(false);
//     } catch (error) {
//       console.error("Error al agregar la medicación", error);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="controls">
//         <label>
//           <h2>Paciente:</h2>
//         </label>
//         <select value={selectedPatient} onChange={(e) => setSelectedPatient(e.target.value)}>
//           <option value="">Seleccione un paciente</option>
//           {patients.map((patient) => (
//             <option key={patient.id} value={patient.id.toString()}>
//               {patient.name}
//             </option>
//           ))}
//         </select>
//         <button className="search-btn" onClick={handleSearch} disabled={!selectedPatient}>Buscar</button>
//         <button className="add-btn" onClick={() => setShowPopup(true)}>Nuevo</button>
//       </div>
//       <div className="table-container">
//         <table>
//           <thead>
//             <tr>
//               <th>Día</th>
//               <th>Paciente</th>
//               <th>Hora</th>
//               <th>Medicamento</th>
//               <th>Dosis</th>
//               <th>Editar</th>
//               <th>Eliminar</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredForms.map((form) => (
//               <tr key={form.id}>
//                 <td>{form.day}</td>
//                 <td>{patients.find((patient) => patient.id === form.patientId)?.name || "Desconocido"}</td>
//                 <td>{form.scheduleHour}</td>
//                 <td>{form.medicationName}</td>
//                 <td>{form.dose}</td>
//                 <td><button>Editar</button></td>
//                 <td><button>Eliminar</button></td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       {showPopup && (
//         <div className="popup">
//           <h2>Agregar Medicación</h2>
//           <input type="text" placeholder="Día" onChange={(e) => setNewMedication({ ...newMedication, day: e.target.value })} />
//           <select onChange={(e) => setNewMedication({ ...newMedication, patientId: parseInt(e.target.value) })}>
//             <option value="">Seleccione un paciente</option>
//             {patients.map((patient) => (
//               <option key={patient.id} value={patient.id}>{patient.name}</option>
//             ))}
//           </select>
//           <input type="text" placeholder="Medicamento" onChange={(e) => setNewMedication({ ...newMedication, medicationName: e.target.value })} />
//           <input type="text" placeholder="Dosis" onChange={(e) => setNewMedication({ ...newMedication, dose: e.target.value })} />
//           <input type="text" placeholder="Hora" onChange={(e) => setNewMedication({ ...newMedication, scheduleHour: e.target.value })} />
//           <input type="text" placeholder="Observaciones" onChange={(e) => setNewMedication({ ...newMedication, observations: e.target.value })} />
//           <button onClick={handleAddMedication}>Guardar</button>
//           <button onClick={() => setShowPopup(false)}>Cancelar</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Medicacion;




// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./Medicacion.css"; // Archivo de estilos

// interface MedicalForm {
//   id?: number;
//   day: string;
//   patientId: number;
//   medicationName: string;
//   dose: string;
//   scheduleHour: string;
//   observations: string;
// }

// interface Patient {
//   id: number;
//   name: string;
// }

// const Medicacion: React.FC = () => {
//   const [selectedPatient, setSelectedPatient] = useState<string>("");
//   const [medicalForms, setMedicalForms] = useState<MedicalForm[]>([]);
//   const [filteredForms, setFilteredForms] = useState<MedicalForm[]>([]);
//   const [patients, setPatients] = useState<Patient[]>([]);
//   const [showPopup, setShowPopup] = useState(false);
//   const [newMedication, setNewMedication] = useState<MedicalForm>({
//     day: "",
//     patientId: 0,
//     medicationName: "",
//     dose: "",
//     scheduleHour: "",
//     observations: "",
//   });

//   useEffect(() => {
//     const fetchMedicalForms = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get<MedicalForm[]>("https://emmanuel.somee.com/api/v1/MedicalForms", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setMedicalForms(response.data);
//         setFilteredForms(response.data);
//       } catch (error) {
//         console.error("Error al obtener los formularios médicos", error);
//       }
//     };

//     const fetchPatients = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get("https://emmanuel.somee.com/api/v1/Users/GetByRol/Paciente", {
//           headers: { Authorization: `Bearer ${token}` },
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

//     fetchMedicalForms();
//     fetchPatients();
//   }, []);

//   const handleSearch = () => {
//     if (selectedPatient) {
//       setFilteredForms(
//         medicalForms.filter((form) => form.patientId.toString() === selectedPatient)
//       );
//     } else {
//       setFilteredForms(medicalForms);
//     }
//   };

//   const handleAddMedication = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       await axios.post("https://emmanuel.somee.com/api/v1/MedicalForms", newMedication, {
//         headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
//       });
//       setShowPopup(false);
//     } catch (error) {
//       console.error("Error al agregar la medicación", error);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="controls">
//         <label>
//           <h2>Paciente:</h2>
//         </label>
//         <select value={selectedPatient} onChange={(e) => setSelectedPatient(e.target.value)}>
//           <option value="">Seleccione un paciente</option>
//           {patients.map((patient) => (
//             <option key={patient.id} value={patient.id.toString()}>
//               {patient.name}
//             </option>
//           ))}
//         </select>
//         <button className="search-btn" onClick={handleSearch} disabled={!selectedPatient}>Buscar</button>
//         <button className="add-btn" onClick={() => setShowPopup(true)}>Nuevo</button>
//       </div>
//       <div className="table-container">
//         <table>
//           <thead>
//             <tr>
//               <th>Día</th>
//               <th>Paciente</th>
//               <th>Hora</th>
//               <th>Medicamento</th>
//               <th>Dosis</th>
//               <th>Editar</th>
//               <th>Eliminar</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredForms.map((form) => (
//               <tr key={form.id}>
//                 <td>{form.day}</td>
//                 <td>{patients.find((patient) => patient.id === form.patientId)?.name || "Desconocido"}</td>
//                 <td>{form.scheduleHour}</td>
//                 <td>{form.medicationName}</td>
//                 <td>{form.dose}</td>
//                 <td><button>Editar</button></td>
//                 <td><button>Eliminar</button></td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       {showPopup && (
//         <div className="popup-overlay">
//           <div className="popup-card">
//             <h2>Agregar Medicación</h2>
//             <input type="text" placeholder="Día" onChange={(e) => setNewMedication({ ...newMedication, day: e.target.value })} />
//             <select onChange={(e) => setNewMedication({ ...newMedication, patientId: parseInt(e.target.value) })}>
//               <option value="">Seleccione un paciente</option>
//               {patients.map((patient) => (
//                 <option key={patient.id} value={patient.id}>{patient.name}</option>
//               ))}
//             </select>
//             <input type="text" placeholder="Medicamento" onChange={(e) => setNewMedication({ ...newMedication, medicationName: e.target.value })} />
//             <input type="text" placeholder="Dosis" onChange={(e) => setNewMedication({ ...newMedication, dose: e.target.value })} />
//             <input type="text" placeholder="Hora" onChange={(e) => setNewMedication({ ...newMedication, scheduleHour: e.target.value })} />
//             <input type="text" placeholder="Observaciones" onChange={(e) => setNewMedication({ ...newMedication, observations: e.target.value })} />
//             <div className="popup-buttons">
//               <button className="save-btn" onClick={handleAddMedication}>Guardar</button>
//               <button className="cancel-btn" onClick={() => setShowPopup(false)}>Cancelar</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Medicacion;









// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./Medicacion.css"; // Archivo de estilos

// interface MedicalForm {
//   id?: number;
//   day: string;
//   patientId: number;
//   medicationName: string;
//   dose: string;
//   scheduleHour: string;
//   observations: string;
// }

// interface Patient {
//   id: number;
//   name: string;
// }

// const Medicacion: React.FC = () => {
//   const [selectedPatient, setSelectedPatient] = useState<string>("");
//   const [medicalForms, setMedicalForms] = useState<MedicalForm[]>([]);
//   const [filteredForms, setFilteredForms] = useState<MedicalForm[]>([]);
//   const [patients, setPatients] = useState<Patient[]>([]);
//   const [showPopup, setShowPopup] = useState(false);
//   const [newMedication, setNewMedication] = useState<MedicalForm>({
//     day: "",
//     patientId: 0,
//     medicationName: "",
//     dose: "",
//     scheduleHour: "",
//     observations: "",
//   });

//   useEffect(() => {
//     const fetchMedicalForms = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get<MedicalForm[]>("https://emmanuel.somee.com/api/v1/MedicalForms", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setMedicalForms(response.data);
//         setFilteredForms(response.data);
//       } catch (error) {
//         console.error("Error al obtener los formularios médicos", error);
//       }
//     };

//     const fetchPatients = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get("https://emmanuel.somee.com/api/v1/Users/GetByRol/Paciente", {
//           headers: { Authorization: `Bearer ${token}` },
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

//     fetchMedicalForms();
//     fetchPatients();
//   }, []);

//   const handleSearch = () => {
//     if (selectedPatient) {
//       setFilteredForms(
//         medicalForms.filter((form) => form.patientId.toString() === selectedPatient)
//       );
//     } else {
//       setFilteredForms(medicalForms);
//     }
//   };

//   const handleAddMedication = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       await axios.post("https://emmanuel.somee.com/api/v1/MedicalForms", newMedication, {
//         headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
//       });
//       setShowPopup(false);
//     } catch (error) {
//       console.error("Error al agregar la medicación", error);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="controls">
//         <label>
//           <h2>Paciente:</h2>
//         </label>
//         <select value={selectedPatient} onChange={(e) => setSelectedPatient(e.target.value)}>
//           <option value="">Seleccione un paciente</option>
//           {patients.map((patient) => (
//             <option key={patient.id} value={patient.id.toString()}>
//               {patient.name}
//             </option>
//           ))}
//         </select>
//         <button className="search-btn" onClick={handleSearch} disabled={!selectedPatient}>Buscar</button>
//         <button className="add-btn" onClick={() => setShowPopup(true)}>Nuevo</button>
//       </div>
//       <div className="table-container">
//         <table>
//           <thead>
//             <tr>
//               <th>Día</th>
//               <th>Paciente</th>
//               <th>Hora</th>
//               <th>Medicamento</th>
//               <th>Dosis</th>
//               <th>Editar</th>
//               <th>Eliminar</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredForms.map((form) => (
//               <tr key={form.id}>
//                 <td>{form.day}</td>
//                 <td>{patients.find((patient) => patient.id === form.patientId)?.name || "Desconocido"}</td>
//                 <td>{form.scheduleHour}</td>
//                 <td>{form.medicationName}</td>
//                 <td>{form.dose}</td>
//                 <td><button>Editar</button></td>
//                 <td><button>Eliminar</button></td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       {showPopup && (
//         <div className="popup-overlay">
//           <div className="popup-card">
//             <h2>Agregar Medicación</h2>
//             <input type="text" placeholder="Día" onChange={(e) => setNewMedication({ ...newMedication, day: e.target.value })} />
//             <select onChange={(e) => setNewMedication({ ...newMedication, patientId: parseInt(e.target.value) })}>
//               <option value="">Seleccione un paciente</option>
//               {patients.map((patient) => (
//                 <option key={patient.id} value={patient.id}>{patient.name}</option>
//               ))}
//             </select>
//             <input type="text" placeholder="Medicamento" onChange={(e) => setNewMedication({ ...newMedication, medicationName: e.target.value })} />
//             <input type="text" placeholder="Dosis" onChange={(e) => setNewMedication({ ...newMedication, dose: e.target.value })} />
//             <input type="text" placeholder="Hora" onChange={(e) => setNewMedication({ ...newMedication, scheduleHour: e.target.value })} />
//             <input type="text" placeholder="Observaciones" onChange={(e) => setNewMedication({ ...newMedication, observations: e.target.value })} />
//             <div className="popup-buttons">
//               <button className="save-btn" onClick={handleAddMedication}>Guardar</button>
//               <button className="cancel-btn" onClick={() => setShowPopup(false)}>Cancelar</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Medicacion;















// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./Medicacion.css";

// interface MedicalForm {
//   id?: number;
//   day: string;
//   patientId: number;
//   medicationName: string;
//   dose: string;
//   scheduleHour: string;
//   observations: string;
// }

// interface Patient {
//   id: number;
//   name: string;
// }

// const Medicacion: React.FC = () => {
//   const [selectedPatient, setSelectedPatient] = useState<string>("");
//   const [medicalForms, setMedicalForms] = useState<MedicalForm[]>([]);
//   const [filteredForms, setFilteredForms] = useState<MedicalForm[]>([]);
//   const [patients, setPatients] = useState<Patient[]>([]);
//   const [showPopup, setShowPopup] = useState(false);
//   const [newMedication, setNewMedication] = useState<MedicalForm>({
//     day: "",
//     patientId: 0,
//     medicationName: "",
//     dose: "",
//     scheduleHour: "",
//     observations: "",
//   });

//   useEffect(() => {
//     const fetchMedicalForms = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get<MedicalForm[]>("https://emmanuel.somee.com/api/v1/MedicalForms", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setMedicalForms(response.data);
//         setFilteredForms(response.data);
//       } catch (error) {
//         console.error("Error al obtener los formularios médicos", error);
//       }
//     };

//     const fetchPatients = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get("https://emmanuel.somee.com/api/v1/Users/GetByRol/Paciente", {
//           headers: { Authorization: `Bearer ${token}` },
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

//     fetchMedicalForms();
//     fetchPatients();
//   }, []);

//   const handleSearch = () => {
//     if (selectedPatient) {
//       setFilteredForms(
//         medicalForms.filter((form) => form.patientId.toString() === selectedPatient)
//       );
//     } else {
//       setFilteredForms(medicalForms);
//     }
//   };

//   const handleAddMedication = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       await axios.post("https://emmanuel.somee.com/api/v1/MedicalForms", newMedication, {
//         headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
//       });
//       setShowPopup(false);
//     } catch (error) {
//       console.error("Error al agregar la medicación", error);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="controls">
//         <label>
//           <h2>Paciente:</h2>
//         </label>
//         <select value={selectedPatient} onChange={(e) => setSelectedPatient(e.target.value)}>
//           <option value="">Seleccione un paciente</option>
//           {patients.map((patient) => (
//             <option key={patient.id} value={patient.id.toString()}>
//               {patient.name}
//             </option>
//           ))}
//         </select>
//         <button className="search-btn" onClick={handleSearch} disabled={!selectedPatient}>Buscar</button>
//         <button className="add-btn" onClick={() => setShowPopup(true)}>Nuevo</button>
//       </div>
//       <div className="table-container">
//         <table>
//           <thead>
//             <tr>
//               <th>Día</th>
//               <th>Paciente</th>
//               <th>Hora</th>
//               <th>Medicamento</th>
//               <th>Dosis</th>
//               <th>Editar</th>
//               <th>Eliminar</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredForms.map((form) => (
//               <tr key={form.id}>
//                 <td>{form.day}</td>
//                 <td>{patients.find((patient) => patient.id === form.patientId)?.name || "Desconocido"}</td>
//                 <td>{form.scheduleHour}</td>
//                 <td>{form.medicationName}</td>
//                 <td>{form.dose}</td>
//                 <td><button>Editar</button></td>
//                 <td><button>Eliminar</button></td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       {showPopup && (
//         <div className="popup-overlay">
//           <div className="popup-card">
//             <h2>Agregar Medicación</h2>
//             <input type="date" onChange={(e) => setNewMedication({ ...newMedication, day: e.target.value })} />
//             <select onChange={(e) => setNewMedication({ ...newMedication, patientId: parseInt(e.target.value) })}>
//               <option value="">Seleccione un paciente</option>
//               {patients.map((patient) => (
//                 <option key={patient.id} value={patient.id}>{patient.name}</option>
//               ))}
//             </select>
//             <input type="text" placeholder="Medicamento" onChange={(e) => setNewMedication({ ...newMedication, medicationName: e.target.value })} />
//             <input type="text" placeholder="Dosis" onChange={(e) => setNewMedication({ ...newMedication, dose: e.target.value })} />
//             <input type="time" onChange={(e) => setNewMedication({ ...newMedication, scheduleHour: e.target.value })} />
//             <input type="text" placeholder="Observaciones" onChange={(e) => setNewMedication({ ...newMedication, observations: e.target.value })} />
//             <div className="popup-buttons">
//               <button className="save-btn" onClick={handleAddMedication}>Guardar</button>
//               <button className="cancel-btn" onClick={() => setShowPopup(false)}>Cancelar</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Medicacion;























import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Medicacion.css";

interface MedicalForm {
  id?: number;
  day: string;
  patientId: number;
  medicationName: string;
  dose: string;
  scheduleHour: string;
  observations: string;
}

interface Patient {
  id: number;
  name: string;
}

const daysOfWeek = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

const Medicacion: React.FC = () => {
  const [selectedPatient, setSelectedPatient] = useState<string>("");
  const [medicalForms, setMedicalForms] = useState<MedicalForm[]>([]);
  const [filteredForms, setFilteredForms] = useState<MedicalForm[]>([]);
  const [patients, setPatients] = useState<Patient[]>([]);
  const [showPopup, setShowPopup] = useState(false);
  const [newMedication, setNewMedication] = useState<MedicalForm>({
    day: "",
    patientId: 0,
    medicationName: "",
    dose: "",
    scheduleHour: "",
    observations: "",
  });

  useEffect(() => {
    const fetchMedicalForms = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get<MedicalForm[]>("https://emmanuel.somee.com/api/v1/MedicalForms", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMedicalForms(response.data);
        setFilteredForms(response.data);
      } catch (error) {
        console.error("Error al obtener los formularios médicos", error);
      }
    };

    const fetchPatients = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("https://emmanuel.somee.com/api/v1/Users/GetByRol/Paciente", {
          headers: { Authorization: `Bearer ${token}` },
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

    fetchMedicalForms();
    fetchPatients();
  }, []);

  const handleSearch = () => {
    if (selectedPatient) {
      setFilteredForms(
        medicalForms.filter((form) => form.patientId.toString() === selectedPatient)
      );
    } else {
      setFilteredForms(medicalForms);
    }
  };

  const handleAddMedication = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.post("https://emmanuel.somee.com/api/v1/MedicalForms", newMedication, {
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      });
      setShowPopup(false);
    } catch (error) {
      console.error("Error al agregar la medicación", error);
    }
  };

  return (
    <div className="container">
      <div className="controls">
        <label>
          <h2>Paciente:</h2>
        </label>
        <select value={selectedPatient} onChange={(e) => setSelectedPatient(e.target.value)}>
          <option value="">Seleccione un paciente</option>
          {patients.map((patient) => (
            <option key={patient.id} value={patient.id.toString()}>
              {patient.name}
            </option>
          ))}
        </select>
        <button className="search-btn" onClick={handleSearch} disabled={!selectedPatient}>Buscar</button>
        <button className="add-btn" onClick={() => setShowPopup(true)}>Nuevo</button>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Día</th>
              <th>Paciente</th>
              <th>Hora</th>
              <th>Medicamento</th>
              <th>Dosis</th>
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {filteredForms.map((form) => (
              <tr key={form.id}>
                <td>{form.day}</td>
                <td>{patients.find((patient) => patient.id === form.patientId)?.name || "Desconocido"}</td>
                <td>{form.scheduleHour}</td>
                <td>{form.medicationName}</td>
                <td>{form.dose}</td>
                <td><button>Editar</button></td>
                <td><button>Eliminar</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-card">
            <h2>Agregar Medicación</h2>
            <select value={newMedication.day} onChange={(e) => setNewMedication({ ...newMedication, day: e.target.value })}>
              <option value="">Seleccione un día</option>
              {daysOfWeek.map((day) => (
                <option key={day} value={day}>{day}</option>
              ))}
            </select>
            <input type="time" onChange={(e) => setNewMedication({ ...newMedication, scheduleHour: e.target.value })} />
            <select onChange={(e) => setNewMedication({ ...newMedication, patientId: parseInt(e.target.value) })}>
              <option value="">Seleccione un paciente</option>
              {patients.map((patient) => (
                <option key={patient.id} value={patient.id}>{patient.name}</option>
              ))}
            </select>
            <input type="text" placeholder="Medicamento" onChange={(e) => setNewMedication({ ...newMedication, medicationName: e.target.value })} />
            <input type="text" placeholder="Dosis" onChange={(e) => setNewMedication({ ...newMedication, dose: e.target.value })} />
            <input type="text" placeholder="Observaciones" onChange={(e) => setNewMedication({ ...newMedication, observations: e.target.value })} />
            <div className="popup-buttons">
              <button className="save-btn" onClick={handleAddMedication}>Guardar</button>
              <button className="cancel-btn" onClick={() => setShowPopup(false)}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Medicacion;
