import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloud, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import Sonorus from '../assets/Sonorus.JPG';
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";

const SideBar = () => {
  const {user} = useContext(AuthContext)
  return (
    <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Logo 
      href="/" 
      img={Sonorus} 
      imgAlt="Sonorus logo"
      className="w-16 h-16">
        <p>
          Sonorus
        </p>
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie} className="my-4">
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href='/admin/dashboard/upload' icon={HiOutlineCloudUpload} className="my-4">
            Upload Mobile
          </Sidebar.Item>
          <Sidebar.Item href='/admin/dashboard/manage' icon={HiInbox} className="my-4">
            Products
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser} className="my-4">
            Users
          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={HiArrowSmRight} className="my-4">
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiTable} className="my-4">
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}

export default SideBar

