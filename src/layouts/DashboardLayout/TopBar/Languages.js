import React, { useRef, useState } from 'react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import PopoverMenu from '~/components/PopoverMenu';
import { makeStyles } from '@mui/styles';
import { Box, MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import { MIconButton } from '~/@material-extend';

// ----------------------------------------------------------------------

const LANGS = [
  {
    value: 'en',
    label: 'English',
    icon: '/static/icons/ic_flag_en.svg'
  },
  {
    value: 'de',
    label: 'German',
    icon: '/static/icons/ic_flag_de.svg'
  },
  {
    value: 'fr',
    label: 'French',
    icon: '/static/icons/ic_flag_fr.svg'
  }
];

const useStyles = makeStyles(theme => ({
  menuItem: {
    padding: theme.spacing(1, 2.5)
  },
  btnLang: {
    padding: 0,
    width: 44,
    height: 44
  },
  isSelected: {
    backgroundColor: theme.palette.background.selected
  }
}));

// ----------------------------------------------------------------------

function Languages() {
  const classes = useStyles();
  const { i18n } = useTranslation();
  const anchorRef = useRef(null);
  const [isOpen, setOpen] = useState(false);

  const langStorage = localStorage.getItem('i18nextLng');
  const currentLang = LANGS.find(_lang => _lang.value === langStorage);

  const handleChangeLanguage = lng => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  return (
    <>
      <MIconButton
        ref={anchorRef}
        onClick={() => setOpen(true)}
        className={clsx(classes.btnLang, { [classes.isSelected]: isOpen })}
      >
        <img src={currentLang.icon} alt={currentLang.label} />
      </MIconButton>

      <PopoverMenu
        width={200}
        open={isOpen}
        onClose={() => setOpen(false)}
        anchorEl={anchorRef.current}
      >
        <Box sx={{ py: 1 }}>
          {LANGS.map(option => (
            <MenuItem
              key={option.value}
              selected={option.value === langStorage}
              onClick={() => handleChangeLanguage(option.value)}
              className={classes.menuItem}
            >
              <ListItemIcon>
                <Box component="img" alt={option.label} src={option.icon} />
              </ListItemIcon>

              <ListItemText primaryTypographyProps={{ variant: 'body2' }}>
                {option.label}
              </ListItemText>
            </MenuItem>
          ))}
        </Box>
      </PopoverMenu>
    </>
  );
}

export default Languages;
