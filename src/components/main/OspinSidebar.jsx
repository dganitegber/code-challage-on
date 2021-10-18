import React from 'react'
import { Container, Sidebar, Menu, Icon, Image, Divider } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import ServerAPI from 'utils/ServerAPI'
import logoIcon from 'images/logoIcon.png'

class OspinSidebar extends React.Component {
  error = Error(500)

  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  getCurrentTabFromUrl() {
    const { location: { pathname } } = this.props
    const activeTab = pathname.substr(1)
    return activeTab || ''
  }

  changeMenuTabHandler = tab => {
    // const apiRequest = new ServerAPI()
    this.setState({ hasError: false })
    this.setState({ hasError: (Math.random() >= 0.5) })
    if (this.state.hasError) {
      const { history } = this.props
      history.push('/error')
      // console.log(ServerAPI.reportError({ errorName: '500' }))
      ServerAPI.reportError({ errorName: '500', creationTime: new Date(), stackTrace: history })   
    } else {
      const { history } = this.props
      history.push(`/${tab}`)
    }
  }

  render() {
    const activeTab = this.getCurrentTabFromUrl()
    return (
      <Container>
        <Sidebar as={Menu} visible vertical className='medium with-margin-r'>

          <Divider hidden />
          <Image src={logoIcon} centered />
          <Divider hidden />

          <Menu.Item
            active={activeTab === 'devices'}
            onClick={() => this.changeMenuTabHandler('devices')}
            as='a'
          >
            <Icon name='hdd' />
            Devices
          </Menu.Item>

          <Menu.Item
            active={activeTab === 'profile'}
            onClick={() => this.changeMenuTabHandler('profile')}
            as='a'
          >
            <Icon name='user' />
            Profile
          </Menu.Item>

          <Menu.Item
            active={activeTab === 'notifications'}
            onClick={() => this.changeMenuTabHandler('notifications')}
            as='a'
          >
            <Icon name='bell' color='red' />
            Notifications
          </Menu.Item>

          <Menu.Item
            active={activeTab === 'changelog'}
            onClick={() => this.changeMenuTabHandler('changelog')}
            as='a'
          >
            <Icon name='question circle' color='red' />
            Changelog
          </Menu.Item>

          <Menu.Item disabled as='a'>
            <Icon name='log out' />
            Logout
          </Menu.Item>

        </Sidebar>
      </Container>
    )
  }
}

export default withRouter(OspinSidebar)
