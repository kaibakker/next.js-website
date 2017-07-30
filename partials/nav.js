import React from 'react'
import S from 'shorti'
import Link from 'next/link'
export default class Nav extends React.Component {
  render() {
    const page = this.props.page
    return (
      <nav className="nav" style={ S('absolute w-100p text-center z-1 h-60') }>
        <ul>

          <li>
            <Link href="/">getsolidity.com</Link>
          </li>
          <li>
            <Link href="/"><i className="logo"></i></Link>
          </li>
          <li>
            <Link href="/academy">academy</Link>
          </li>

          <li>
            <Link href="/consulting">consulting</Link>
          </li>
          <li>
            <Link href="/contact">contact</Link>
          </li>
        </ul>
      </nav>
    )
  }
}
