import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { AntAlert } from 'antd'

const Alert = props => {
  const {
    children,
    className,
    description: descriptionProp,
    ...rest
  } = props

  const componentClassName = classNames(
    'Alert',
    className
  )

  const description = descriptionProp || children

  return (
    <AntAlert {...{
      ...rest,
      className: componentClassName,
      description
    }} />
  )
}

Alert.propTypes = {
  /**
   * Alert types from Ant
   */
  type: PropTypes.oneOf(['error', 'info', 'success', 'warning'])
}
Alert.defaultProps = {
  type: 'warning'
}

export default Alert
