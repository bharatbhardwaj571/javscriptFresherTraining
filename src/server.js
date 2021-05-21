class server {
    constructor(config){
        this.config = config
    }

    bootstrap() {
        const ans= setupRoutes();
        return ans
    }
}