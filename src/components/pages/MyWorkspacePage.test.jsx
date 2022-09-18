
import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import MyWorkspacePage from './MyWorkspacePage'

test('My Workspace loads', async () => {
    render(<MyWorkspacePage />)
    const headingText = screen.getByRole('heading', {name: "Software and Files"})
    expect(headingText).toBeInTheDocument()
})