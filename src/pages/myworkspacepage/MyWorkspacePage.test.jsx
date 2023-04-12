import { render, screen } from '@testing-library/react'
import MyWorkspacePage from './MyWorkspacePage'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import '../../setupTests'
import { MemoryRouter } from 'react-router-dom'

configure({ adapter: new Adapter() })

describe('Test suite for MyWorkspace Page', () => {
    test('My Workspace loads', async () => {
        render(<MyWorkspacePage />, {wrapper: MemoryRouter})
        const headingText = screen.getByRole('heading', {name: 'My Workspace'})
        expect(headingText).toBeInTheDocument()
    })

    test('Two Workspace Cards Displayed', () => {
        render(<MyWorkspacePage />, {wrapper: MemoryRouter})
        const cards = screen.getAllByRole('button')
        expect(cards.length).toBe(2)
    })
})
