import mali from 'mali';
import { protoPath } from './loader';

async function sendTest(ctx: mali.Context) {
  console.log('request: ', ctx.req);
  ctx.res = { responseText: 'hello test' + ctx.req.param, responseNumber: 1 };
}

function main() {
  const app = new mali(protoPath);
  app.use({ sendTest: sendTest });
  app.start('0.0.0.0:50051');
  console.log('Server running on 50051');
}

main();

