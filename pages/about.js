import React from 'react'
import BasicPage from '../templates/basic-page'
import Cosmic from '../models/cosmic'
export default class About extends React.Component {
  static getInitialProps () {
    return {
      object: {
          title: 'Academy',
          content: '<p style="margin-bottom: 17px; padding: 0px; direction: ltr; line-height: 1.6;">You know, being a test pilot isn\'t always the healthiest business in the world.</p><p style="margin-bottom: 17px; padding: 0px; direction: ltr; line-height: 1.6;">For those who have seen the Earth from space, and for the hundreds and perhaps thousands more who will, the experience most certainly changes your perspective. The things that we share in our world are far more valuable than those which divide us.</p><p style="margin-bottom: 17px; padding: 0px; direction: ltr; line-height: 1.6;">A Chinese tale tells of some men sent to harm a young girl who, upon seeing her beauty, become her protectors rather than her violators. That\'s how I felt seeing the Earth for the first time. I could not help but love and cherish her.</p>',
          metafield:
           { headline:
              { value: 'Academy',
                key: 'headline',
                title: 'Headline',
                type: 'text',
                children: null },
             hero_gradient_color_hex_start:
              { value: '#5C258D',
                key: 'hero_gradient_color_hex_start',
                title: 'Hero Gradient Color Hex Start',
                type: 'text',
                children: null },
             hero_gradient_color_hex_end:
              { value: '#4389A2',
                key: 'hero_gradient_color_hex_end',
                title: 'Hero Gradient Color Hex End',
                type: 'text',
                children: null } } }

    }
  }
  render () {
    const page = this.props.object
    console.log(page)
    return <BasicPage page={page}/>
  }
}
