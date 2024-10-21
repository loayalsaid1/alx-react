import { schema, normalize } from 'normalizr';

const course = new schema.Entity('courses');

export default function coursesNormalizer(data) {
	return normalize(data, [course]);
}

