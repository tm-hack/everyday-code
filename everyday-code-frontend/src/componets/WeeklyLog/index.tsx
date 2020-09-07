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
} from 'semantic-ui-react'

import { Link } from 'react-router-dom';
import { userData } from '../../data/user_account'

const git_account = userData.account_name;

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

      <Container text style={{ marginTop: '5em' }}>
        <Header as='h1'>
          <Icon name='user circle' size='huge' />{git_account}
        </Header>
      </Container>

      <Container>
        <Header>WeeklyLogを表示する</Header>
      </Container>
    </div>)
}

export default WeeklyLog;