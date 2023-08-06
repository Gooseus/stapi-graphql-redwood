import { NavLink, routes } from '@redwoodjs/router'

type SiteLayoutProps = {
  children?: React.ReactNode
}

const SiteLayout = ({ children }: SiteLayoutProps) => {
  return (
    <>
      <header>
        <h1>STAPI GraphQL</h1>
        <h2>
          A simple GraphQL proxy for the{' '}
          <a href="https://stapi.co" target="_blank" rel="noreferrer">
            Star Trek REST API
          </a>{' '}
          using{' '}
          <a href="https://redwoodjs.com/" target="_blank" rel="noreferrer">
            RedwoodJS
          </a>
        </h2>
        <nav>
          <NavLink activeClassName="active" to={routes.home()}>
            Home
          </NavLink>
          <NavLink activeClassName="active" to={routes.about()}>
            About
          </NavLink>
          <NavLink activeClassName="active" to={routes.test()}>
            API Test
          </NavLink>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default SiteLayout
