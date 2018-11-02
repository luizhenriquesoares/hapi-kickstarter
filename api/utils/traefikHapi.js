exports = module.exports = (server) => Route = class {
    constructor() {}

    group(prefix, callback) {
        server.prefix = prefix;
        callback(Route)
    }

    get(path, controller) {
        server.route({
            method: 'GET',
            path: typeof server.prefix == "undefined" ? path : `${server.prefix}${path}`,
            handler: controller
        });
    }
    post(path, controller) {
        server.route({
            method: 'POST',
            path: typeof server.prefix == "undefined"? path : `${server.prefix}${path}`,
            handler: controller
        });
    }
    put(path, controller) {
        server.route({
            method: 'PUT',
            path: typeof server.prefix == "undefined"? path : `${server.prefix}${path}`,
            handler: controller
        });
    }
    delete(path, controller) {
        server.route({
            method: 'DELETE',
            path: typeof server.prefix == "undefined" ? path : `${server.prefix}${path}`,
            handler: controller
        });
    }
}
