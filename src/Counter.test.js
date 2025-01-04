import Counter from './Counter';
import { render, screen } from '@testing-library/react';

describe("Counter", () => {
    it("counter display correct initial count", () => {
        render(<Counter initialCount={4} />);
        const counterValue = screen.getByTestId("count").textContent;
        expect(counterValue).toEqual('4');
    });
});