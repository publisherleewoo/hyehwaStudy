import React from 'react'
import { Button, Form, Grid, Header,Message, Segment } from 'semantic-ui-react'

const Login = () => (
    <Grid textAlign='center' style={{ height: '60vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
           Login
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />
  
            <Button color='yellow' fluid size='large'>
              KaKao
            </Button>
            <Button color='facebook' fluid size='large'>
              FaceBook
            </Button>
            <Button color='google plus' fluid size='large'>
              Google
            </Button>
          </Segment>
        </Form>
        <Message>
        -
        </Message>
      </Grid.Column>
    </Grid>
  )

export default Login;