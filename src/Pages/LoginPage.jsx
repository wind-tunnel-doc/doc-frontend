import React, { useState } from "react";
import Login from "../component/Login.jsx";
import Register from "../component/Register.tsx";

function LoginPage() {
  // 当前选中的导航项的状态
  const [selectedTab, setSelectedTab] = useState("login");

  // 点击导航项时切换选项
  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* 导航栏容器 */}
      <nav className="flex justify-center space-x-4">
        {/* 导航项 */}
        <NavItem
          label="登录"
          tab="login"
          selectedTab={selectedTab}
          onClick={handleTabChange}
        />
        <NavItem
          label="注册"
          tab="register"
          selectedTab={selectedTab}
          onClick={handleTabChange}
        />
      </nav>

      {/* 根据当前选中的导航项显示不同的组件 */}
      <div className="flex justify-center mt-4">
        {selectedTab === "login" ? <Login/> : <Register/>}
      </div>
    </div>
  );
}

// 定义导航项组件
function NavItem({ label, tab, selectedTab, onClick }) {
  const isSelected = selectedTab === tab;

  return (
    <button
      onClick={() => onClick(tab)}
      className={`px-4 py-2 text-lg font-semibold transition-colors duration-300 ${
        isSelected
          ? "border-b-2 border-gray-500"
          : "text-gray-500 hover:text-gray-500"
      }`}
    >
      {label}
    </button>
  );
}

export default LoginPage;
