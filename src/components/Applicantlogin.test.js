import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Applicantlogin from './Applicantlogin';
import { shallow, mount, render } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });


test('cheching paragraph tag',()=>{
  const wrapper = shallow(<Applicantlogin />);
  expect(wrapper.find('p').text()).toContain("Applicantlogin")
})
