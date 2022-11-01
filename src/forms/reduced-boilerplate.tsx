import { Formik, Form, Field, ErrorMessage } from "formik";
import { NavLinks } from "../navigation/nav-links";

export const ReducedBoilerplate = () => (
    <>
        <NavLinks />

        <h1>Reduced Boilerplate</h1>
        <p>Makes use of the <b>Form</b>, <b>Field</b> and <b>ErrorMessage</b> components from <b>formik</b></p>

        <Formik
            initialValues={{ firstname: '', middlename: '', lastname: '' }}
            validate={values => {
                const errors: { firstname: string, middlename: string, lastname: string } = {} as { firstname: string, middlename: string, lastname: string };

                if (!values.firstname) errors.firstname = 'Required';
                if (!values.middlename) errors.middlename = 'Required';
                if (!values.lastname) errors.lastname = 'Required';

                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div>
                        <label htmlFor="firstname">First Name</label>
                        <Field type="text" name="firstname" />
                        <ErrorMessage name="firstname" component="div" />
                    </div>
                    <div>
                        <label htmlFor="middlename">Middle Name</label>
                        <Field type="text" name="middlename" />
                        <ErrorMessage name="middlename" component="div" />
                    </div>
                    <div>
                        <label htmlFor="lastname">Last Name</label>
                        <Field type="text" name="lastname" />
                        <ErrorMessage name="lastname" component="div" />
                    </div>
                    <button type="submit" disabled={isSubmitting}>Submit</button>
                </Form>
            )}
        </Formik>
    </>
);