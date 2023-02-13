import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient ({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o8zffr1c6r01xmhgbk2nj4/master',
    headers: {
        'Authorization': ''
    },
    cache: new InMemoryCache()

})