import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import createAvatar from '~/utils/createAvatar';
import { Link, Typography } from '@mui/material';
import { fDateTimeSuffix } from '~/utils/formatTime';
import roundReply from '@iconify-icons/ic/round-reply';
import { useHistory, useParams } from 'react-router-dom';
import moreVerticalFill from '@iconify-icons/eva/more-vertical-fill';
import arrowIosBackFill from '@iconify-icons/eva/arrow-ios-back-fill';
import { makeStyles } from '@mui/styles';
import { Box, Hidden, Tooltip, IconButton } from '@mui/material';
import { MAvatar } from '~/@material-extend';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {
    height: 84,
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 2),
    justifyContent: 'space-between'
  },
  icon: {
    width: 20,
    height: 20
  },
  info: {
    display: 'flex',
    alignItems: 'center'
  }
}));

// ----------------------------------------------------------------------

Toolbar.propTypes = {
  mail: PropTypes.object,
  className: PropTypes.string
};

function Toolbar({ mail, className, ...other }) {
  const classes = useStyles();
  const history = useHistory();
  const { systemLabel, customLabel } = useParams();

  const handleBack = () => {
    if (systemLabel) {
      return history.push(`/app/mail/${systemLabel}`);
    }
    if (customLabel) {
      return history.push(`/app/mail/label/${customLabel}`);
    }
    return history.push('/app/mail/inbox');
  };

  return (
    <div className={clsx(classes.root, className)} {...other}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Tooltip title="Back">
          <IconButton onClick={handleBack}>
            <Icon icon={arrowIosBackFill} className={classes.icon} />
          </IconButton>
        </Tooltip>

        <MAvatar
          alt={mail.from.name}
          src={mail.from.avatar}
          color={createAvatar(mail.from.name).color}
        >
          {createAvatar(mail.from.name).name}
        </MAvatar>

        <Box sx={{ ml: 2 }}>
          <Typography display="inline" variant="subtitle2">
            {mail.from.name}
          </Typography>
          <Link color="textSecondary" variant="caption">
            &nbsp; {`<${mail.from.email}>`}
          </Link>
          <Typography display="block" variant="caption" color="textSecondary">
            To:&nbsp;
            {mail.to.map(person => (
              <Link color="inherit" key={person.email}>
                {person.email}
              </Link>
            ))}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Hidden smDown>
          <Typography
            variant="caption"
            color="textSecondary"
            className={classes.date}
          >
            {fDateTimeSuffix(mail.createdAt)}
          </Typography>
          <Tooltip title="Reply">
            <IconButton>
              <Icon icon={roundReply} className={classes.icon} />
            </IconButton>
          </Tooltip>
        </Hidden>
        <Tooltip title="More options">
          <IconButton>
            <Icon icon={moreVerticalFill} className={classes.icon} />
          </IconButton>
        </Tooltip>
      </Box>
    </div>
  );
}

export default Toolbar;
