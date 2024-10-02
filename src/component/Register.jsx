import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../asset/logo.webp';

function Register() {
  const [username, setUsername] = useState(''); // 用户名代替手机号
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => setUsername(e.target.value); // 处理用户名输入
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const handleRegister = async (e) => {
    e.preventDefault();

    // 验证密码是否匹配
    if (password !== confirmPassword) {
      console.error('密码不匹配');
      alert('两次输入的密码不匹配！');
      return;
    }

    // 构造注册请求数据
    const registerData = {
      username: username, // 将 phone 改为 username
      password: password,
    };

    // 向后端发送注册请求
    try {
      const response = await fetch('https://your-backend-api.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerData),
      });

      const result = await response.json();

      if (response.ok) {
        // 如果注册成功，跳转到登录页面或主页
        console.log('注册成功:', result);
        navigate('/login'); // 你可以跳转到登录页或其他页面
      } else {
        // 如果注册失败，显示错误信息
        console.error('注册失败:', result.message);
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
        <form onSubmit={handleRegister}>
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

          {/* Confirm Password input */}
          <div className="mb-4">
            <input
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              placeholder="请再次输入密码"
              className="border px-4 py-2 w-full rounded-lg focus:outline-none"
            />
          </div>

          {/* Register Button */}
          <div className="mb-4">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg w-full"
            >
              注册
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

export default Register;
