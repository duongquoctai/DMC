import * as React from 'react';
import {
  Box,
  Card,
  Table,
  TableRow,
  Checkbox,
  TableBody,
  TableCell,
  Container,
  IconButton,
  Typography,
  TableContainer,
  TablePagination,
  Modal,
  TextField,
  Button
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';

const style = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  //   border: '0.5px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: '5%'
};

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required')
});

export default function ModalAddNewDatablend({ open, setOpen }) {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      console.log('test data', values);
    }
  });
  const handleClose = () => setOpen(false);

  return (
    <Modal
      keepMounted
      open={open}
      onClose={handleClose}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <Box sx={style}>
        <Typography id="keep-mounted-modal-title" variant="h5" sx={{ mb: 3 }}>
          Add Datablend
        </Typography>
        {/* <Box
          sx={{
            p: 2,
            display: 'flex',
            alignItems: 'center'
          }}
        > */}
        <form onSubmit={formik.handleSubmit}>
          <TextField
            sx={{ p: 2 }}
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            sx={{ p: 2 }}
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </form>
        {/* </Box> */}
      </Box>
    </Modal>
  );
}
