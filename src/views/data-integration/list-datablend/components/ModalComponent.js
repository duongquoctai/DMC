import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
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
import LoadingScreen from '~/components/LoadingScreen';
import { createProject } from '~/redux/slices/project';

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
  projectName: yup
    .string('Enter your project name')
    .required('Project name is required')
});

export default function ModalAddNewDatablend({ open, setOpen, keyMessage }) {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(state => state.project);
  console.log('isLoading', isLoading);
  const formik = useFormik({
    initialValues: {
      projectName: ''
      // email: '',
      // password: ''
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      dispatch(createProject(values.projectName));
      if (isLoading == false) {
        setTimeout(() => {
          handleClose();
          keyMessage('Create Success!');
        }, 300);
      }
    }
  });
  const handleClose = () => {
    formik.resetForm();
    setOpen(false);
  };

  // React.useEffect(() => {

  // }, [isLoading]);

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
            sx={{ mb: 2 }}
            fullWidth
            id="projectName"
            name="projectName"
            label="Project name"
            value={formik.values.projectName}
            onChange={formik.handleChange}
            error={
              formik.touched.projectName && Boolean(formik.errors.projectName)
            }
            helperText={formik.touched.projectName && formik.errors.projectName}
          />
          {/* <TextField
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
          /> */}
          <Button color="primary" variant="contained" fullWidth type="submit">
            <ClipLoader
              css={{
                margin: '2px'
              }}
              loading={isLoading}
              speedMultiplier={1}
            />
            Submit
          </Button>
        </form>
        {/* <Button
          onClick={() => {
            console.log('chay vao day');
            toast.success('🦄 Wow so easy!', {
              position: 'top-right',
              autoClose: 300,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined
            });
          }}
        >
          TestToast
        </Button> */}
      </Box>
    </Modal>
  );
}
