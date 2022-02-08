import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Applicantlogin from './ForgotPass';
import { shallow, mount, render } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });
configure({ adapter: new Adapter() });

// test file
test('cheching paragraph tag',()=>{
  const wrapper = shallow(<ForgotPass />);
  expect(wrapper.find('p').text()).toContain("ForgotPass")
})

const wrapper = shallow(<Fo />);