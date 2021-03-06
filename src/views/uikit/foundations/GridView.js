import React, { useState } from 'react';
import Page from '~/components/Page';
import Block from '~/components/Block';
import { PATH_APP } from '~/routes/paths';
import HeaderDashboard from '~/components/HeaderDashboard';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import {
  Box,
  Card,
  Grid,
  Radio,
  Container,
  Typography,
  CardHeader,
  RadioGroup,
  CardContent,
  FormControlLabel
} from '@mui/material';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {},
  margin: {
    marginBottom: theme.spacing(5)
  },
  card: {
    height: 80,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    bgcolor: 'background.default',
    boxShadow: theme.shadows[25].z8,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper
  }
}));

// ----------------------------------------------------------------------

const LABELS = ['1col', '2col', '3col', '4col', '6col', '12col'];

function GridView() {
  const classes = useStyles();
  const theme = useTheme();
  const [spacing, setSpacing] = useState(2);
  const [column, setColumn] = useState(3);

  const handleChangeSpacing = event => {
    setSpacing(Number(event.target.value));
  };

  const handleChangeColumn = event => {
    setColumn(Number(event.target.value));
  };

  return (
    <Page title="Foundations | Grid" className={classes.root}>
      <Container maxWidth="lg">
        <HeaderDashboard
          heading="Grid"
          links={[
            { name: 'Dashboard', href: PATH_APP.root },
            { name: 'Foundations', href: PATH_APP.foundations.root },
            { name: 'Grid' }
          ]}
        />

        <Card className={classes.margin}>
          <CardHeader title="Spacing" />
          <CardContent>
            <Block>
              <Typography variant="body2" paragraph>
                Spacing: <strong>{theme.spacing(spacing)}</strong>
              </Typography>
              <Grid container justify="center" spacing={spacing}>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(value => (
                  <Grid key={value} item xs={1}>
                    <div className={classes.card} />
                  </Grid>
                ))}
              </Grid>
              <Box sx={{ py: 2, display: 'flex', justifyContent: 'center' }}>
                <RadioGroup
                  row
                  name="spacing"
                  onChange={handleChangeSpacing}
                  value={spacing.toString()}
                >
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(value => (
                    <FormControlLabel
                      key={value}
                      value={value.toString()}
                      label={value.toString()}
                      control={<Radio color="primary" />}
                    />
                  ))}
                </RadioGroup>
              </Box>
            </Block>
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="Column" />
          <CardContent>
            <Block>
              <Grid container justify="center" spacing={3}>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(value => (
                  <Grid key={value} item xs={column}>
                    <div className={classes.card}>xs = {column}</div>
                  </Grid>
                ))}
              </Grid>

              <Box
                sx={{
                  py: 1,
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <RadioGroup
                  row
                  name="column"
                  value={column.toString()}
                  onChange={handleChangeColumn}
                >
                  {[12, 6, 4, 3, 2, 1].map((value, index) => (
                    <FormControlLabel
                      key={value}
                      value={value.toString()}
                      label={LABELS[index]}
                      control={<Radio color="primary" />}
                    />
                  ))}
                </RadioGroup>
              </Box>
            </Block>
          </CardContent>
        </Card>
      </Container>
    </Page>
  );
}

export default GridView;
