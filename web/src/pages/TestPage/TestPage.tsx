import { Form, Submit, SubmitHandler, TextField } from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'

import EpisodesCell from 'src/components/EpisodesCell'

// const SEARCH_EPISODES = gql`
//   query SearchEpisodes {
//     v1SearchEpisodes(search: V1RestEpisodeSearchInput) {
//       episodes {
//         uid
//         title
//         episodeNumber
//         series {
//           title
//         }
//         season {
//           title
//         }
//         seasonNumber
//         usAirDate
//         yearFrom
//         yearTo
//         stardateFrom
//         stardateTo
//       }
//     }
//   }
// `

interface FormValues {
  search: string
}

const TestPage = () => {
  // const [create, { loading, error }] =
  //   useQuery<v1SearchEpisodes>(SEARCH_EPISODES)
  const searchEpisodes: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }
  return (
    <>
      <MetaTags title="STAPI Test" description="Simple STAPI Test" />

      <h3>API Test</h3>
      <p>This is where you will be able to test the API.</p>

      <Form onSubmit={searchEpisodes} className="p-2">
        <TextField name="search"></TextField>
        <Submit>Save</Submit>
      </Form>

      <EpisodesCell />
    </>
  )
}

export default TestPage
