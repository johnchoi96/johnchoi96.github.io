
import { render, screen } from '@testing-library/react';
import MyWorkspacePage from './MyWorkspacePage'

test('My Workspace loads', async () => {
    render(<MyWorkspacePage />)
    const headingText = screen.getByRole('heading', {name: "Software and Files"})
    expect(headingText).toBeInTheDocument()
})