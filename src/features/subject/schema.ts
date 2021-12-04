/**
 * Define schemas for normalizing subject data
 * https://github.com/paularmstrong/normalizr
 */
import { schema } from 'normalizr';


/**
 * APIからのレスポンス
 * data: {[
 *   {
 *     id: 'x1', 
 *     ...,
 *     members: [
 *       { id: 'y1', name: 'name' },
 *       { id: 'y2', name: 'name' }
 *     ]
 *   },
 *   {
 *     id: 'x2',
 *     ...,
 *     members: [
 *       { id: 'y3', name: 'name' },
 *       { id: 'y4', name: 'name' },
 *     ]
 *    },
 * ]}
 * 
 * 正規化後のデータ
 * entities: {
 *   members: {
 *     'y1': { id: 'y1', name: 'name' },
 *     'y2': { id: 'y2', name: 'name' },
 *     'y3': { id: 'y3', name: 'name' },
 *     'y4': { id: 'y4', name: 'name' },
 *   },
 *   subjects: {
 *     'x1': {
 *       id: 'x1',
 *       ...,
 *       members: ['y1', 'y2']
 *     },
 *     'x2': {
 *       id: 'x2',
 *       ...,
 *       members: ['y3', 'y4']
 *     }
 *   }
 * }
 * result: [0: 'x1', 1: 'x2']
 * 
 */

const memberSchema = new schema.Entity('members');
const subjectSchema = new schema.Entity('subjects', {
  membersList: [memberSchema]
});

export const subjectListSchema = new schema.Array(subjectSchema);