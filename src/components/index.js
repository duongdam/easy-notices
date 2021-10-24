import { Button, notification } from 'antd'
import 'antd/lib/button/style/index.css'
import 'antd/lib/notification/style/index.css'
import React from 'react'
import styled from 'styled-components'
import { ReactComponent as TickSvg } from '../close.svg'

export const CloseCustom = styled(TickSvg)``

const DivMessage = styled.div`
  width: 80%;
`
const DivDescription = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`

const DivButton = styled(Button)`
  border-radius: 24px;
  font-size: 13px;
  margin-right: 5px;
`

const DivButtonIcon = styled(Button)`
  right: 0;
  width: 30px;
  height: 28px;
  border: 1px solid #f1f1f1;
`

export const showNotice = (props) => {
  if (!props) return null
  const {
    message = 'Success',
    description = null,
    type = 'success',
    placement = 'bottomLeft',
    duration = 1.5,
    buttonCallback = null,
    width = 250,
    className = '',
    borderRadius = 15,
    border = null,
    buttonText = 'Revert',
    onClose = null,
    onClick = null,
    rtl = false
  } = props
  const isFunction = (x) => typeof x === 'function'

  notification[type]({
    ...props,
    rtl,
    onClick: (event) => {
      if (isFunction(onClick)) onClick(event)
    },
    onClose: (event) => {
      if (isFunction(onClose)) onClose(event)
    },
    className,
    style: {
      width: width,
      borderRadius: borderRadius,
      border
    },
    message: <DivMessage>{message || ''}</DivMessage>,
    description: <DivDescription>{description || ''}</DivDescription>,
    placement,
    duration,
    closeIcon: (
      <div>
        {isFunction(buttonCallback) ? (
          <DivButton
            size='small'
            type='primary'
            onClick={(event) => buttonCallback(event)}
          >
            {buttonText || ''}
          </DivButton>
        ) : null}
        <DivButtonIcon shape='circle' icon={<CloseCustom />} />
      </div>
    )
  })
}

export const destroyNotice = () => {
  notification.destroy()
}
