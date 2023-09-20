import react from 'react'
import {Formik, Field , Form , ErrorMessage} from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setLastName } from '../Slice/Registration'
import {Flex , FormControl , FormLabel,Input, Button, Center} from '@chakra-ui/react'

const QuestionTwo = ()=>{

    const dispatch = useDispatch() 
    const navigate = useNavigate()
    return(

        <Flex align="center" justify="center" height="100vh" > 
        <Formik
        initialValues={{
            lastName : ''
        }}

        validationSchema={
            Yup.object({
                lastName : Yup.string()
                .max(15,'Must be 15 Chracters or less')
                .required("Is Required")
            })
        }

        onSubmit={(values)=>{
            console.log(values);
            dispatch(setLastName(values))
            navigate('/question-three')
        }}  
        >

            <Form>
                <FormControl>
                <FormLabel htmlFor='lastName'>Enter Your Last Name</FormLabel>
                <Field name = "lastName">
                    {({field}) =>(
                        <Input 
                        {...field}
                        id='lastName'
                        placeholder='Last Name'
                        type='text'
                        />
                    )}
                </Field>
                <ErrorMessage name="lastName" component="div"/>
                <Button type='submit' mt={4} colorScheme="teal">Next</Button>
                </FormControl>
            </Form>

        </Formik>
        </Flex>
    )
}

export default QuestionTwo ;