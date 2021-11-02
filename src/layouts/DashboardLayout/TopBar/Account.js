import React, { useRef, useState } from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { Icon } from '@iconify/react';
import { useDispatch } from 'react-redux';
import MyAvatar from '~/components/MyAvatar';
// import { useSnackbar } from 'notistack';
// import { PATH_APP } from '~/routes/paths';
// import { useFirebase } from 'react-redux-firebase';
// import personFill from '@iconify-icons/eva/person-fill';
// import settingsFill from '@iconify-icons/eva/settings-fill';
import { CENTRAL_LOGOUT_ENDPOINT } from '~/api/endpoint';
import PopoverMenu from '~/components/PopoverMenu';
import useIsMountedRef from '~/hooks/useIsMountedRef';
import homeFill from '@iconify-icons/eva/home-fill';
import { alpha } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { Button, Box, Divider, MenuItem, Typography } from '@mui/material';
import { MIconButton } from '~/@material-extend';

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  {
    label: 'Home',
    icon: homeFill,
    linkTo: '/'
  }
  // {
  //   label: 'Profile',
  //   icon: personFill,
  //   linkTo: PATH_APP.management.user.profile
  // },
  // {
  //   label: 'Settings',
  //   icon: settingsFill,
  //   linkTo: PATH_APP.management.user.account
  // }
];

const useStyles = makeStyles(theme => ({
  menuItem: {
    ...theme.typography.body2,
    padding: theme.spacing(1, 2.5)
  },
  btnAvatar: {
    padding: 0,
    width: 44,
    height: 44
  },
  isSelected: {
    '&:before': {
      zIndex: 1,
      content: "''",
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      position: 'absolute',
      background: alpha(theme.palette.grey[900], 0.8)
    }
  },
  divider: {
    margin: theme.spacing(1, 0)
  }
}));

// ----------------------------------------------------------------------

function Account() {
  const classes = useStyles();
  const history = useHistory();
  const anchorRef = useRef(null);
  const dispatch = useDispatch();
  const isMountedRef = useIsMountedRef();
  const [isOpen, setOpen] = useState(false);
  const displayName = 'Administrator';
  // const firebase = useFirebase();
  // const { enqueueSnackbar } = useSnackbar();
  // const { auth, profile } = useSelector(state => state.firebase);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = async () => {
    try {
      window.location = CENTRAL_LOGOUT_ENDPOINT;
      if (isMountedRef.current) {
        handleClose();
      }
    } catch (err) {
      // enqueueSnackbar('Unable to logout', { variant: 'error' });
      console.error(err);
    }
  };

  return (
    <>
      <MIconButton
        ref={anchorRef}
        onClick={handleOpen}
        className={clsx(classes.btnAvatar, { [classes.isSelected]: isOpen })}
      >
        <MyAvatar />
      </MIconButton>

      <PopoverMenu
        width={220}
        open={isOpen}
        onClose={handleClose}
        anchorEl={anchorRef.current}
      >
        <Box sx={{ my: 2, px: 2.5 }}>
          <Typography variant="subtitle1" color="textPrimary" noWrap>
            {displayName}
          </Typography>
          {/* <Typography variant="body2" color="textSecondary" noWrap>
            {'demo@fpt.com.vn'}
          </Typography> */}
        </Box>

        <Divider className={classes.divider} />

        {MENU_OPTIONS.map(option => (
          <MenuItem
            key={option.label}
            to={option.linkTo}
            component={RouterLink}
            onClick={handleClose}
            className={classes.menuItem}
          >
            <Box
              component={Icon}
              icon={option.icon}
              sx={{
                mr: 2,
                width: 24,
                height: 24
              }}
            />

            {option.label}
          </MenuItem>
        ))}

        <Box sx={{ p: 2, pt: 1.5 }}>
          <Button
            fullWidth
            color="inherit"
            variant="outlined"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Box>
      </PopoverMenu>
    </>
  );
}

export default Account;
