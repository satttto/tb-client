/**
 * @fileoverview gRPC-Web generated client stub for subject
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as subject_subject_pb from './subject_pb';


export class SubjectServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoListSubject = new grpcWeb.MethodDescriptor(
    '/subject.SubjectService/ListSubject',
    grpcWeb.MethodType.UNARY,
    subject_subject_pb.SubjectListRequest,
    subject_subject_pb.SubjectListResponse,
    (request: subject_subject_pb.SubjectListRequest) => {
      return request.serializeBinary();
    },
    subject_subject_pb.SubjectListResponse.deserializeBinary
  );

  listSubject(
    request: subject_subject_pb.SubjectListRequest,
    metadata: grpcWeb.Metadata | null): Promise<subject_subject_pb.SubjectListResponse>;

  listSubject(
    request: subject_subject_pb.SubjectListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: subject_subject_pb.SubjectListResponse) => void): grpcWeb.ClientReadableStream<subject_subject_pb.SubjectListResponse>;

  listSubject(
    request: subject_subject_pb.SubjectListRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: subject_subject_pb.SubjectListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/subject.SubjectService/ListSubject',
        request,
        metadata || {},
        this.methodInfoListSubject,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/subject.SubjectService/ListSubject',
    request,
    metadata || {},
    this.methodInfoListSubject);
  }

}

