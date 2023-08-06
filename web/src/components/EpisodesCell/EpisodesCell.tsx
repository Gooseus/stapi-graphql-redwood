import type { EpisodesQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query EpisodesQuery {
    episodeBaseResponse(pageNumber: 0, pageSize: 30) {
      episodes {
        uid
        title
        episodeNumber
        series {
          title
        }
        season {
          title
        }
        seasonNumber
        usAirDate
        yearFrom
        yearTo
        stardateFrom
        stardateTo
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  episodeBaseResponse,
}: CellSuccessProps<EpisodesQuery>) => {
  return (
    <ul className="episode-list">
      {episodeBaseResponse.episodes.map((item) => {
        return (
          <li key={item.uid}>
            <h4>{item.title}</h4>
            <h5>
              {item.series.title}: {item.season.title} Episode{' '}
              {item.episodeNumber}
            </h5>
            <p>First aired {item.usAirDate}</p>
            <p className="italic">
              Stardates {item.stardateFrom || 'N/A'} to{' '}
              {item.stardateTo || 'N/A'}
            </p>
          </li>
        )
      })}
    </ul>
  )
}
