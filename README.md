# tweb
![CI](https://github.com/tradingAI/tweb/workflows/CI/badge.svg)
![Deploy](https://github.com/tradingAI/tweb/workflows/Deploy/badge.svg)


程序化A股交易 WebUI [Demo](http://tweb.aiminders.com/)

# 环境
- Golang 1.13.8
- Yarn 1.22.4
- Docker 18.09.2
- Docker-compose 1.23.2

# 快速开始
Tweb支持3种启动方式
* ### 1. 生产环境，Docker启动
    熟读[`docker-compose-prod.yml`](docker-compose-prod.yaml)，配置环境变量，参考[`.env.example`](.env.example)  
    配置`${TUSHARE_TOKEN}`为申请的token值([Tushare Token注册申请](https://tushare.pro/register?reg=238705))  
    ```
    cd tweb
    make run_docker_prod
    ```
    在浏览器中输入 [`http://localhost:8888`](http://localhost:8888) 访问  

* ### 2. 开发环境，通过Docker 编译代码 
    熟读[`docker-compose.yaml`](docker-compose.yaml)，配置环境变量，参考[`.env.example`](.env.example)  
    配置`${TUSHARE_TOKEN}`为申请的token值([Tushare Token注册申请](https://tushare.pro/register?reg=238705))  
    ```
    cd tweb
    make run_docker
    ```
    在浏览器中输入 [`http://localhost:8888`](http://localhost:8888) 访问  

* ### 3. 开发环境，本地启动
    熟读[`docker-compose-prod.yml`](docker-compose-prod.yaml)，配置环境变量
    ```
    cd tweb

    # 启动Postgres和Minio
    make up

    # 下载golang 第三方包
    go mod download

    # 启动后端
    make run

    # 启动前端
    cd frontend

    # 首次执行运行以下命令：
    make install

    # 启动前端
    make run
    ```

    在浏览器中输入 [`http://localhost:3030`](http://localhost:3030) 访问  

[![82Xd4H.png](https://s1.ax1x.com/2020/03/20/82Xd4H.png)](https://imgchr.com/i/82Xd4H)

# 相关项目
- [tbase](https://github.com/tradingAI/tbase)
- [tenv](https://github.com/tradingAI/tenvs)

# 赞助
[![8v8rQS.png](https://s1.ax1x.com/2020/03/25/8v8rQS.png)](https://imgchr.com/i/8v8rQS)
[![8vGiTA.png](https://s1.ax1x.com/2020/03/25/8vGiTA.png)](https://imgchr.com/i/8vGiTA)

# TODO (mickey)
- [x] CI
- [ ] Add more test