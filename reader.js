require('./checkbox.styl');
module.exports = {
    template: require('./checkbox.jade'),
    imports(data) {
        return data;
    },
    exports(scope) {
        return scope;
    }
};