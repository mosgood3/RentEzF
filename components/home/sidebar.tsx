"use client";
import { useState } from "react";
import {
  FaHome,
  FaUsers,
  FaChartBar,
  FaTools,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";
import {
  RiHomeSmile2Fill,
  RiArrowRightSLine,
  RiArrowLeftSLine,
} from "react-icons/ri";
import { LogOut } from "../actions";

interface SidebarProps {
  sidebarCollapsed: boolean;
  setSidebarCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({
  sidebarCollapsed,
  setSidebarCollapsed,
}: SidebarProps) {
  // State for mobile off-canvas menu
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleLogout = () => {
    console.log("Logging out...");
    // Replace with your own logout logic
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <nav
        className={`hidden md:flex flex-col fixed top-0 left-0 h-full bg-gradient-to-r from-gray-800 via-slate-800 to-gray-800  text-white p-6 transition-all duration-300 ${
          sidebarCollapsed ? "w-20" : "w-60"
        }`}
      >
        <div className="flex flex-col justify-between h-full">
          <div>
            {/* Logo/Header with collapse toggle */}
            <div className="flex pb-4 border-b-2 border-gray-500 items-center justify-between mb-10">
              <div className="flex items-center">
                <RiHomeSmile2Fill className="text-2xl" />
                {!sidebarCollapsed && (
                  <span className="ml-2 text-lg font-semibold">RentEz</span>
                )}
              </div>
              <button
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="cursor-pointer focus:outline-none"
              >
                {sidebarCollapsed ? (
                  <RiArrowRightSLine className="text-2xl" />
                ) : (
                  <RiArrowLeftSLine className="text-2xl" />
                )}
              </button>
            </div>

            {/* Navigation List */}
            <ul className="space-y-4">
              <li>
                <a
                  href="#dashboard"
                  className="flex items-center text-md space-x-4 w-full p-2 hover:bg-gray-500 rounded"
                >
                  <FaHome className="text-md" />
                  {!sidebarCollapsed && <span>Dashboard</span>}
                </a>
              </li>
              <li>
                <a
                  href="#manage-tenants"
                  className="flex items-center space-x-4 w-full p-2 hover:bg-gray-500 rounded"
                >
                  <FaUsers className="text-md" />
                  {!sidebarCollapsed && <span>Manage Tenants</span>}
                </a>
              </li>
              <li>
                <a
                  href="#financial-tracking"
                  className="flex items-center space-x-4 w-full p-2 hover:bg-gray-500 rounded"
                >
                  <FaChartBar className="text-md" />
                  {!sidebarCollapsed && <span>Financial Tracking</span>}
                </a>
              </li>
              <li>
                <a
                  href="#maintenance"
                  className="flex items-center space-x-4 w-full p-2 hover:bg-gray-500 rounded"
                >
                  <FaTools className="text-md" />
                  {!sidebarCollapsed && <span>Maintenance</span>}
                </a>
              </li>
              <li>
                <a
                  href="#administrative"
                  className="flex items-center space-x-4 w-full p-2 hover:bg-gray-500 rounded"
                >
                  <MdOutlineSecurity className="text-md" />
                  {!sidebarCollapsed && <span>Administrative</span>}
                </a>
              </li>
            </ul>
          </div>

          {/* Bottom Buttons */}
          <div className="border-t-2 pt-2 border-gray-500">
            <button
              onClick={handleLogout}
              className="flex cursor-pointer items-center text-md p-2 space-x-4 w-full hover:bg-blue-600 rounded hover:text-white transition"
            >
              <IoMdSettings className="text-md" />
              {!sidebarCollapsed && <span>Settings</span>}
            </button>
            <button
              onClick={LogOut}
              className="flex cursor-pointer items-center text-md space-x-4 w-full p-2 hover:bg-red-600 rounded hover:text-white transition"
            >
              <IoLogOut className="text-md" />
              {!sidebarCollapsed && <span>Logout</span>}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 left-0 w-full text-slate-800 p-4 flex items-center justify-between z-50">
        <div className="flex items-center">
          <RiHomeSmile2Fill className="text-3xl" />
          <span className="ml-2 text-lg font-semibold">RentEz</span>
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="focus:outline-none"
        >
          {menuOpen ? (
            <FaTimes className="text-2xl cursor-pointer text-white" />
          ) : (
            <FaBars className="text-2xl cursor-pointer text-slate-800" />
          )}
        </button>
      </header>

      {/* Mobile Off-Canvas Sidebar */}
      {menuOpen && (
        <div className="md:hidden fixed top-0 right-0 w-64 h-full bg-gray-800 text-white p-6 z-40 transition-transform duration-300 flex flex-col justify-between">
          <div className="mt-16">
            <ul className="space-y-4  pb-4">
              <li>
                <a
                  href="#dashboard"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center space-x-4 w-full p-2 hover:bg-gray-500 rounded text-sm"
                >
                  <FaHome className="text-sm font-light" />
                  <span>Dashboard</span>
                </a>
              </li>
              <li>
                <a
                  href="#manage-tenants"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center space-x-4 w-full p-2 hover:bg-gray-500 rounded text-sm"
                >
                  <FaUsers className="text-sm font-light" />
                  <span>Manage Tenants</span>
                </a>
              </li>
              <li>
                <a
                  href="#financial-tracking"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center space-x-4 w-full p-2 hover:bg-gray-500 rounded text-sm"
                >
                  <FaChartBar className="text-sm font-light" />
                  <span>Financial Tracking</span>
                </a>
              </li>
              <li>
                <a
                  href="#maintenance"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center space-x-4 w-full p-2 hover:bg-gray-500 rounded text-sm"
                >
                  <FaTools className="text-sm font-light" />
                  <span>Maintenance</span>
                </a>
              </li>
              <li>
                <a
                  href="#administrative"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center space-x-4 w-full p-2 hover:bg-gray-500 rounded text-sm"
                >
                  <MdOutlineSecurity className="text-sm font-light" />
                  <span>Administrative</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile Bottom Buttons */}
          <div className="mt-4 border-t-2 pt-2 border-gray-500">
            <button
              onClick={() => {
                handleLogout();
                setMenuOpen(false);
              }}
              className="flex items-center text-sm pb-2 space-x-4 w-full p-2 hover:bg-blue-600 rounded hover:text-white transition"
            >
              <IoMdSettings className="text-sm" />
              <span>Settings</span>
            </button>
            <button
              onClick={() => {
                LogOut();
                setMenuOpen(false);
              }}
              className="flex items-center text-sm space-x-4 w-full p-2 hover:bg-red-600 rounded hover:text-white transition"
            >
              <IoLogOut className="text-sm" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
