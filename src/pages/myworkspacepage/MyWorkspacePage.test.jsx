import { render, screen } from '@testing-library/react'
import MyWorkspacePage from './MyWorkspacePage'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import '../../setupTests'
import { MemoryRouter } from 'react-router-dom'

configure({ adapter: new Adapter() })

test('My Workspace loads', async () => {
    render(<MyWorkspacePage />, {wrapper: MemoryRouter})
    const headingText = screen.getByRole('heading', {name: 'MyWorkspace'})
    expect(headingText).toBeInTheDocument()
})
