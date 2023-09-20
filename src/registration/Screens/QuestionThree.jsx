import React from 'react'
import {Formik, Field , Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { setEmail } from '../Slice/Registration'
import { useNavigate } from 'react-router-dom'
import {  useSelector } from 'react-redux'
import {Flex, FormControl, FormLabel, Input, Button} from "@chakra-ui/react"

const  QuestionThree = ()=>{

    const registration = useSelector((state)=> state.registration)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return(
        <Flex align="center" justify="center" height="100vh" >
        <Formik
        initialValues={{
            email : ''
        }}

        validationSchema={Yup.object({
            email : Yup.string()
            .email('Invalid Email Address')
            .required('Is Required')
        })}

        onSubmit={(values)=>{
            console.log(values);
            dispatch(setEmail(values))
            navigate('/landing-page')
        }}
        >

            <Form>
                <FormControl>
                <FormLabel htmlFor='email'>Enter Your Email Address</FormLabel>
                <Field name="email">
                    {({field})=>(
                        <Input 
                        {...field}
                        id='email'
                        placeholder='Enter Email'
                        type='email'
                        />
                    )}
                </Field>
                <ErrorMessage name='email' />
                <Button type='submit' mt={4} colorScheme="teal">Submit</Button>
                </FormControl>
            </Form>

        </Formik>
        </Flex>
    )
}

export default QuestionThree ;