import * as actions from './courseActionTypes';
import {selectCourse, unselectCourse} from './courseActionCreators';


describe('course Action Creators returning correct action objects', () => {
	test('selectCourse', () => {
		const index = 1;
		const expectedAction = {
			type: actions.SELECT_COURSE,
			index,
		}

		expect(selectCourse(index)).toEqual(expectedAction);
	})

	test('unselectCourse', () => {
		const index = 1;
		const expectedAction = {
			type: actions.UNSELECT_COURSE,
			index,
		}

		expect(unselectCourse(index)).toEqual(expectedAction);
	})
})
