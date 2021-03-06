import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import checkmarkCircle2Fill from '@iconify-icons/eva/checkmark-circle-2-fill';
import { makeStyles } from '@mui/styles';
import {
  Box,
  Card,
  Grid,
  Radio,
  Typography,
  RadioGroup,
  CardHeader,
  CardContent,
  FormControlLabel
} from '@mui/material';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {},
  option: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 2.5),
    justifyContent: 'space-between',
    borderRadius: theme.shape.borderRadius,
    transition: theme.transitions.create('all'),
    border: `solid 1px ${theme.palette.grey[500_32]}`
  },
  label: {
    flexGrow: 1,
    marginRight: 0,
    padding: theme.spacing(3, 0)
  },
  isSelected: { boxShadow: theme.shadows[25].z8 }
}));

// ----------------------------------------------------------------------

Delivery.propTypes = {
  formik: PropTypes.object,
  deliveryOptions: PropTypes.array,
  onApplyShipping: PropTypes.func,
  className: PropTypes.string
};

function Delivery({ formik, deliveryOptions, onApplyShipping, className }) {
  const classes = useStyles();
  const { values, setFieldValue } = formik;

  return (
    <Card className={clsx(classes.root, className)}>
      <CardHeader title="Delivery options" />
      <CardContent>
        <RadioGroup
          name="delivery"
          value={Number(values.delivery)}
          onChange={e => {
            const { value } = e.target;
            setFieldValue('delivery', Number(value));
            onApplyShipping(Number(value));
          }}
        >
          <Grid container spacing={2}>
            {deliveryOptions.map(delivery => {
              const { value, title, description } = delivery;
              return (
                <Grid key={value} item xs={12} md={6}>
                  <div
                    className={clsx(classes.option, {
                      [classes.isSelected]: values.delivery === value
                    })}
                  >
                    <FormControlLabel
                      value={value}
                      control={
                        <Radio
                          color="primary"
                          checkedIcon={<Icon icon={checkmarkCircle2Fill} />}
                        />
                      }
                      label={
                        <Box sx={{ ml: 1 }}>
                          <Typography variant="subtitle2">{title}</Typography>
                          <Typography variant="body2" color="textSecondary">
                            {description}
                          </Typography>
                        </Box>
                      }
                      className={classes.label}
                    />
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </RadioGroup>
      </CardContent>
    </Card>
  );
}

export default Delivery;
