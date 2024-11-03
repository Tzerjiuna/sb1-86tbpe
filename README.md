# 管理系统

一个现代化的后台管理系统，基于 React + TypeScript + Tailwind CSS 构建，采用深色主题设计。

## 功能特性

### 1. 用户认证
- 美观的登录界面
- 基于Token的身份验证
- 用户名/密码验证
- 登录状态持久化

### 2. JSON编辑器
- 支持编辑 admin.json 和 list.json
- 实时语法验证
- 格式化显示
- 自动保存功能

### 3. 服务器管理
- 服务器状态监控
- 负载均衡配置
- 远程访问控制
- 服务器添加/删除

### 4. 数据库管理
- 多数据库支持
- 数据库连接管理
- 备份和恢复功能
- 用户权限管理

### 5. 表格配置
- 自定义视图创建
- 动态列配置
- 数据过滤功能
- 排序和分页

### 6. 脚本执行
- Python/Shell脚本支持
- 定时任务管理
- 执行日志查看
- 多服务器部署

## 技术栈

- **前端框架**: React 18
- **开发语言**: TypeScript
- **样式方案**: Tailwind CSS
- **状态管理**: React Context
- **动画效果**: Framer Motion
- **图标库**: Lucide React
- **开发工具**: Vite
- **代码规范**: ESLint

## 项目结构

```
src/
├── components/          # 组件目录
│   ├── Dashboard.tsx    # 仪表盘组件
│   ├── Layout.tsx      # 布局组件
│   ├── Login.tsx       # 登录组件
│   ├── Sidebar.tsx     # 侧边栏组件
│   ├── Notification.tsx # 通知组件
│   └── ...
├── context/            # Context目录
│   └── ThemeContext.tsx # 主题Context
├── utils/              # 工具函数
│   └── auth.ts         # 认证相关
├── App.tsx             # 应用入口
└── main.tsx           # 主渲染文件
```

## API接口说明

### 1. 认证接口
```typescript
interface AuthConfig {
  username: string;
  password: string;
}

// 登录
POST /api/auth/login
Request: { username: string, password: string }
Response: { token: string }
```

### 2. 服务器管理接口
```typescript
interface Server {
  id: number;
  name: string;
  status: string;
  load: string;
}

// 获取服务器列表
GET /api/servers
Response: Server[]

// 添加服务器
POST /api/servers
Request: { name: string, config: object }
```

### 3. 数据库管理接口
```typescript
interface Database {
  id: number;
  name: string;
  type: string;
  size: string;
  status: string;
}

// 获取数据库列表
GET /api/databases
Response: Database[]

// 数据库备份
POST /api/databases/:id/backup
```

## 使用说明

### 1. 安装和运行
```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

### 2. 配置说明

#### 2.1 环境变量
创建 `.env` 文件：
```env
VITE_API_URL=http://api.example.com
VITE_AUTH_TOKEN_KEY=auth_token
```

#### 2.2 主题配置
可在 `tailwind.config.js` 中自定义主题颜色：
```js
colors: {
  dark: {
    100: '#1f1f24',
    // ...
  }
}
```

### 3. 开发指南

#### 3.1 新增组件
1. 在 `src/components` 创建新组件
2. 使用 TypeScript 类型声明
3. 遵循项目既定的深色主题设计
4. 添加必要的动画效果

#### 3.2 状态管理
- 使用 React Context 进行全局状态管理
- 组件内部状态使用 useState
- 复杂状态考虑使用 useReducer

#### 3.3 样式指南
- 优先使用 Tailwind CSS 类
- 自定义样式写在 `index.css`
- 保持深色主题一致性
- 使用 glass-panel 效果增加层次感

## 注意事项

1. 安全性
- 所有API请求需要携带认证Token
- 敏感信息需要加密处理
- 定期更新密码

2. 性能优化
- 使用React.memo()优化渲染
- 大型列表使用虚拟滚动
- 图片资源使用懒加载

3. 错误处理
- 统一的错误提示机制
- API请求错误重试机制
- 用户友好的错误提示

## 更新日志

### v1.0.0 (2024-03-xx)
- 初始版本发布
- 完整的深色主题界面
- 基础功能实现

## 维护者

- TG：@oneboat

## 许可证

MIT License