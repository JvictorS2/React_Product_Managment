import { render, screen } from "@testing-library/react";
import { NativeBaseProvider } from "native-base";
import Button from "../../../../components/Button";

describe("Button test component", () => {
  it("then shows the button build", () => {
    render(
      <NativeBaseProvider base={"light"}>
        <Button>Olá mundo</Button>
      </NativeBaseProvider>
    );
    expect(screen.getByText(/Olá mundo/i)).toBeTruthy();
  });
  it("then shows the button build 2", () => {
    render(
      <NativeBaseProvider base={"light"}>
        <Button>Olá mundo</Button>
      </NativeBaseProvider>
    );
    expect(screen.getByText(/Olá mundo/i)).toBeTruthy();
  });
});
