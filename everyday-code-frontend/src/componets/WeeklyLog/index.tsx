import React from 'react';
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
  Icon,
  Tab,
} from 'semantic-ui-react'

import { Link } from 'react-router-dom';

const commit_message = 'コミットメッセージを表示する';
const lang_num = 'Typescript xxxxx Line';

const message = (
  <List>
    <List.Item>
      {commit_message}
    </List.Item>
    <List.Item>
      {lang_num}
    </List.Item>
  </List>
)

const panes = [
  { menuItem: '月', render: () => <Tab.Pane>{message}</Tab.Pane> },
  { menuItem: '火', render: () => <Tab.Pane>{message}</Tab.Pane> },
  { menuItem: '水', render: () => <Tab.Pane>{message}</Tab.Pane> },
  { menuItem: '木', render: () => <Tab.Pane>{message}</Tab.Pane> },
  { menuItem: '金', render: () => <Tab.Pane>{message}</Tab.Pane> },
  { menuItem: '土', render: () => <Tab.Pane>{message}</Tab.Pane> },
  { menuItem: '日', render: () => <Tab.Pane>{message}</Tab.Pane> },
]

const WeeklyLog: React.FC = () => {
  console.log('WeeklyLogを通った')

  return (
    <div>
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as={Link} to='/' header>Home</Menu.Item>
          <Menu.Item as={Link} to='weeklyLog'>Weekly Log</Menu.Item>
        </Container>
      </Menu>

      <Container className="weeklyLog" text style={{ marginTop: '5em' }}>
        <Header as='h1' dividing>Weekly Log</Header>
        <Grid container columns={1} doubling>
          <Grid.Column>
            <Segment>
              <Tab panes={panes} />
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    </div>)
}

export default WeeklyLog;