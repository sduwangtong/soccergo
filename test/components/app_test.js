import {renderComponent, expect} from '../test_helper';
import App from '../../src/components/app';

//user describe to group together similar tests
describe('App', () =>{
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  // use 'it' to test a signle atrribute a target
  it('shows the correct text', () =>{
    // create a instance
      //Use 'expect' to make an 'assertion' about a target
      expect(component).to.contain('Please Login');
  });
});
