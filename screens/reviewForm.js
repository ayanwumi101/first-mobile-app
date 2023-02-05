import React from 'react'
import {View, TextInput, Button, Text} from 'react-native'
import {Formik} from 'formik'
import { globalStyles } from '../styles/global'
import * as yup from 'yup'



const reviewSchema = yup.object({
    name: yup.string('Name must be letter format').required('*this field is required!').min(5, "Too short!"),
    department: yup.string().required('*this field is required!').min(10),
    review: yup.string().required('*this field is required!'),
    rating: yup.number().required('*this field is required!').integer().min(1).max(5),
    hobbies: yup.string().required('*this field is required!'),
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
            validationSchema={reviewSchema}
        >
            {({handleBlur, handleChange, handleSubmit, values, errors, touched}) => (
                <View style={globalStyles.formContainer}>
                    <TextInput 
                        placeholder='Please input your Name'
                        style={globalStyles.input}
                        onChangeText={handleChange('name')}
                        value={values.name}
                    />
                      <View>
                        {errors.name && touched.name ? (<Text style={globalStyles.errorText}>{errors.name}</Text> ) : null}
                      </View>

                    <TextInput 
                        placeholder='Your hobbies'
                        style={globalStyles.input}
                        onChangeText={handleChange('hobbies')}
                        value={values.hobbies}
                    />
                      <View>
                          {errors.hobbies && touched.hobbies ? (<Text style={globalStyles.errorText}>{errors.hobbies}</Text>) : null}
                      </View>

                    <TextInput 
                        placeholder='Please input your department'
                        style={globalStyles.input}
                        onChangeText={handleChange('department')}
                        value={values.department}
                    />
                      <View>
                          {errors.department && touched.department ? (<Text style={globalStyles.errorText}>{errors.department}</Text>) : null}
                      </View>

                    <TextInput 
                        placeholder='Please input your review'
                        multiline
                        style={globalStyles.input}
                        onChangeText={handleChange('review')}
                        value={values.review}
                    />
                      <View>
                          {errors.review && touched.review ? (<Text style={globalStyles.errorText}>{errors.review}</Text>) : null}
                      </View>

                     <TextInput 
                        placeholder='Rating'
                        style={globalStyles.input}
                        onChangeText={handleChange('rating')}
                        keyboardType='numeric'
                        value={values.rating}
                    />
                      <View>
                          {errors.rating && touched.rating ? (<Text style={globalStyles.errorText}>{errors.rating}</Text>) : null}
                      </View>

                    <Button title='Submit review' color='#4ae' onPress={handleSubmit} />
                </View>
            )}
        </Formik>
    </View>
  )
}

export default reviewForm