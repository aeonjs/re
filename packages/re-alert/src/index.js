import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import AntAlert from 'antd/lib/alert'
import 'antd/lib/alert/style/css.js'
import './styles.css'

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
  type: PropTypes.oneOf(['error', 'info', 'success', 'warning'])
}
Alert.defaultProps = {
  type: 'warning'
}

export default Alert
