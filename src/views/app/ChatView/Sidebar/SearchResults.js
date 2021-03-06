import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import SearchNotFound from '~/components/SearchNotFound';
import { makeStyles } from '@mui/styles';
import {
  Box,
  List,
  Avatar,
  ListItem,
  Typography,
  ListItemText,
  ListItemAvatar
} from '@mui/material';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {},
  listItem: {
    padding: theme.spacing(1.5, 3)
  },
  notFound: {
    margin: 'auto',
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    width: `calc(100% - ${theme.spacing(6)})`,
    backgroundColor: theme.palette.background.neutral
  }
}));

// ----------------------------------------------------------------------

SearchResults.propTypes = {
  query: PropTypes.string,
  results: PropTypes.array,
  onSelectContact: PropTypes.func,
  className: PropTypes.string
};

function SearchResults({
  query,
  results,
  onSelectContact,
  className,
  ...other
}) {
  const classes = useStyles();
  const isFound = results.length > 0;

  return (
    <div className={clsx(classes.root, className)} {...other}>
      <Box sx={{ px: 3 }}>
        <Typography variant="subtitle1" color="textSecondary" paragraph>
          Contacts
        </Typography>
      </Box>
      <List disablePadding>
        {results.map(result => (
          <ListItem
            key={result.id}
            button
            onClick={() => onSelectContact(result)}
            className={classes.listItem}
          >
            <ListItemAvatar>
              <Avatar alt={result.name} src={result.avatar} />
            </ListItemAvatar>
            <ListItemText
              primary={result.name}
              primaryTypographyProps={{
                noWrap: true,
                variant: 'subtitle2'
              }}
            />
          </ListItem>
        ))}
      </List>
      {!isFound && (
        <SearchNotFound searchQuery={query} className={classes.notFound} />
      )}
    </div>
  );
}

export default SearchResults;
