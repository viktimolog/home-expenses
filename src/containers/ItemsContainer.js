import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Items from '../components/Items'
import Header from '../components/Header'
// import Search from '../components/Search'
import {getItems, findItems} from '../actions/actionCreator'

class ItemsContainer extends React.Component {

    componentDidMount() {
        this.props.getItems()
    }

    render() {
        return (
            <div>
                {/*<Search findItems={this.props.findItems}/>*/}
                <Header curItem={false}/>
                <Items items={this.props.items}
                />
            </div>)
    }
}

ItemsContainer.propTypes = {
    items: PropTypes.array.isRequired,
    getItems: PropTypes.func.isRequired,
    findItems: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    items: state.mainReducer.items,
})

const mapDispatchToProps = {
    getItems,
    findItems
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer)

