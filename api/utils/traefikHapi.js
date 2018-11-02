exports = module.exports = (server) => Route = class {
    constructor() {}

    get(path, controller) {
        server.route({
            method: 'GET',
            path: path,
            handler: controller
        });
    }
    post(path, controller) {
        server.route({
            method: 'POST',
            path: path,
            handler: controller
        });
    }
    put(path, controller) {
        server.route({
            method: 'PUT',
            path: path,
            handler: controller
        });
    }
    delete(path, controller) {
        server.route({
            method: 'DELETE',
            path: path,
            handler: controller
        });
    }
}
