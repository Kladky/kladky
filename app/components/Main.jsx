import React, { Component } from 'react'

export default class Main extends Component {
  componentDidMount() {
  }

  // nextJoke = () =>
  //   this.setState({
  //     joke: randomJoke(),
  //     answered: false,
  //   })

  // answer = () =>
  //   this.setState({answered: true})

  render() {
    return (
      <div>
        <h1>Sara Kladky</h1>
        <p>I'm currently a front end engineer at <a target='_blank' href='http://honey.is'>Honey</a>. Before that, I was a technical project manager at <a target='_blank' href='https://www.ted.com/'>TED</a> and worked as a freelance front end developer. I've attended the <a target='_blank' href='https://www.gracehopper.com/'>Grace Hopper immersive software engineering program</a> at <a target='_blank' href='https://www.fullstackacademy.com/'>Fullstack Academy</a>. I have a BA from <a target='_blank' href='http://www.bennington.edu/'>Bennington College</a> where I studied code in a visual art context.</p>
        <p>I live in Brooklyn, NY. Besides programming, I enjoy fiber arts, DIY projects, and science fiction.</p>
      </div>
    )
  }
}
