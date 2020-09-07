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

// 草を取得してくれるサービスを利用
// https://grass-graph.moshimo.works/
const git_graph_image: string = `https://grass-graph.moshimo.works/images/${git_account}.png`
const git_hub_url:string = `https://github.com/${git_account}`

const Home: React.FC = () => {
  console.log('Homeを通った')

  return (
    <div>
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as={Link} to='/' header>Home</Menu.Item>
          <Menu.Item as={Link} to='/weeklyLog'>Weekly Log</Menu.Item>
        </Container>
      </Menu>

      <Container text style={{ marginTop: '5em' }}>
        <Header as='h1'>
          <Icon name='user circle' size='huge' />{git_account}
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
                <p>連続〇〇日コミットなんてすごい！</p>
              </Segment>
            </Grid.Column>
          </Grid>
        </Container>

        <Container className="commit-log" text style={{ marginTop: '4em' }}>
          <Header as='h2' dividing>Commit Log</Header>
          <p><b>{git_account}</b>のGitHub活動記録</p>
          <a href={git_hub_url}>
            <Image src={git_graph_image} size='huge' />
          </a>
        </Container>

        <Container className="project" text style={{ marginTop: '4em' }}>
          <Header as='h2' dividing>Project</Header>
          <p>ここにプロジェクト一覧を表示する</p>
        </Container>

      </Container>
    </div>)
}

export default Home