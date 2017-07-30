import React from 'react'
import BasicPage from '../templates/basic-page'
import Cosmic from '../models/cosmic'
export default class About extends React.Component {
  static getInitialProps () {
    return {
      object: {
          title: 'About getsolidity',
          content: '<p style="margin-bottom: 17px; padding: 0px; direction: ltr; line-height: 1.6;">The core value of getsolidity.com is to excelerate the understanding of Solidity to anhance the quality of contracts during the blockchain revolution.</p><p style="margin-bottom: 17px; padding: 0px; direction: ltr; line-height: 1.6;">With a small group of entausiastic coders involved in cryptocurrenies, ethereuem and solitity. We over solidity courses in Amsterdam and security autdits smart contracts on the ethereum, ethereuem classic and the rootstock network.</p><p style="margin-bottom: 17px; padding: 0px; direction: ltr; line-height: 1.6;"></p>',
          metafield:
           { headline:
              { value: 'About getsolidity.com',
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
