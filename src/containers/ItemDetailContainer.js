import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ItemDetail from '../components/ItemDetail'
import Header from '../components/Header'
import { getItems } from '../actions/actionCreator'

class ItemDetailContainer extends React.Component {

  componentDidMount () {
    this.props.getItems()
  }

  render () {
    if (!this.props.curItem) return null//page 404
    return (
      <div>
        <Header curItem={this.props.curItem}/>
        <ItemDetail item={this.props.curItem} goBack={this.props.goBack}/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  curItem: state.mainReducer.items.find(item => item.id === ownProps.match.params.id),
  goBack: ownProps.history.goBack
})

const mapDispatchToProps = {
  getItems
}

ItemDetailContainer.propTypes = {
  curItem: PropTypes.object.isRequired,
  goBack: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetailContainer)