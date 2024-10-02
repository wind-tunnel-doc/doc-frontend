const knowledgeBaseData = [
  { title: '默认知识库', description: '1 分钟玩转语雀文档', date: '04-02 11:36' },
  { title: '知识库2', description: '描述2', date: '04-02 11:37' },
  { title: '知识库3', description: '描述3', date: '04-02 11:38' },
  { title: '知识库4', description: '描述4', date: '04-02 11:39' },
  { title: '知识库5', description: '描述5', date: '04-02 11:40' }
];

function Content() {
  // 使用 map 函数遍历知识库数组并创建每个知识库项的组件
  const renderKnowledgeItems = () => {
    return knowledgeBaseData.map((item, idx) => (
      <div key={idx} className="border h-48 bg-white p-4 rounded-lg shadow-md m-2">
        <div className="flex items-center">
          <div className="bg-blue-200 w-10 h-10 rounded mr-4"></div>
          <div>
            <p className="text-lg font-semibold">{item.title}</p>
            <div className="text-xs text-gray-500">{item.description}</div>
          </div>
        </div>
        <div className="text-xs text-gray-400 mt-6 text-right">{item.date}</div>
      </div>
    ));
  };

  return (
    <div className="flex-1 p-6">
      <h1 className="text-2xl font-semibold mb-6">知识库</h1>
      
      {/* 顶部选择栏和新增按钮 */}
      <div className="flex ml-2 justify-between items-center mb-6">
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg focus:outline-none">个人的</button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg focus:outline-none">邀请协作的</button>
        </div>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:outline-none">新增</button>
      </div>

      {/* 知识库列表 */}
      <div className="mt-4 grid grid-cols-4 gap-1">
        {renderKnowledgeItems()}
      </div>
    </div>
  );
}

export default Content;
