import { Formik } from "formik";

function App() {
  return (
    <div className="App">
      <Formik
        initialValues={{ firstname: '', middlename: '', lastname: '' }}
        validate={values => {
          const errors: { firstname: string, middlename: string, lastname: string } = {} as { firstname: string, middlename: string, lastname: string };
          
          if(!values.firstname) errors.firstname = 'Required';
          if(!values.middlename) errors.middlename = 'Required';
          if(!values.lastname) errors.lastname = 'Required';

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="firstname">First Name</label>
              <input type="text" name="firstname" value={values.firstname} onChange={handleChange} onBlur={handleBlur} />
              {errors.firstname && touched.firstname && errors.firstname}
            </div>
            <div>
              <label htmlFor="middlename">Middle Name</label>
              <input type="text" name="middlename" value={values.middlename} onChange={handleChange} onBlur={handleBlur} />
              {errors.middlename && touched.middlename && errors.middlename}
            </div>
            <div>
              <label htmlFor="lastname">Last Name</label>
              <input type="text" name="lastname" value={values.lastname} onChange={handleChange} onBlur={handleBlur} />
              {errors.lastname && touched.lastname && errors.lastname}
            </div>
            <button type="submit" disabled={isSubmitting}>Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App;
