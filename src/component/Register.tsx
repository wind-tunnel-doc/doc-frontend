import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../asset/logo.webp';
// import { Request } from './types'; // 导入你定义的接口
export interface Request {
  username: string;
  password: string;
  confirmPassword: string;
  nickName: string;
  phone: string;
  sex: string;
  avatar: string | null;
}
const Register: React.FC = () => {
  const [formData, setFormData] = useState<Request>({
    username: '',
    password: '',
    confirmPassword: '',
    nickName: '',
    phone: '',
    sex: 'male', // 默认选择男性
    avatar: null,
  });

  const navigate = useNavigate();

  // 处理表单字段的变化，更新状态
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // 处理表单提交
  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 验证密码是否匹配
    if (formData.password !== formData.confirmPassword) {
      alert('两次输入的密码不匹配！');
      return;
    }

    // 构造注册请求数据
    const { confirmPassword, ...registerData } = formData; // 去除 confirmPassword 字段

    // 发送注册请求
    try {
      const response = await fetch('https://localhost:9000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerData),
      });

      const result = await response.json();

      if (response.ok) {
        // 注册成功，跳转到登录页面
        navigate('/login');
      } else {
        // 注册失败，显示错误信息
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
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="请输入用户名"
              className="border px-4 py-2 w-full rounded-lg focus:outline-none"
            />
          </div>

          {/* Nickname input */}
          <div className="mb-4">
            <input
              type="text"
              name="nickName"
              value={formData.nickName}
              onChange={handleInputChange}
              placeholder="请输入昵称"
              className="border px-4 py-2 w-full rounded-lg focus:outline-none"
            />
          </div>

          {/* Password input */}
          <div className="mb-4">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="请输入密码"
              className="border px-4 py-2 w-full rounded-lg focus:outline-none"
            />
          </div>

          {/* Confirm Password input */}
          <div className="mb-4">
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="请再次输入密码"
              className="border px-4 py-2 w-full rounded-lg focus:outline-none"
            />
          </div>

          {/* Phone input (可选) */}
          <div className="mb-4">
            <input
              type="tel"
              name="phone"
              value={formData.phone || ''}
              onChange={handleInputChange}
              placeholder="请输入手机号 (可选)"
              className="border px-4 py-2 w-full rounded-lg focus:outline-none"
            />
          </div>

          {/* Sex select */}
          <div className="mb-4">
            <select
              name="sex"
              value={formData.sex}
              onChange={handleInputChange}
              className="border px-4 py-2 w-full rounded-lg focus:outline-none"
            >
              <option value="male">男</option>
              <option value="female">女</option>
            </select>
          </div>

          {/* Avatar input (可选) */}
          <div className="mb-4">
            <input
              type="file"
              name="avatar"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormData({
                  ...formData,
                  avatar: e.target.files ? e.target.files[0].name : null,
                })
              }
              className="border px-4 py-2 w-full rounded-lg focus:outline-none"
              placeholder='选择头像'
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
};

export default Register;
