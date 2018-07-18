import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Header from '../components/Header'
// import Search from '../components/Search'
import {
    // getItems,
    categoryUP,
    categoryDOWN,
    delCategory,
    addCategory,
    updateCategoryName,
    subCategoryUP,
    subCategoryDOWN
} from 'actions/actionCreator'
import Config from 'views/Config/Config'

class CategoriesContainer extends React.Component {

    // componentDidMount() {
    //     this.props.getItems()
    // }

    render() {
        return (
            <div>
                {/*<Header curItem={false}/>*/}
                <Config
                    categories={this.props.categories}
                    categoryUP={this.props.categoryUP}
                    categoryDOWN={this.props.categoryDOWN}
                    delCategory={this.props.delCategory}
                    addCategory={this.props.addCategory}
                    updateCategoryName={this.props.updateCategoryName}
                    subCategories={this.props.subCategories}
                    subCategoryUP={this.props.subCategoryUP}
                    subCategoryDOWN={this.props.subCategoryDOWN}
                />
            </div>)
    }
}

CategoriesContainer.propTypes = {
    categories: PropTypes.array.isRequired,
    subCategories: PropTypes.array.isRequired,
    // getItems: PropTypes.func.isRequired,
    categoryUP: PropTypes.func.isRequired,
    categoryDOWN: PropTypes.func.isRequired,
    delCategory: PropTypes.func.isRequired,
    addCategory: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    categories: state.mainReducer.categories,
    subCategories: state.mainReducer.subCategories
})

const mapDispatchToProps = {
    // getItems,
    categoryUP,
    categoryDOWN,
    delCategory,
    addCategory,
    updateCategoryName,
    subCategoryUP,
    subCategoryDOWN
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer)

