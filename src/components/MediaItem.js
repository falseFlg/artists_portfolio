import React, { useState } from 'react'
import styled from 'styled-components'

import { Modal, Text } from 'ui-kit'
import { theme } from 'theme'

export const MediaItem = ({ link, label }) => {
  const [visibility, setVisibility] = useState(false)
  const [content, setContent] = useState(null)
  const [isContentLoaded, setLoaded] = useState(false)
  const showModal = content => {
    setContent(content)
    setVisibility(true)
  }
  const onCancel = () => {
    setVisibility(false)
    setContent(null)
    setLoaded(false)
  }

  const handleLoad = () => {
    setLoaded(true)
  }

  const youtubeLink = content && `https://www.youtube.com/embed/${content}`
  return (
    <>
      <LinkWrapper onClick={() => showModal(link)}>
        <StyledText>{label}</StyledText>
      </LinkWrapper>
      {youtubeLink ? (
        <Modal visible={visibility} onCancel={onCancel} isContentLoaded={isContentLoaded}>
          <Iframe
            width="560"
            height="315"
            src={youtubeLink}
            frameBorder="0"
            allowFullScreen
            onLoad={handleLoad}
            isContentLoaded={isContentLoaded}
          ></Iframe>
        </Modal>
      ) : null}
    </>
  )
}

const StyledText = styled(Text)`
  @media (min-width: ${theme.breakpoint}px) {
    text-transform: uppercase;
    text-align: center;
    color: ${theme.colors.blue.primary};
  }
`

const LinkWrapper = styled.div`
  cursor: pointer;
  border-bottom: 1px ${theme.colors.gray.primary} solid;
  padding: 0 0 2px 0;

  @media (min-width: ${theme.breakpoint}px) {
    padding: 0 5px;
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: #fbfbfb;

    &:hover {
      background: ${theme.colors.blue.primary};

      & ${StyledText} {
        color: ${theme.colors.white};
      }
    }
  }
`

const Iframe = styled.iframe`
  display: ${({ isContentLoaded }) => (isContentLoaded ? 'block' : 'none')};
  @media (max-width: ${theme.breakpoint}px) {
    width: auto;
    height: auto;
  }
`