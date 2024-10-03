import React, { useState, useEffect } from 'react';
// 引入编辑器组件
import BraftEditor from 'braft-editor';
// 引入编辑器样式
import 'braft-editor/dist/index.css';

export default function Editor() {
  // 创建一个空的 editorState 作为初始值
  const [editorState, setEditorState] = useState(BraftEditor.createEditorState(null));

  useEffect(() => {
    // 假设此处从服务端获取 html 格式的编辑器内容
    async function fetchContent() {
      // const htmlContent = await fetchEditorContent();
      // 使用 BraftEditor.createEditorState 将 html 字符串转换为编辑器需要的 editorState
      // setEditorState(BraftEditor.createEditorState(htmlContent));
    }
    fetchContent();
  }, []);

  const submitContent = async () => {
    // 在编辑器获得焦点时按下 ctrl+s 会执行此方法
    // 编辑器内容提交到服务端之前，可直接调用 editorState.toHTML() 来获取 HTML 格式的内容
    const htmlContent = editorState.toHTML();
    // const result = await saveEditorContent(htmlContent);
  };

  const handleEditorChange = (editorState) => {
    setEditorState(editorState);
  };

  return (
    <div className="my-component">
      <BraftEditor
        value={editorState}
        onChange={handleEditorChange}
        onSave={submitContent}
      />
    </div>
  );
}
