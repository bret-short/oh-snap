import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
}

afterEach(cleanup);

describe("Modal is rendering", () => {
    it("renders", () => {
      render(<Modal />);
    });
  
    it("matches snapshot", () => {
      const { asFragment } = render(<Modal />);
      expect(asFragment()).toMatchSnapshot();
    });
  
    it("renders", () => {
      const { getByTestId } = render(<Contact />);
      expect(getByTestId("h1tag")).toHaveTextContent("Contact me");
    });
  
    it("renders", () => {
      const { getByTestId } = render(<Contact />);
      expect(getByTestId("button")).toHaveTextContent("Submit");
    });
  });