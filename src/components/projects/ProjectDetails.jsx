import React from 'react'
import { Container, Row} from 'reactstrap'

export const ProjectDetails = ({ id }) => {
  return (
      <Container>
        <Row className="h1 my-4 mx-2">
          Title - { id }
        </Row>
        <Row className="mx-4 text-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum ad consequuntur praesentium, id iste mollitia ipsum eum assumenda sed labore, quos provident nam dolorum! Perspiciatis ut quae incidunt aspernatur consequatur? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat eius ducimus modi autem ut nemo! Tempora est corrupti sint ullam inventore eius quos eaque fugiat nulla! Minus ad accusantium unde. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod neque ea in voluptatum aspernatur. Incidunt asperiores aspernatur numquam voluptate officia. Velit deleniti odit culpa magni dolorem repellendus vero laudantium tempora.
        </Row>
        <hr/>
        <Container className="mx-2 mb-3">
          <Row>Andres Pineda 1067817</Row>
          <Row>20 sept 2020</Row>
        </Container>
      </Container>
  )
}