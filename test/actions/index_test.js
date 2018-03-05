import {expect} from '../test_helper';
import {SAVE_COMMENT} from '../../src/actions/types';
// because auto pick index
import {saveComment} from '../../src/actions';


describe('actions', () => {
  describe('saveComment', () => {
    it('has the correct type', () => {
      const action = saveComment();
      expect(action.type).to.equal(SAVE_COMMENT);
    });


    it('has the right payload', () => {
      const action = saveComment('test');
      expect(action.payload).to.equal('test');
    });

  });
});
