import React from 'react'
import PropTypes from 'prop-types'
import Avatar from '@material-ui/core/Avatar'
import AccountCircle from '@material-ui/icons/AccountCircle'

const HeaderAvatar = ({curItem}) => {
  const avatar = curItem
    ?
    <Avatar
      src={curItem.general.avatar}
      style={{border: 1, width: 100, height: 100, margin: 2}}/>
    :
    <AccountCircle style={{border: 1, width: 100, height: 100}}/>

  return (
    <div>
      {avatar}
    </div>
  )
}

HeaderAvatar.propTypes = {
  curItem: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired
}

export default HeaderAvatar