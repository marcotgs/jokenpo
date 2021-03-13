import { ApolloServer } from 'apollo-server-cloud-functions';
import { ApolloGateway } from '@apollo/gateway';

console.log(process.env.GAME_SERVICE_URL, process.env.PORT);

const gateway = new ApolloGateway({
  serviceList: [
    { name: 'game', url: process.env.GAME_SERVICE_URL },
    // { name: 'player', url: process.env.PLAYER_SERVICE_URL },
  ],
});

const server = new ApolloServer({ gateway, subscriptions: false });

export const gatewayHandler = server.createHandler();
