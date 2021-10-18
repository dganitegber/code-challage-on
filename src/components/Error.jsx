import React from 'react'
import { withRouter } from 'react-router-dom'
import { Container, Segment, Image } from 'semantic-ui-react'
import Potato from 'images/35481.gif'

const Error = () => (
  <Container>
    <Segment>
      <Image src={Potato} size='large' centered style={{ width: '70vw', height: '70vh' }} />
    </Segment>
  </Container>
)

export default withRouter(Error)
