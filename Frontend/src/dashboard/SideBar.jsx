import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloud, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import Sonorus from '../assets/Sonorus.JPG';
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";

const SideBar = () => {
  const {user} = useContext(AuthContext)
  return (
    <div className="h-screen">
      <Sidebar aria-label="Sidebar with content separator example" className="h-full bg-gray-800 text-white">
      <Sidebar.Logo 
      href="/" 
      img={Sonorus} 
      imgAlt="Sonorus logo"
      className="w-16 h-16">
        <p className="text-black">
          Sonorus
        </p>
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie} className="my-4">
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href='/admin/dashboard/upload' icon={HiOutlineCloudUpload} className="my-4">
            Upload 
          </Sidebar.Item>
          <Sidebar.Item href='/admin/dashboard/manage' icon={HiInbox} className="my-4">
            Inventory
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiTable} className="my-4">
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    </div>
    
  )
}

export default SideBar

