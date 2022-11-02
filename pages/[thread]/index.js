import { fetcher } from '../../helpers/api'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styled from 'styled-components'
import AddQuestionOrAnswer from '../../components/AddQuestionOrAnswer'
import { sendAnswer } from '../../helpers/api'

export default function Thread() {
  const router = useRouter()
  const { thread } = router.query

  const { data, error, mutate } = useSWR(`/api/questions/${thread}`, fetcher)
  // console.log(data)
  if (error) {
    return <div>failed to load</div>
  }
  if (!data) {
    return <div>loading...</div>
  }

  function onAdd(questionInput) {
    console.log(questionInput)
    sendAnswer(thread, questionInput)
    mutate()
  }

  return (
    <StyledSection>
      <Link href="/">
        <p>Back to Homepage</p>
      </Link>
      <h3>{data.question}</h3>
      <StyledUl>
        {data.answers.map((answer) => {
          return (
            <>
              <StyledLi key={answer.id}>{answer.answer}</StyledLi>
            </>
          )
        })}
      </StyledUl>
      <AddQuestionOrAnswer onAdd={onAdd} />
    </StyledSection>
  )
}

const StyledSection = styled.section`
  text-align: center;
  padding: 2em;
  line-height: 2;

  & p {
    text-align: left;
  }
`

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2em;
  padding: 0 2em;
`
const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  padding: 0.5em 1em;
  background-color: lightgrey;
  border-radius: 20px;
`
