import * as grpc from 'grpc';
import * as loader from '@grpc/proto-loader';
import { resolve } from 'path';

export const protoPath = resolve(__dirname, 'test.proto');

const packageDef = loader.loadSync(
  protoPath,
  {keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  });

export const testProto: any = grpc.loadPackageDefinition(packageDef).tests;