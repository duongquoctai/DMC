import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import editFill from '@iconify-icons/eva/edit-fill';
import { makeStyles } from '@mui/styles';
import {
  Card,
  Button,
  Typography,
  CardHeader,
  CardContent
} from '@mui/material';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(3)
  }
}));

// ----------------------------------------------------------------------

BillingInfo.propTypes = {
  billing: PropTypes.object,
  onBackStep: PropTypes.func,
  className: PropTypes.string
};

function BillingInfo({ billing, onBackStep, className }) {
  const classes = useStyles();
  const { receiver, phone, addressType, fullAddress } = billing;

  return (
    <Card className={clsx(classes.root, className)}>
      <CardHeader
        title="Billing Address"
        action={
          <Button
            size="small"
            type="button"
            startIcon={<Icon icon={editFill} />}
            onClick={onBackStep}
          >
            Edit
          </Button>
        }
      />
      <CardContent>
        <Typography variant="subtitle2" gutterBottom>
          {receiver}&nbsp;
          <Typography component="span" variant="body2" color="textSecondary">
            ({addressType})
          </Typography>
        </Typography>

        <Typography variant="body2" gutterBottom>
          {fullAddress}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {phone}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default BillingInfo;
