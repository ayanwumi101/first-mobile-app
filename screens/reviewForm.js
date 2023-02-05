import React from 'react'
import {View, TextInput, Button, Text} from 'react-native'
import {Formik} from 'formik'
import { globalStyles } from '../styles/global'
import * as yup from 'yup'



const validationSchema = yup.object({
    name: yup.string().required().min(5),
    department: yup.string().required().min(10),
    review: yup.string().required(),
    rating: yup.number().required().min(1).max(5),
    hobbies: yup.string().required(),
})

const reviewForm = ({addReview}) => {

  return (
    <View>
        <Formik 
            initialValues={{name: '', hobbies: '', department: '', review: '', rating: ''}}
            onSubmit={(values, actions) => {
                actions.resetForm();
                addReview(values)
            }}
        >
            {({handleBlur, handleChange, handleSubmit, values}) => (
                <View style={globalStyles.formContainer}>
                    <TextInput 
                        placeholder='Please input your Name'
                        style={globalStyles.input}
                        onChangeText={handleChange('name')}
                        value={values.name}
                    />

                    <TextInput 
                        placeholder='Your hobbies'
                        style={globalStyles.input}
                        onChangeText={handleChange('hobbies')}
                        value={values.hobbies}
                    />

                    <TextInput 
                        placeholder='Please input your department'
                        style={globalStyles.input}
                        onChangeText={handleChange('department')}
                        value={values.department}
                    />

                    <TextInput 
                        placeholder='Please input your review'
                        multiline
                        style={globalStyles.input}
                        onChangeText={handleChange('review')}
                        value={values.review}
                    />

                     <TextInput 
                        placeholder='Rating'
                        style={globalStyles.input}
                        onChangeText={handleChange('rating')}
                        keyboardType='numeric'
                        value={values.rating}
                    />

                    <Button title='Submit review' color='#4ae' onPress={handleSubmit} />
                </View>
            )}
        </Formik>
    </View>
  )
}

export default reviewForm