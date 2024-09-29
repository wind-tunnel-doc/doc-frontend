import React from 'react';
import {
  FaFeatherAlt,
  FaStar,
  FaClock,
  FaBoxes,
  FaLock,
  FaAngleDown,
  FaBell,
  FaUserCircle,
} from 'react-icons/fa';
import { AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai';
const knowledgeBases = ['知识库1', '知识库2', '知识库3'];
function Sidebar() {
  return (
    <div className="h-screen w-64 bg-white shadow-lg flex flex-col justify-between">
      {/* Top Section */}
      <div>
        {/* Logo and Profile */}
        <div className="flex items-center justify-between p-4 border-b">
          <img src="/logo.png" alt="Logo" className="w-8 h-8" />
          <div className="flex items-center space-x-2">
            <FaBell className="text-gray-400" />
            <FaUserCircle className="text-gray-400" />
          </div>
        </div>

        {/* Search Bar */}
        <div className="p-4">
          <div className="flex items-center bg-gray-100 rounded-lg">
            <AiOutlineSearch className="text-gray-400 ml-2" />
            <input
              type="text"
              placeholder="搜索"
              className="bg-transparent px-2 py-1 w-full outline-none"
            />
            <AiOutlinePlus className="text-gray-400 mr-2" />
          </div>
        </div>

        {/* Menu Items */}
        <div className="p-4 space-y-4">
          <div className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100">
            <FaClock />
            <span>开始</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-700">
            <FaFeatherAlt />
            <span>小记</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-700">
            <FaStar />
            <span>收藏</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-700">
            <FaBoxes />
            <span>递递</span>
          </div>
        </div>

        {/* Knowledge Base */}
        <div className="p-4">
          <div className="flex items-center justify-between text-gray-700">
            <span>知识库</span>
            <FaAngleDown />
          </div>
          <div className="ml-6 mt-2">
            {knowledgeBases &&
              knowledgeBases.map((item, index) => (
                <div key={index} className="flex items-center space-x-2 text-gray-400">
                  <FaLock />
                  <span>{item}</span>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* More Section (fixed at the bottom) */}
      <div className="p-4 border-t">
        <div className="flex items-center space-x-2 text-gray-700">
          <span>更多</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
