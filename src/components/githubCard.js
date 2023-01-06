import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const GithubCard = (props) => {
    const image = props.image;
    const title = props.title;
    const text = props.text;
    const hyperlink = props.link;
  return (
    <Card style={{alignItems: 'center'}}>
      <Card.Img style={{borderTopLeftRadius: '2vh', borderTopRightRadius: '2vh', height: '14vh', width: '1oo%'}} variant="top" src={image} />
      <Card.Body>
        <Card.Title style={{margin: '1vh', fontWeight: 'bold', fontSize:'2vh'}}>{title}</Card.Title>
        <Card.Text style={{margin: '1vh'}}>
          {text}
        </Card.Text>
        <Button style={{margin: '1vh'}} variant="primary" href={hyperlink} >Explore Repo</Button>
      </Card.Body>
    </Card>
  )
}
