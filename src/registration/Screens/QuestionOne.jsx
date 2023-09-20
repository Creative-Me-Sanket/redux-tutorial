import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setFirstName } from '../Slice/Registration';
import { Flex, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

const QuestionOne = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Flex align="center" justify="center" height="100vh">
      <Formik
        initialValues={{
          firstName: '',
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 Characters or Less')
            .required('Is Required'),
        })}
        onSubmit={(values) => {
          console.log(values);
          dispatch(setFirstName(values));
          navigate('/question-two');
        }}
      >
        <Form>
          <FormControl>
            <FormLabel htmlFor="firstName">Enter Your First Name</FormLabel>
            <Field name="firstName">
              {({ field }) => (
                <Input
                  {...field}
                  id="firstName"
                  placeholder="First Name"
                  type="text"
                />
              )}
            </Field>
            <ErrorMessage name="firstName" component="div" />

            <Button type="submit" mt={4} colorScheme="teal">
              Next
            </Button>
          </FormControl>
        </Form>
      </Formik>
    </Flex>
  );
};

export default QuestionOne;
