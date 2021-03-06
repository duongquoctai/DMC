import React, { useState } from 'react';
import Page from '~/components/Page';
import Block from '~/components/Block';
import { PATH_APP } from '~/routes/paths';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import HeaderDashboard from '~/components/HeaderDashboard';
import { makeStyles } from '@mui/styles';
import {
  Box,
  Tab,
  Grid,
  Card,
  Tabs,
  Container,
  CardContent,
  CardHeader
} from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';

// ----------------------------------------------------------------------

const SIMPLE_TAB = [
  { value: '1', icon: <PhoneIcon />, label: 'Item One', disabled: false },
  { value: '2', icon: <FavoriteIcon />, label: 'Item Two', disabled: false },
  { value: '3', icon: <PersonPinIcon />, label: 'Item Three', disabled: true }
];

const SCROLLABLE_TAB = [
  { value: '1', icon: <PhoneIcon />, label: 'Item 1' },
  { value: '2', icon: <FavoriteIcon />, label: 'Item 2' },
  { value: '3', icon: <PersonPinIcon />, label: 'Item 3' },
  { value: '4', icon: <PersonPinIcon />, label: 'Item 4' },
  { value: '5', icon: <PersonPinIcon />, label: 'Item 5' },
  { value: '6', icon: <PersonPinIcon />, label: 'Item 6' },
  { value: '7', icon: <PersonPinIcon />, label: 'Item 7' }
];

const useStyles = makeStyles(theme => ({
  root: {}
}));

// ----------------------------------------------------------------------

function TabsView() {
  const classes = useStyles();
  const [value, setValue] = useState('1');
  const [value1, setValue1] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChange1 = (event, newValue) => {
    setValue1(newValue);
  };

  return (
    <Page title="Components | Tabs" className={classes.root}>
      <Container maxWidth="lg">
        <HeaderDashboard
          heading="Tabs"
          links={[
            { name: 'Dashboard', href: PATH_APP.root },
            { name: 'Components', href: PATH_APP.components.root },
            { name: 'Tabs' }
          ]}
          moreLink="https://next.material-ui.com/components/tabs"
        />

        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Text" />
              <CardContent>
                <Block>
                  <TabContext value={value}>
                    <TabList onChange={handleChange}>
                      {SIMPLE_TAB.map(tab => (
                        <Tab
                          key={tab.value}
                          label={tab.label}
                          value={tab.value}
                        />
                      ))}
                    </TabList>
                    <Box
                      sx={{
                        p: 2,
                        mt: 2,
                        height: 80,
                        width: '100%',
                        borderRadius: 1,
                        bgcolor: 'background.neutral'
                      }}
                    >
                      {SIMPLE_TAB.map(panel => (
                        <TabPanel key={panel.value} value={panel.value}>
                          {panel.label}
                        </TabPanel>
                      ))}
                    </Box>
                  </TabContext>
                </Block>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card>
              <CardHeader title="Icon" />
              <CardContent>
                <Block>
                  <Tabs value={value} onChange={handleChange}>
                    {SIMPLE_TAB.map(tab => (
                      <Tab key={tab.value} icon={tab.icon} value={tab.value} />
                    ))}
                  </Tabs>
                </Block>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card>
              <CardHeader title="Text & Icon" />
              <CardContent>
                <Block>
                  <TabContext value={value}>
                    <TabList onChange={handleChange}>
                      {SIMPLE_TAB.map(tab => (
                        <Tab
                          key={tab.value}
                          icon={tab.icon}
                          label={tab.label}
                          value={tab.value}
                          disabled={tab.disabled}
                        />
                      ))}
                    </TabList>
                  </TabContext>
                </Block>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card>
              <CardHeader title="Scrollable" />
              <CardContent>
                <Block>
                  <Box sx={{ width: 320 }}>
                    <TabContext value={value1}>
                      <TabList
                        onChange={handleChange1}
                        variant="scrollable"
                        scrollButtons="auto"
                      >
                        {SCROLLABLE_TAB.map(tab => (
                          <Tab
                            key={tab.value}
                            label={tab.label}
                            value={tab.value}
                          />
                        ))}
                      </TabList>
                    </TabContext>
                  </Box>
                </Block>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

export default TabsView;
