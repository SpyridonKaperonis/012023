import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { styles } from '../styles';

export const GithubCard = (props) => {
    const image = props.image;
    const title = props.title;
    const text = props.text;
    const hyperlink = props.link;
  return (
    <Card style={styles.card}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Button variant="primary" href={hyperlink} >Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}
