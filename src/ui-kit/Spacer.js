import styled from 'styled-components'
import PropTypes from 'prop-types'
import React from 'react'

import { theme } from '../theme'

const initial = 20
const mobileFactor = 2
const calculateSpacing = (space, spacemob, samespace) =>
  samespace
    ? space
    : spacemob || (spacemob === 0 && typeof spacemob === 'number')
    ? spacemob
    : space / mobileFactor

const Inner = styled.div`
  height: ${({ space, spacemob, samespace }) => calculateSpacing(space, spacemob, samespace)}px;
  min-width: ${({ space, spacemob, samespace }) => calculateSpacing(space, spacemob, samespace)}px;

  &:before {
    content: '${({ space, spacemob, samespace }) => calculateSpacing(space, spacemob, samespace)}';
    display: none;
  }
  @media (min-width: ${theme.breakpoint}px) {
    height: ${({ space }) => space}px;
    min-width: ${({ space }) => space}px;

    &:before {
      content: '${({ space }) => space}';
      display: none;
    }
  }
  @media (min-width: ${theme.breakpoint}px) {
    height: ${({ space = initial }) => space}px;
    min-width: ${({ space = initial }) => space}px;

  &:before {
    content: '${({ space = initial }) => space}';
    display: none;
  }
  }
`

export const Spacer = ({ space = initial, spacemob, samespace = false, ...rest }) => (
  <Inner data-testid="spacer" space={space} spacemob={spacemob} samespace={samespace} {...rest} />
)

Spacer.propTypes = {
  space: PropTypes.number,
  spacemob: PropTypes.number,
  samespace: PropTypes.bool
}
