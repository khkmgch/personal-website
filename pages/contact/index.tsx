import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useWeb3Forms from '@web3forms/react';
import { Container } from '@/components/Container';
import { MapPinIcon } from '@heroicons/react/24/outline';
import {
  IconBrandGithub,
  IconBrandTwitter,
} from '@tabler/icons-react';
import { Layout } from '@/components/Layout';
import { Loading } from '@/components/ui/Loading';

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: 'onTouched',
  });
  const [isSuccess, setIsSuccess] =
    useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const apiKey: string =
    process.env.NEXT_PUBLIC_FORMS_ACCESS_KEY ||
    'YOUR_ACCESS_KEY_HERE';

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: 'Acme Inc',
      subject: 'New Contact Message from your Website',
    },
    onSuccess: (msg: string, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg: string, data) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });

  return (
    <Layout>
      <Container>
        <h1 className='text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug'>
          Contact
        </h1>
        <div className='text-center'>
          <p className='text-lg'>
            お問い合わせはこちらにお願いします。
          </p>
        </div>

        <div className='my-10 grid md:grid-cols-2'>
          <div className='my-10'>
            <h2 className='text-2xl font-semibold dark:text-white'>
              SNS
            </h2>
            <p className='mt-5 max-w-sm'>
              フォームにご記入いただくか、SNSアカウントにご連絡ください。
            </p>

            <div className='mt-5'>
              <div className='text-dark-600 mt-2 flex items-center space-x-2 dark:text-gray-400'>
                <IconBrandGithub className='h-4 w-4' />
                <span>
                  <a
                    href='https://github.com/khkmgch'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    @khkmgch
                  </a>
                </span>
              </div>
              <div className='text-dark-600 mt-2 flex items-center space-x-2 dark:text-gray-400'>
                <IconBrandTwitter className='h-4 w-4' />
                <span>
                  <a
                    href='https://twitter.com/kh_kmgch'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    @kh_kmgch
                  </a>
                </span>
              </div>
              <div className='text-dark-600 mt-2 flex items-center space-x-2 dark:text-gray-400'>
                <MapPinIcon className='h-4 w-4' />
                <span>Fukuoka, JA</span>
              </div>
            </div>
          </div>
          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='my-10'
            >
              <input
                type='checkbox'
                id=''
                className='hidden'
                style={{ display: 'none' }}
                {...register('botcheck')}
              ></input>

              <div className='mb-5'>
                <input
                  type='text'
                  placeholder='Full Name'
                  autoComplete='false'
                  className={`w-full rounded-md border-2 px-4 py-3 outline-none placeholder:text-gray-800 focus:ring-4 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-200  ${
                    errors.name
                      ? 'border-red-600 ring-red-100 focus:border-red-600 dark:ring-0'
                      : 'border-gray-300 ring-gray-100 focus:border-gray-600 dark:border-gray-600 dark:ring-0 dark:focus:border-white'
                  }`}
                  {...register('name', {
                    required: 'Full name is required',
                    maxLength: 80,
                  })}
                />
                {errors.name && (
                  <div className='mt-1 text-red-600'>
                    <small>{`${errors.name.message}`}</small>
                  </div>
                )}
              </div>

              <div className='mb-5'>
                <label
                  htmlFor='email_address'
                  className='sr-only'
                >
                  Email Address
                </label>
                <input
                  id='email_address'
                  type='email'
                  placeholder='Email Address'
                  // name='email'
                  autoComplete='false'
                  className={`w-full rounded-md border-2 px-4 py-3 outline-none placeholder:text-gray-800 focus:ring-4 dark:bg-gray-900 dark:text-white   dark:placeholder:text-gray-200  ${
                    errors.email
                      ? 'border-red-600 ring-red-100 focus:border-red-600 dark:ring-0'
                      : 'border-gray-300 ring-gray-100 focus:border-gray-600 dark:border-gray-600 dark:ring-0 dark:focus:border-white'
                  }`}
                  {...register('email', {
                    required: 'Enter your email',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Please enter a valid email',
                    },
                  })}
                />
                {errors.email && (
                  <div className='mt-1 text-red-600'>
                    <small>{`${errors.email.message}`}</small>
                  </div>
                )}
              </div>

              <div className='mb-3'>
                <textarea
                  // name='message'
                  placeholder='Your Message'
                  className={`h-36 w-full rounded-md border-2 px-4 py-3 outline-none placeholder:text-gray-800   focus:ring-4 dark:bg-gray-900  dark:text-white dark:placeholder:text-gray-200  ${
                    errors.message
                      ? 'border-red-600 ring-red-100 focus:border-red-600 dark:ring-0'
                      : 'border-gray-300 ring-gray-100 focus:border-gray-600 dark:border-gray-600 dark:ring-0 dark:focus:border-white'
                  }`}
                  {...register('message', {
                    required: 'Enter your Message',
                  })}
                />
                {errors.message && (
                  <div className='mt-1 text-red-600'>
                    {' '}
                    <small>{`${errors.message.message}`}</small>
                  </div>
                )}
              </div>

              <button
                type='submit'
                className='w-full rounded-md bg-gray-900 px-7 py-4 font-semibold text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-200 focus:ring-offset-2 dark:bg-white dark:text-black '
              >
                {isSubmitting ? (
                  <Loading color='white' />
                ) : (
                  'Send Message'
                )}
              </button>
            </form>

            {isSubmitSuccessful && isSuccess && (
              <div className='mt-3 text-center text-sm text-green-500'>
                {message ||
                  'Success. Message sent successfully'}
              </div>
            )}
            {isSubmitSuccessful && !isSuccess && (
              <div className='mt-3 text-center text-sm text-red-500'>
                {message ||
                  'Something went wrong. Please try later.'}
              </div>
            )}
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Contact;
