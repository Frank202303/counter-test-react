import Counter from './Counter';
import { render, screen, fireEvent } from '@testing-library/react';

describe("Counter", () => {
    it("counter display correct initial count", () => {
        render(<Counter initialCount={4} />);
        const counterValue = screen.getByTestId("count").textContent;
        expect(counterValue).toEqual('4');
    });
    // we can use id, or getByRole use (button + name)
    it("counter should increment by 1 if the increment button is clicked", () => {
        render(<Counter initialCount={0} />);
        const incrementButton = screen.getByRole("button", { name: "Increment" });
        // click Button
        fireEvent.click(incrementButton);

        const counterValue = screen.getByTestId("count").textContent;
        expect(counterValue).toEqual('1');
    });

    // we can use id, or getByRole use (button + name)
    it("counter should decrement by 1 if the Decrement button is clicked", () => {
        render(<Counter initialCount={0} />);
        const decrementButton = screen.getByRole("button", { name: "Decrement" });
        // click Button
        fireEvent.click(decrementButton);

        const counterValue = screen.getByTestId("count").textContent;
        expect(counterValue).toEqual('-1');
    });
    // we can use id, or getByRole use (button + name)
    it("counter should equal to 0 if the Restart button is clicked", () => {
        render(<Counter initialCount={6} />);
        const restartButton = screen.getByRole("button", { name: "Restart" });
        // click Button
        fireEvent.click(restartButton);

        const counterValue = screen.getByTestId("count").textContent;
        expect(counterValue).toEqual('0');
    });
    // we can use id, or getByRole use (button + name)
    it("counter should *-1 if the Switch Signs button is clicked", () => {
        render(<Counter initialCount={-4} />);

        // previous Value
        const previousValue = screen.getByTestId("count").textContent;
        expect(previousValue).toEqual('-4');
        const switchSignsButton = screen.getByRole("button", { name: "Switch Signs" });

        // click Button
        fireEvent.click(switchSignsButton);

        // counter New Value
        const counterNewValue = screen.getByTestId("count").textContent;
        expect(counterNewValue).toEqual('4');
    });
});