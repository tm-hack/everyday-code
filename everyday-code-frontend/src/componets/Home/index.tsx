import React from 'react';
import Helmet from 'react-helmet';
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

const Home: React.FC = () => {
  const name: string = 'Takumi Masuda';
  return (
    <div>
      <Helmet>
        <title>Everyday Code</title>
      </Helmet>

      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as='a' header>Home</Menu.Item>
          <Menu.Item as='a'>Weekly Log</Menu.Item>
        </Container>
      </Menu>

      <Container text style={{ marginTop: '6em' }}>
        <Header as='h1'>
          <Icon name='user circle' size='huge' /> {name}
        </Header>

        <Container className="summary" text style={{ marginTop: '2em' }}>
          <Header as='h2' dividing>Summary</Header>
          <Grid container columns={2} doubling>
            <Grid.Column>
              <Segment>
                <Header as='h3'>累計コード数</Header>
                <p>ここに累計コード数を記入する</p>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <Header as='h3'>連続コーディング日数</Header>
                <p>ここに連続コーディング日数を記入する</p>
              </Segment>
            </Grid.Column>
          </Grid>

          <Grid container columns={1} doubling>
            <Grid.Column>
              <Segment>
                <Header>メッセージ</Header>
                <p>連続〇〇日コミットなんてすごい！</p>
              </Segment>
            </Grid.Column>
          </Grid>
        </Container>

        <Container className="commit-log" text style={{ marginTop: '5em' }}>
          <Header as='h2' dividing>Commit Log</Header>
          <p>ここにGithubの草グラフを載せる</p>
        </Container>
      </Container>
    </div>)
}

export default Home