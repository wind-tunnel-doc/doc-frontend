import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Editor from './Editor';

// 假设这是后端 API 的 base URL
const API_BASE_URL = 'https://your-backend-api.com';

function DocumentPage() {
  const { id } = useParams();  // 从 URL 中获取文档 ID
  // const [documentData, setDocumentData] = useState(null); // 文档数据状态
  const [loading, setLoading] = useState(true); // 加载状态
  const [error, setError] = useState(null); // 错误状态
  
  const documentData = {title: "Document Title", author: "Author Name", content: "Document Content"}
  // useEffect(() => {
  //   // 根据文档 ID 获取文档内容
  //   async function fetchDocument() {
  //     try {
  //       const response = await fetch(`${API_BASE_URL}/documents/${id}`);
  //       if (!response.ok) {
  //         throw new Error('文档加载失败');
  //       }
  //       const data = await response.json();
  //       setDocumentData(data); // 设置文档数据
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setLoading(false); // 结束加载
  //     }
  //   }

  //   fetchDocument();
  // }, [id]);

  // // 如果加载中，显示加载状态
  // if (loading) {
  //   return <div>正在加载文档...</div>;
  // }

  // // 如果加载失败，显示错误
  // if (error) {
  //   return <div>加载失败: {error}</div>;
  // }

  // 渲染文档内容
  return (
    <div className="document-container">
      <Editor />
    </div>
  );
}

export default DocumentPage;
