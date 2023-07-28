# 使用Node.js官方镜像作为基础镜像
FROM node:14

# 设置工作目录
WORKDIR /app

# 复制项目文件到工作目录
COPY package.json package-lock.json /app/

# 安装项目依赖
RUN npm install

# 将项目文件复制到工作目录
COPY . /app

# 暴露项目所使用的端口（如果有需要）
EXPOSE 3000

# 启动项目
CMD ["npm", "start"]
