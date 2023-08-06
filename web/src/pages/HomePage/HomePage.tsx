import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <article className="max-w-3xl">
        <p>
          This site was built as an exercise to learn the{' '}
          <a href="https://redwoodjs.com/" target="_blank" rel="noreferrer">
            RedwoodJS
          </a>{' '}
          framework and to see how easy it would be to wire a RedwoodJS GraphQL
          API server to an external 3rd party REST API server, namely the{' '}
          <a
            href="https://stapi.co/api-browser"
            target="_blank"
            rel="noreferrer"
          >
            STAPI Star Trek REST API server
          </a>
          .
        </p>
        <p>
          The STAPI OpenAPI Spec was converted to a graphql schema using{' '}
          <a
            href="https://github.com/IBM/openapi-to-graphql"
            target="_blank"
            rel="noreferrer"
          >
            openapi-to-graphql
          </a>
        </p>
      </article>
    </>
  )
}

export default HomePage
