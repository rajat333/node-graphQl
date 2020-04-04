module.exports = {
    //MongoDB configuration
    development: {
        db: 'mongodb://127.0.0.1/nodeGraphQl',
        // const uri = "mongodb+srv://rajat:rajat@atlastestcluster-7tizf.mongodb.net/test?retryWrites=true&w=majority";
        app: {
            name: 'graphql'
        }
    },
    production: {
        db: 'mongodb://<username>:<password>@ds157325.mlab.com:57325/graphql-api',
        app: {
            name: 'graphql'
        }
    }
};