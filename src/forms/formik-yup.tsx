import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from 'yup';
import { NavLinks } from "../navigation/nav-links";

const formSchema = object({
    firstname: string().required("First name required"),
    middlename: string().required(),
    lastname: string().required()
});

export const FormikYup = () => (
    <>
        <NavLinks />

        <h1>Using Yup for validation</h1>

        <Formik
            initialValues={{ firstname: '', middlename: '', lastname: '' }}
            validationSchema={formSchema}
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