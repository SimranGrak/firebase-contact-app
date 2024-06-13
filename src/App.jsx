import Navbar from './components/Navbar';
import { IoMdSearch } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import {collection, onSnapshot} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./config/firebase";
import Contactcard from './components/Contactcard';
import Addandupdatecontact from './components/Addandupdatecontact';
import useDisclosure from './hooks/useDisclosure';
import { ToastContainer,} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Notfoundcontact from './components/Notfoundcontact';


const App = () => {
  const[contacts,setContacts]=useState([]);
  const{isOpen,onOpen,onClose}=useDisclosure();



  useEffect(()=>{
  const getContacts=async()=>{
  try {
    
    const contactsRef=collection(db,"contacts");
   

    onSnapshot(contactsRef,(snapshot)=>{
      const contactLists=snapshot.docs.map((doc)=>{
        return {
          id:doc.id,
          ...doc.data(),
        };
      });
      setContacts(contactLists);
      return contactLists;
    });

  
  } catch (error) {
    console.log(error);
  }
  };
  getContacts();
  },[]);

  const filteredContacts=(e)=>{
    const value=e.target.value;

    const contactsRef=collection(db,"contacts");
   

    onSnapshot(contactsRef,(snapshot)=>{
      const contactLists=snapshot.docs.map((doc)=>{
        return {
          id:doc.id,
          ...doc.data(),
        };
      });

      const filteredContacts=contactLists.filter(contact=>contact.name.toLowerCase().includes(value.toLowerCase()))
      setContacts(filteredContacts);


      return filteredContacts;
    });
  };

  return (
  <>
  <div className='mx-auto max-w-[370px] px-4'>

    <Navbar/>
     <div className='flex gap-2'>
     <div className='relative flex flex-grow items-center'>
    <IoMdSearch className='absolute ml-1 text-3xl text-white'/>
      <input
      onChange={filteredContacts}
      type="text" className='h-10 flex-grow rounded-md border border-white bg-transparent pl-9 text-white '/>
    </div>
    
    <CiCirclePlus onClick={onOpen}className='cursor-pointer text-5xl text-white'/>
   
     </div>
  <div className='mt-4 flex flex-col gap-3'>
    {contacts.length<=0?<Notfoundcontact/>:
      contacts.map((contact)=> (
       <Contactcard key={contact.id} contact={contact}/>
      ))}
  </div>
  </div>
 <Addandupdatecontact onClose={onClose} isOpen={isOpen}/>
 <ToastContainer position='bottom-center'/>
  </>
  );
};

export default App;
