import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Markdown from '~/components/Markdown';
import { makeStyles } from '@material-ui/core/styles';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {
    '& h1': {
      marginBottom: theme.spacing(5)
    },
    '& h2': {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(2)
    },
    '& h3, h4, h5, h6': {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2)
    },
    '& img': { margin: theme.spacing(5, 0) },
    '& p': { marginBottom: theme.spacing(2) },
    '& ul': { margin: theme.spacing(2, 0) },
    '& pre': { margin: theme.spacing(3, 0) }
  }
}));

// ----------------------------------------------------------------------

ReadMdFile.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string
};

function ReadMdFile({ content, className }) {
  const classes = useStyles();

  /**
   * !Why template fetching Md content
   */

  // const [file, setFile] = useState('');
  // const getFile = useCallback(async () => {
  //   fetch(content)
  //     .then(response => {
  //       return response.text();
  //     })
  //     .then(text => {
  //       setFile(text);
  //     });
  // }, [content]);

  // useEffect(() => {
  //   getFile();
  // }, [getFile]);

  return (
    <Markdown source={content} className={clsx(classes.root, className)} />
  );
}

export default ReadMdFile;
