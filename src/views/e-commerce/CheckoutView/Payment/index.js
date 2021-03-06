import clsx from 'clsx';
import React from 'react';
import * as Yup from 'yup';
import Summary from '../Summary';
import Delivery from './Delivery';
import { Icon } from '@iconify/react';
import BillingInfo from './BillingInfo';
import PaymentMethods from './PaymentMethods';
import { useFormik, Form, FormikProvider } from 'formik';
import arrowIosBackFill from '@iconify-icons/eva/arrow-ios-back-fill';
import { makeStyles } from '@mui/styles';
import { Grid, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// ----------------------------------------------------------------------

const DELIVERY_OPTIONS = [
  {
    value: 0,
    title: 'Standard delivery (Free)',
    description: 'Delivered on Monday, August 12'
  },
  {
    value: 2,
    title: 'Fast delivery ($2,00)',
    description: 'Delivered on Monday, August 5'
  }
];

const PAYMENT_OPTIONS = [
  {
    value: 'paypal',
    title: 'Pay with Paypal',
    description:
      'You will be redirected to PayPal website to complete your purchase securely.',
    icons: ['/static/icons/ic_paypal.svg']
  },
  {
    value: 'credit_card',
    title: 'Credit / Debit Card',
    description: 'We support Mastercard, Visa, Discover and Stripe.',
    icons: ['/static/icons/ic_mastercard.svg', '/static/icons/ic_visa.svg']
  },
  {
    value: 'cash',
    title: 'Cash on Delivery',
    description: 'Pay with cash when your order is delivered.',
    icons: []
  }
];

const CARDS_OPTIONS = [
  { value: 'ViSa1', label: '**** **** **** 1212 - Jimmy Holland' },
  { value: 'ViSa2', label: '**** **** **** 2424 - Shawn Stokes' },
  { value: 'MasterCard', label: '**** **** **** 4545 - Cole Armstrong' }
];

const useStyles = makeStyles(theme => ({
  root: {}
}));

function Payment({
  total,
  billing,
  subtotal,
  discount,
  shipping,
  onBackStep,
  onComplete,
  onGotoStep,
  onApplyShipping,
  className
}) {
  const classes = useStyles();

  const PaymentSchema = Yup.object().shape({
    payment: Yup.mixed().required('Payment is required')
  });

  const formik = useFormik({
    initialValues: {
      delivery: shipping,
      payment: ''
    },
    validationSchema: PaymentSchema,
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      try {
        onComplete();
        setSubmitting(true);
      } catch (err) {
        console.error(err);
        setSubmitting(false);
        setErrors(err.message);
      }
    }
  });

  const { isSubmitting, handleSubmit } = formik;

  return (
    <div className={clsx(classes.root, className)}>
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Delivery
                formik={formik}
                onApplyShipping={onApplyShipping}
                deliveryOptions={DELIVERY_OPTIONS}
              />
              <PaymentMethods
                formik={formik}
                cardOptions={CARDS_OPTIONS}
                paymentOptions={PAYMENT_OPTIONS}
              />
              <Button
                type="button"
                size="small"
                color="inherit"
                onClick={onBackStep}
                startIcon={<Icon icon={arrowIosBackFill} />}
              >
                Back
              </Button>
            </Grid>

            <Grid item xs={12} md={4}>
              <BillingInfo billing={billing} onBackStep={onBackStep} />
              <Summary
                enableEdit
                total={total}
                subtotal={subtotal}
                discount={discount}
                shipping={shipping}
                onEdit={() => onGotoStep(0)}
              />
              <LoadingButton
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                pending={isSubmitting}
              >
                Complete Order
              </LoadingButton>
            </Grid>
          </Grid>
        </Form>
      </FormikProvider>
    </div>
  );
}

export default Payment;
