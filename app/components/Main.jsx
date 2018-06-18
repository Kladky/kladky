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
      <div id='main-card'>
        <h1>Sara Kladky</h1>
        <p>I'm currently a front end engineer at <a target='_blank' href='http://honey.is'>Honey</a>. Before that, I was a technical project manager at <a target='_blank' href='https://www.ted.com/'>TED</a> and worked as a freelance developer.</p>
        <p>I attended the <a target='_blank' href='https://www.gracehopper.com/'>Grace Hopper program</a> at <a target='_blank' href='https://www.fullstackacademy.com/'>Fullstack Academy</a>, and I have a BA from <a target='_blank' href='http://www.bennington.edu/'>Bennington College</a> where I studied code in a visual art context.</p>
        <p>I live in Brooklyn, NY. Besides programming, I enjoy fiber arts, DIY projects, and science fiction.</p>
        <p id="icons">
          <a target='_blank' href="https://twitter.com/kladky"><i className="fa fa-twitter"></i></a>
          <a target='_blank' href="https://www.instagram.com/kladky/"><i className="fa fa-instagram"></i></a>
          <a target='_blank' href="https://github.com/Kladky"><i className="fa fa-github"></i></a>
          <a target='_blank' href="https://www.linkedin.com/in/sara-kladky"><i className="fa fa-linkedin"></i></a>
          <a target='_blank' href="mailto:sara@kladky.tech"><i className="fa fa-envelope-o"></i></a>
        </p>
      </div>
    )
  }
}
