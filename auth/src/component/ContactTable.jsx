// import React, { useEffect } from "react";
// import {
//   useDeleteContactMutation,
//   useGetContactQuery,
// } from "../redux/api/contactApi";
// import Cookies from "js-cookie";
// import { useDispatch, useSelector } from "react-redux";
// import { addContact, setSearchTerm } from "../redux/services/contactSlice";
// import { Table } from "@mantine/core";
// import { Menu, Button, rem } from "@mantine/core";
// import { Link } from "react-router-dom";
// import { Input } from "@mantine/core";
// import Swal from "sweetalert2";

// const ContactTable = () => {
//   const token = Cookies.get("token");
//   const { data } = useGetContactQuery(token);
//   const contact = useSelector((state) => state?.contactSlice?.contact);
//   const dispatch = useDispatch();
//   const searchTerm = useSelector((state) => state?.contactSlice?.searchTerm);
//   const [deleteContact] = useDeleteContactMutation();

//   useEffect(() => {
//     dispatch(addContact(data?.contacts?.data));
//   }, [data]);
//   // console.log(data);

//   const deleteHandler = (id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then(async (result) => {
//       if (result.isConfirmed) {
//         Swal.fire("Deleted!", "Your file has been deleted.", "success");
//         const data = await deleteContact({id,token});
//       }
//     });
//   };

//   const rows = contact
//     ?.filter((item) => {
//       if (searchTerm === "") {
//         return item;
//       } else if (item?.name.toLowerCase().includes(searchTerm.toLowerCase())) {
//         return item;
//       }
//     })
//     .map((contact) => (
//       <tr key={contact?.id}>
//         <td>{contact?.name}</td>
//         <td>{contact?.phone}</td>
//         <td>{contact?.email === null ? "khine@gmail.com" : contact?.email}</td>
//         <td>{contact?.address === null ? "ho ner hmer" : contact?.address}</td>
//         <td>
//           <Menu width={200} shadow="md">
//             <Menu.Target>
//               <Button variant="outline">...</Button>
//             </Menu.Target>

//             <Menu.Dropdown>
//               <Menu.Item component="a">
//                 <button
//                   onClick={() => deleteHandler(contact?.id)}
//                   className=" text-red-600"
//                 >
//                   Delete
//                 </button>
//               </Menu.Item>

//               <Menu.Item>
//                 <Link to={`/singleContact/${contact?.id}`}>
//                   <p>user info</p>
//                 </Link>
//               </Menu.Item>
//             </Menu.Dropdown>
//           </Menu>
//         </td>
//       </tr>
//     ));
//   return (
//     <div>
//       <div className=" flex justify-center items-center mt-5">
//         <Link to={"/createContact"}>
//           <button className=" bg-pink-500 px-2 py-1 ">Create Contact</button>
//         </Link>

//         <Input
//           onChange={(e) => dispatch(setSearchTerm(e.target.value))}
//           variant="filled"
//           placeholder="Search"
//         />
//       </div>
//       <Table>
//         <thead>
//           <tr>
//             <th>name</th>
//             <th>phone</th>
//             <th>email</th>
//             <th>address</th>
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>{rows}</tbody>
//       </Table>
//     </div>
//   );
// };

// export default ContactTable;
