import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../asset/logo.webp';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = async (e) => {
    e.preventDefault();

    // 构造登录请求数据
    const loginData = {
      username: username, // 将 phone 改为 username
      password: password,
    };

    // 向后端发送登录请求
    try {
      const response = await fetch('https://your-backend-api.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      const result = await response.json();

      if (response.ok) {
        // 如果登录成功，跳转到主页
        console.log('登录成功:', result);
        navigate('/home');
      } else {
        // 如果登录失败，显示错误信息
        console.error('登录失败:', result.message);
      }
    } catch (error) {
      console.error('网络错误:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="w-16 h-16" />
        </div>

        {/* Form */}
        <form onSubmit={handleLogin}>
          {/* Username input */}
          <div className="mb-4">
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              placeholder="请输入用户名"
              className="border px-4 py-2 w-full rounded-lg focus:outline-none"
            />
          </div>

          {/* Password input */}
          <div className="mb-4">
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="请输入密码"
              className="border px-4 py-2 w-full rounded-lg focus:outline-none"
            />
          </div>

          {/* Login Button */}
          <div className="mb-4">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg w-full"
            >
              登录
            </button>
          </div>
        </form>

        {/* Language switch */}
        <div className="text-center mt-4 text-gray-400">
          <a href="#" className="mx-2">中文</a> / <a href="#" className="mx-2">English</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
