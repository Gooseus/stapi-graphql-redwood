import type { AnimalsQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query AnimalsQuery {
    animalBaseResponse {
      animals {
        uid
        name
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
  animalBaseResponse,
}: CellSuccessProps<AnimalsQuery>) => {
  return (
    <ul>
      {animalBaseResponse.animals.map((item) => {
        return <li key={item.uid}>{JSON.stringify(item)}</li>
      })}
    </ul>
  )
}
