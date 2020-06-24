/** @jsx jsx */
import React, { useState } from "react"
import { css, jsx, keyframes } from "@emotion/core"
import styled from "@emotion/styled"

const Wiggle = keyframes`
0%{
    transform:rotate(14deg);
}

50%{
    transform:rotate(-14deg);
}

100%{
    transform:rotate(14deg);
}
  
`

const HandMotion = styled.div`
  margin-right: 0.35rem;
  animation: ${Wiggle} 2s linear infinite;
`
const Wave = () => {
  const [waves, setWaves] = useState(0)

  const label = `${waves} ${waves <= 1 ? "wave" : "waves"}`
  return (
    <>
      <button
        css={css`
          display: flex;
          justify-content: center;
          font-size: 1.25rem;
          background: rebeccapurple;
          border: 1px solid rebeccapurple;
          color: white;
          border-radius: 2px;
          padding: 0.25rem 0.5rem;
        `}
        onClick={() => setWaves(waves + 1)}
      >
        <HandMotion>👋</HandMotion>
        {label}
      </button>
    </>
  )
}

export default Wave
