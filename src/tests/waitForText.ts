import { RenderResult, waitFor } from '@testing-library/react';

export const waitForText = async (component: RenderResult, text: string): Promise<void> => {
  await waitFor(() => {
    expect(component.queryByText(text)).not.toBeInTheDocument();
  });
};

export const waitForTextToBeIn = async (component: RenderResult, text: string): Promise<void> => {
    await waitFor(() => {
      expect(component.queryByText(text)).toBeInTheDocument();
    });
  };

export default waitForText;