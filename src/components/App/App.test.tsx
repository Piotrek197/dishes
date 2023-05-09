import {describe, it, expect} from "vitest";
import {render, screen, waitFor, fireEvent} from "@testing-library/react";
import {rest} from "msw";
import {setupServer} from "msw/node";
import {Provider} from "react-redux";
import {store} from "../../store";
import App from "../App/App";
import postRequest from "../../postRequest";
import { DishType } from "../../types";



const server = setupServer(
    rest.post<DishType>('/test', async (req, res, ctx) => {
      const data  = await req.json();

      return res(
        ctx.json({id: 1, ...data})
      );
    }),
)

// Establish requests interception layer before all tests.
beforeAll(() => {server.listen()});

// Clean up after all tests are done, preventing this
// interception layer from affecting irrelevant tests.
afterAll(() => { server.close() });

describe("App", () => {

  it("should display an error message when name input is blank", async () => {
    render(
    <Provider store={store}>
      <App />
    </Provider>
    );

    screen.getByRole("preparation-time").focus();

    const element = await waitFor(() => screen.getByText("Name is required"));

    expect(element).toHaveClass("error-message--active");

  });

  it("should display an error message when preparation-time input data is in wrong format", async () => {
    render(
    <Provider store={store}>
      <App/>
    </Provider>
    );

    const input = screen.getByRole("preparation-time");
    
    fireEvent.keyPress(input, {key: "P"})

    screen.getByRole("dish-type").focus();

    const errorMessage = await waitFor(() => screen.getByText("Name is required"));

    expect(errorMessage).toHaveClass("error-message--active");

  })

  it("renders Add Dish header", () => {
    
        render(<Provider store={store}>
          <App/>
        </Provider>
        );

        expect(screen.getByRole("header")).toHaveTextContent("Add Dish");

    });

    it("gets the data from API with id", async () => {

        const dish: DishType = {
            name: "super zupka", 
            type:"soup", 
            preparation_time: "00:30:00", 
            spiciness_scale: 1
        };

        const response = await postRequest("/test", dish);


        expect(JSON.stringify(response)).toBe(JSON.stringify({id: 1, ...dish}));

    });

    it("should have input and output on the page", () => {

        render(
        <Provider store={store}>
          <App/>
        </Provider>
        );

        const inputHeader = screen.getByText("Input");
        const outputHeader = screen.getByText("Output");


        expect(inputHeader).toHaveTextContent("Input");
        expect(outputHeader).toHaveTextContent("Output");

    })

});

