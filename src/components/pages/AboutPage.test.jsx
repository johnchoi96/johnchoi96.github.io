
import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import AboutPage from './AboutPage'

test('AboutPage loads', async () => {
    act(async () => {
        await render(<AboutPage />)
    })
    waitFor(async () => {
        const headingText = screen.getByRole('heading', {name: "Places I've been to..."})
        expect(headingText).toBeInTheDocument()
    })
})