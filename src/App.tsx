import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import { FormikWrapper } from "./forms/formik-wrapper";
import { FormikYup } from "./forms/formik-yup";
import { NoForm } from "./forms/no-form";
import { ReducedBoilerplate } from "./forms/reduced-boilerplate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NoForm />,
  },
  {
    path: "/formik-wrapper",
    element: <FormikWrapper />
  },
  {
    path: "/formik-reduced-boilerplate",
    element: <ReducedBoilerplate />
  },
  {
    path: "/formik-yup",
    element: <FormikYup />
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
