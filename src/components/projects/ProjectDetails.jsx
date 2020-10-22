import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Container, Row} from 'reactstrap'
import { Spinner } from 'reactstrap'


const ProjectDetails = ({ project }) => {

  const story = ({ title, content, createdAt, authorUser}) => (
    <Container>
      <Row className="h1 my-4 mx-2">
        { title }
      </Row>
      <Row className="mx-4 text-justify">
        {content}
      </Row>
      <hr/>
      <Container className="mx-2 mb-3">
        <Row>{authorUser}</Row>
        <Row>20 de febrero de 2020</Row>
      </Container>
    </Container>
  )

  const LoadingSpinners = (
    <Container className="my-5 d-flex justify-content-center" fluid={true}>
      <Spinner type="grow" color="warning" />
      <Spinner type="grow" color="warning" />
      <Spinner type="grow" color="warning" />
      <Spinner type="grow" color="warning" />
      <Spinner type="grow" color="warning" />
    </Container>
  )

  return (
    <>{
      (project) 
        ? story(project)
        : LoadingSpinners
    }</>
  )
}

const mapStateToProps = (state) => {
  const { project } = state.firestore.data
  return({
    project
  })
}

export default compose(
  firestoreConnect(props => [{
    collection: 'projects',
    doc: props.id,
    storeAs: "project"
    }]
  ),
  connect(mapStateToProps)
)(ProjectDetails)