import React from 'react'
import S from 'shorti'
export default class Footer extends React.Component {
  render() {
    const page = this.props.page
    return (
      <div>
        <footer className="footer" style={S('w-100p bg-333 color-fff font-18')}>
          <div style={S('maxw-960 center-block p-15 pt-40 pb-60')}>
            <div className="col" style={S('w-60p pull-left')}>
              <div style={S('mb-20')}>Based in Amsterdam</div>
              <div style={S('mb-20')}>Learn solidity</div>
              <div style={S('mb-20')}>Agenda</div>
            </div>


            <div className="clearfix"></div>
          </div>
        </footer>
      </div>
    )
  }
}
