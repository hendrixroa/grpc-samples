import * as grpc from 'grpc';
import { testProto } from './loader';

async function main() {
  const client = new testProto.Testing('0.0.0.0:50051', grpc.credentials.createInsecure());

  client.sendTest({param: 'Hiiiiiiiiii'}, function(err: any, response: any) {
    console.log('Greeting:', response);
  });
}

main();