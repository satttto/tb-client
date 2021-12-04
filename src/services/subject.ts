import { SubjectServiceClient } from 'proto/SubjectServiceClientPb';
import { SubjectListRequest, SubjectListResponse } from 'proto/subject_pb';

const subjectService = new SubjectServiceClient('http://localhost:9000');

export const getSubjectListAPI = async (cursor: number, size: number) => {
  const request = new SubjectListRequest();
  request.setCursor(cursor);
  request.setSize(size);
  subjectService.listSubject(request, {});
  return new Promise(async (resolve, _) => {
    try {
      const res: SubjectListResponse = await subjectService.listSubject(request, null);
      return resolve(res.toObject());
    } catch (err) {
      console.log(err);
    }
  });
};