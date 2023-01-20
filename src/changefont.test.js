import App from "./App";
import React, { useState } from "react";
import { render } from "@testing-library/react";

describe("App", () => {
  test("CT01- na inicializacao o texto fatec zl deve ser apresentado", () => {
    //dado que a aplicacao foi inicializada
    const { getByText } = render(<App />);
    //quando verfico o comportamento
    //a pagina principal eh renderizada
    expect(getByText("Fatec ZL")).toBeTruthy();
  });
  it("should test what goes into the state", () => {
    const setState = jest.fn();
    jest
      .spyOn(React, "useState")
      .mockImplementationOnce((initState) => [initState, setState]);
    render(<App />);
  });
  it("should update state on click", () => {
    const changeSize = jest.fn();

    const handleClick = jest.spyOn(React, "useState");
    handleClick.mockImplementation((size) => [size, changeSize]);

    expect(changeSize).toBeCalled();
  });
});
