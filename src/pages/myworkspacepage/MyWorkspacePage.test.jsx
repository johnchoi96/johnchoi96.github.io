
import { render, screen } from '@testing-library/react';
import MyWorkspacePage from './MyWorkspacePage'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import '../../setupTests'
import { Button } from '@mui/material';

configure({ adapter: new Adapter() })
// Enzyme.configure({ adapter: new Adapter() })

test('My Workspace loads', async () => {
    const mockCallBack = jest.fn()

    render(<MyWorkspacePage />)
    // expect modal display
    const modalHeadingText = screen.getByRole('heading', {name: "This page is being worked on!"})
    expect(modalHeadingText).toBeInTheDocument()
    const modal = shallow(<Button id='button' onClick={mockCallBack} variant='contained'>OK</Button>)
    modal.find('#button').simulate('click')
    expect(mockCallBack.mock.calls.length).toEqual(1)
})