import React, { useEffect, useState } from "react";
import {
  useDeleteContactMutation,
  useGetContactQuery,
} from "../redux/api/contactApi";
import Cookies from "js-cookie";
import { Table } from "@mantine/core";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { addContact, setSearchTerm } from "../redux/services/contactSlice";
import { Input } from "@mantine/core";
import { Menu, Button, rem } from "@mantine/core";

const ContactTable = () => {
  const token = Cookies.get("token");
  const { data, isLoading } = useGetContactQuery(token);
  const [deleteContact] = useDeleteContactMutation();
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contactSlice.contact);
  const searchTerm = useSelector((state) => state.contactSlice.searchTerm);
  console.log(contacts);
  // const [currentPage,setCurrentPage] = useState(1)
  // const recordsPerPage = 5
  // const lastIndex = currentPage * recordsPerPage
  // const firstIndex = lastIndex - recordsPerPage
  // const records = contacts?.slice(firstIndex,lastIndex);
  // const npage = Math.ceil(contacts?.length / recordsPerPage)
  // const numbers = [...Array(npage + 1).keys()].slice(1)

  // const prePage = ()=>{
  //   // if(currentPage !== firstIndex ){
  //   if(currentPage !== 1 ){
  //     setCurrentPage(currentPage - 1)
  //   }
  // }

  // const changePage  = (id)=>{
  //   setCurrentPage(id)
  // }
  // const nextPage = ()=>{
  //   // if(currentPage !== lastIndex ){
  //   if(currentPage !== npage ){
  //     setCurrentPage(currentPage + 1)
  //   }
  // }

  useEffect(() => {
    dispatch(addContact(data?.contacts?.data));
  }, [data]);
  // console.log(data?.contacts?.data);
  if (isLoading) {
    return (
      <div className=" flex justify-center h-screen items-center">
        <h1>Loading...</h1>
      </div>
    );
  }

  const deleteHandler = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        const data = await deleteContact({ id, token });
      }
    });
  };

  
  return (
    <>
      <div className=" text-center mt-5 flex justify-center items-center">
        <Link to={"/createContact"}>
          <button className=" bg-green-500 px-4 py-1 text-white">
            Create Contact
          </button>
        </Link>
        <Input
          value={searchTerm}
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
          variant="filled"
          placeholder="Search"
        />
      </div>
      <div className=" mt-10">
        <Table>
          {contacts?.length === 0 ? null : (
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th >Address</th>
                <th className=" col-span-1"></th>
                {/* <th></th> */}
              </tr>
            </thead>
          )}

          <tbody>
            {/* {data?.contacts?.data?.map(data =>{ */}
            {contacts?.filter((item) => {
                if (searchTerm === "") {
                  return item;
                } else if (
                  item?.name.toLowerCase().includes(searchTerm.toLowerCase())  
                ) {
                  return item;
                }
              }).map((contact) => {
                return (
                  <tr key={contact?.id}>
                    <td>{contact?.name}</td>
                    <td>
                      {contact?.email == null ? "khine@gmail.com" : contact?.email}
                    </td>
                    <td>{contact?.phone}</td>
                    <td>{contact?.address == null ? "dagon" : contact?.address}</td>
                    <td>
                      {/* <button onClick={async()=> await deleteContact({id:contact?.id,token})} className=' text-red-500'>Delete</button> */}
                      
                    <Menu width={100} shadow="md">
                      <Menu.Target>
                        <Button variant="outline">...</Button>
                      </Menu.Target>

                      <Menu.Dropdown>
                        <Menu.Item component="a" >
                        <button
                        onClick={() => deleteHandler(contact?.id)}
                        className=" text-red-500"
                      >
                        Delete
                      </button>
                        </Menu.Item>

                        <Menu.Item>
                          <Link to={`/singleContact/${contact?.id}`}>
                           <p>user info</p>
                          </Link>
                        </Menu.Item>
                      </Menu.Dropdown>
                    </Menu>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>

        {/* <nav className=" ">
          <ul className=" pagination flex justify-center items-center mt-5 mb-10">
            <li className=" page-item p-3 border cursor-pointer text-blue-700">
              <a onClick={prePage} href="#" className="page-link">Prev</a>
            </li>

            {
              numbers?.map((n,i)=>{
                return(
                  <li className=" page-item p-3 border cursor-pointer text-blue-700" key={i}>
                    <a href="#" className="page-item">{n}</a>
                  </li>
                )
              })
            }

            <li className=" page-item p-3 border cursor-pointer text-blue-700">
              <a onClick={nextPage} href="#" className="page-link">Next</a>
            </li>
          </ul>
        </nav> */}
      </div>
    </>
  );
};

export default ContactTable;
