import { MessageSquare, Github, Terminal, Bot, Clock, Cloud, Brain, DollarSign, Users, TrendingUp, SignpostBig, Code, BarChart2, Workflow, FileCode } from 'lucide-react'

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white p-8">
      {/* 封面 */}
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-[#42b983]">
          Devin: 下一代数字员工
        </h1>
        <p className="text-xl text-gray-300">技术分享</p>
      </header>

      {/* Devin介绍 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Devin 是什么？</h2>
        <div className="text-center mb-12">
          <p className="mb-2">由 Cognition Labs 开发的新一代 AI 开发助手</p>
          <p>目标：打造端到端的软件开发代理，提升工程团队效率</p>
        </div>
      </section>

      {/* AI编程发展四段论 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">AI编程发展四段论</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <MessageSquare className="w-12 h-12 text-[#42b983] mb-4" />
            <h3 className="text-xl font-semibold mb-2">ChatGPT</h3>
            <p>对话式编程助手</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <Github className="w-12 h-12 text-[#42b983] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Github Copilot</h3>
            <p>实时代码补全</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <Terminal className="w-12 h-12 text-[#42b983] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cursor</h3>
            <p>IDE深度集成</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <Bot className="w-12 h-12 text-[#42b983] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Devin</h3>
            <p>自主开发代理</p>
          </div>
        </div>
      </section>

      {/* 新范式特征 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">新范式特征</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <Clock className="w-12 h-12 text-[#42b983] mb-4" />
            <h3 className="text-xl font-semibold mb-2">异步体验</h3>
            <p className="text-gray-300">实时响应，异步执行</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <Cloud className="w-12 h-12 text-[#42b983] mb-4" />
            <h3 className="text-xl font-semibold mb-2">云端虚拟机</h3>
            <p className="text-gray-300">强大的云端运行环境</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <Brain className="w-12 h-12 text-[#42b983] mb-4" />
            <h3 className="text-xl font-semibold mb-2">知识积累</h3>
            <p className="text-gray-300">持续学习与经验沉淀</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <DollarSign className="w-12 h-12 text-[#42b983] mb-4" />
            <h3 className="text-xl font-semibold mb-2">任务收费</h3>
            <p className="text-gray-300">按需付费，价值导向</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-xl italic text-[#42b983]">
            "Cursor 是程序员的Copilot，Devin 是老板们的 Scaling Law"
          </p>
        </div>
      </section>

      {/* 未来思考 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">未来思考</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <Users className="w-12 h-12 text-[#42b983] mb-4" />
            <h3 className="text-xl font-semibold mb-2">社会影响</h3>
            <p>Coding Agent如何重塑工程师角色与组织形态？</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <TrendingUp className="w-12 h-12 text-[#42b983] mb-4" />
            <h3 className="text-xl font-semibold mb-2">能力突破</h3>
            <p>o3超越人类能力的意义与启示</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <SignpostBig className="w-12 h-12 text-[#42b983] mb-4" />
            <h3 className="text-xl font-semibold mb-2">发展空间</h3>
            <p>Agent、可拓展个性化、o3等新技术浪潮</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>让我们一起探讨AI开发助手的未来发展方向</p>
        </div>
      </section>

      {/* 核心功能 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">核心功能</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <Code className="w-12 h-12 text-[#42b983] mb-4" />
            <h3 className="text-xl font-semibold mb-2">代码生成</h3>
            <p>智能编写和优化代码</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <Terminal className="w-12 h-12 text-[#42b983] mb-4" />
            <h3 className="text-xl font-semibold mb-2">命令行操作</h3>
            <p>自动执行系统命令</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <FileCode className="w-12 h-12 text-[#42b983] mb-4" />
            <h3 className="text-xl font-semibold mb-2">文件管理</h3>
            <p>智能文件操作和管理</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <Brain className="w-12 h-12 text-[#42b983] mb-4" />
            <h3 className="text-xl font-semibold mb-2">问题诊断</h3>
            <p>自主分析和解决问题</p>
          </div>
        </div>
      </section>

      {/* 市场对比 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">市场对比</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <BarChart2 className="w-12 h-12 text-[#42b983] mb-4" />
            <h3 className="text-xl font-semibold mb-2">功能完整性</h3>
            <p>全方位的开发能力支持</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <Cloud className="w-12 h-12 text-[#42b983] mb-4" />
            <h3 className="text-xl font-semibold mb-2">云端集成</h3>
            <p>深度云端环境整合</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <Bot className="w-12 h-12 text-[#42b983] mb-4" />
            <h3 className="text-xl font-semibold mb-2">自主能力</h3>
            <p>更强的独立解决问题能力</p>
          </div>
        </div>
      </section>

      {/* 使用流程 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">使用流程</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <MessageSquare className="w-12 h-12 text-[#42b983] mb-4" />
            <h3 className="text-xl font-semibold mb-2">需求描述</h3>
            <p>清晰描述开发需求</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <Workflow className="w-12 h-12 text-[#42b983] mb-4" />
            <h3 className="text-xl font-semibold mb-2">自动执行</h3>
            <p>AI自主完成开发任务</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <Users className="w-12 h-12 text-[#42b983] mb-4" />
            <h3 className="text-xl font-semibold mb-2">人机协作</h3>
            <p>必要时进行交互确认</p>
          </div>
        </div>
      </section>

      {/* 实际案例 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">实际案例</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <Code className="w-12 h-12 text-[#42b983] mb-4" />
            <h3 className="text-xl font-semibold mb-2">代码重构</h3>
            <p>自动优化代码结构和性能</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <FileCode className="w-12 h-12 text-[#42b983] mb-4" />
            <h3 className="text-xl font-semibold mb-2">功能开发</h3>
            <p>独立完成新功能实现</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
