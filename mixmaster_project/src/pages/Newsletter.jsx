import { Form, redirect, useNavigation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

//url for the form handling action
const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter';

//action for handling the form data
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

//if there is a form data to handle
try {
    const response = await axios.post(newsletterUrl, data);
    //console.log(response);
    toast.success(response.data.msg);
    return redirect('/');
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Newsletter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <Form className='form' method='POST'>
      <h4 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        our newsletter
      </h4>
      {/* name */}
      <div className='form-row'>
        <label htmlFor='name' className='form-label'>
          name
        </label>
        <input
          type='text'
          className='form-input'
          name='name'
          id='name'
          //defaultValue='john'
          required
        />
      </div>
      {/* last name */}
      <div className='form-row'>
        <label htmlFor='lastName' className='form-label'>
          last name
        </label>
        <input
          type='text'
          className='form-input'
          name='lastName'
          id='lastName'
          //defaultValue='smith'
          required
        />
      </div>
      {/* email */}
      <div className='form-row'>
        <label htmlFor='email' className='form-label'>
          email
        </label>
        <input
          type='email'
          className='form-input'
          name='email'
          id='email'
          defaultValue='test@test.com'
          required
        />
      </div>
      <button
        type='submit'
        className='btn btn-block'
        style={{ marginTop: '0.5rem' }}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'submitting...' : 'submit'}
      </button>
    </Form>
  );
};

export default Newsletter;