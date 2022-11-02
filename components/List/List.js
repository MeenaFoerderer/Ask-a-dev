import useSWR from 'swr'
import { fetcher } from '../../helpers/api'
import { useState } from 'react'
import styled from 'styled-components'
//import Link from 'next/link'

export default function List() {
  const { data, error } = useSWR('/api/questions', fetcher)
  console.log(data)
  if (error) {
    return <div>failed to load</div>
  }
  if (!data) {
    return <div>loading...</div>
  }

  return (
    <StyledUl>
      {data.map((listItem) => {
        return (
          <StyledLi key={listItem.id}>
            <div>
              <span>{listItem.closed ? '✅' : '💬'}</span>
              <h3>{listItem.question}</h3>
            </div>

            <div>
              <p>{listItem.submitter}</p>
              <p>{listItem.submissionDate.substr(0, 10)}</p>
            </div>
          </StyledLi>
        )
      })}
    </StyledUl>
  )
}

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2em;
`
const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  padding: 0.5em 1em;
  background-color: lightgrey;
  border-radius: 20px;
`
