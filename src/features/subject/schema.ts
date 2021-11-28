/**
 * Define schemas for normalizing subject data
 * https://github.com/paularmstrong/normalizr
 */
import { schema } from 'normalizr';


const memberSchema = new schema.Entity('members');
const subjectSchema = new schema.Entity('subjects', {
  members: [memberSchema]
});

export const subjectListSchema = new schema.Array(subjectSchema);