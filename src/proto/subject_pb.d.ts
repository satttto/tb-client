import * as jspb from 'google-protobuf'



export class SubjectListRequest extends jspb.Message {
  getCursor(): number;
  setCursor(value: number): SubjectListRequest;

  getSize(): number;
  setSize(value: number): SubjectListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubjectListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubjectListRequest): SubjectListRequest.AsObject;
  static serializeBinaryToWriter(message: SubjectListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubjectListRequest;
  static deserializeBinaryFromReader(message: SubjectListRequest, reader: jspb.BinaryReader): SubjectListRequest;
}

export namespace SubjectListRequest {
  export type AsObject = {
    cursor: number,
    size: number,
  }
}

export class SubjectListResponse extends jspb.Message {
  getSubjectsList(): Array<Subject>;
  setSubjectsList(value: Array<Subject>): SubjectListResponse;
  clearSubjectsList(): SubjectListResponse;
  addSubjects(value?: Subject, index?: number): Subject;

  getTotal(): number;
  setTotal(value: number): SubjectListResponse;

  getCursor(): number;
  setCursor(value: number): SubjectListResponse;

  getHasnext(): boolean;
  setHasnext(value: boolean): SubjectListResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubjectListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SubjectListResponse): SubjectListResponse.AsObject;
  static serializeBinaryToWriter(message: SubjectListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubjectListResponse;
  static deserializeBinaryFromReader(message: SubjectListResponse, reader: jspb.BinaryReader): SubjectListResponse;
}

export namespace SubjectListResponse {
  export type AsObject = {
    subjectsList: Array<Subject.AsObject>,
    total: number,
    cursor: number,
    hasnext: boolean,
  }
}

export class Member extends jspb.Message {
  getId(): string;
  setId(value: string): Member;

  getName(): string;
  setName(value: string): Member;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Member.AsObject;
  static toObject(includeInstance: boolean, msg: Member): Member.AsObject;
  static serializeBinaryToWriter(message: Member, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Member;
  static deserializeBinaryFromReader(message: Member, reader: jspb.BinaryReader): Member;
}

export namespace Member {
  export type AsObject = {
    id: string,
    name: string,
  }
}

export class Subject extends jspb.Message {
  getId(): string;
  setId(value: string): Subject;

  getTitle(): string;
  setTitle(value: string): Subject;

  getMembersList(): Array<Member>;
  setMembersList(value: Array<Member>): Subject;
  clearMembersList(): Subject;
  addMembers(value?: Member, index?: number): Member;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Subject.AsObject;
  static toObject(includeInstance: boolean, msg: Subject): Subject.AsObject;
  static serializeBinaryToWriter(message: Subject, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Subject;
  static deserializeBinaryFromReader(message: Subject, reader: jspb.BinaryReader): Subject;
}

export namespace Subject {
  export type AsObject = {
    id: string,
    title: string,
    membersList: Array<Member.AsObject>,
  }
}

