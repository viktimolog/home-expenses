import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {createSelector} from 'reselect'
import {
    // getItems,
    categoryUP,
    categoryDOWN,
    // updateCategoryName,
    subCategoryUP,
    subCategoryDOWN,
    delSubCategory,
    addSubCategory,
    getCategories,
    addCategory,
    delCategory,
    updateCategory,
    getSubCategories,
    getExpenses
} from 'actions/actionCreator'
import Config from 'views/Config/Config'
import axios from 'axios'
import Urls from 'constants/Urls'

class CategoriesContainer extends React.Component {

    // async getData(url) {
    //     try {
    //         const response = await axios
    //             .get(url)
    //             .then(res => res.data)
    //         this.props.getCategories(response)
    //     } catch (error) {
    //         alert('error = ' + error)
    //     }
    // }
    //
    // async getSubCat(url){
    //     try {
    //         const response = await axios
    //             .get(url)
    //             .then(res => res.data)
    //         this.props.getSubCategories(response)
    //     } catch (error) {
    //         alert('error = ' + error)
    //     }
    // }

    async getInitialState(url, func){
        try {
            const response = await axios
                .get(url)
                .then(res => res.data)
            func(response)
        } catch (error) {
            alert('error = ' + error)
        }
    }

    componentDidMount() {
        // this.getData(Urls.getCategories)
        // this.getSubCat(Urls.getSubCategories)

        this.getInitialState(Urls.getCategories, this.props.getCategories)
        this.getInitialState(Urls.getSubCategories, this.props.getSubCategories)
        this.getInitialState(Urls.getExpenses, this.props.getExpenses)
    }

    render() {
        return (
            <div>
                <Config
                    delCategory={this.props.delCategory}
                    addCategory={this.props.addCategory}
                    categories={this.props.categories}
                    categoryUP={this.props.categoryUP}
                    categoryDOWN={this.props.categoryDOWN}
                    updateCategory={this.props.updateCategory}
                    subCategories={this.props.subCategories}
                    subCategoryUP={this.props.subCategoryUP}
                    subCategoryDOWN={this.props.subCategoryDOWN}
                    delSubCategory={this.props.delSubCategory}
                    addSubCategory={this.props.addSubCategory}
                    clearCategories={this.props.clearCategories}
                />
            </div>)
    }
}

const getCategoriesFromState = state => state.mainReducer.categories

const getClearCategories = createSelector(
    getCategoriesFromState,
    (categories) => {

        return categories
            .filter(category => category.parent === false)
            .filter(category => category.child === false)

    }
)

const mapStateToProps = state => ({
    categories: state.mainReducer.categories,
    subCategories: state.mainReducer.subCategories,
    clearCategories: getClearCategories(state)
})

CategoriesContainer.propTypes = {
    categories: PropTypes.array.isRequired,
    subCategories: PropTypes.array.isRequired,
    categoryUP: PropTypes.func.isRequired,
    categoryDOWN: PropTypes.func.isRequired,
    delCategory: PropTypes.func.isRequired,
    addCategory: PropTypes.func.isRequired,
    delSubCategory: PropTypes.func.isRequired,
    addSubCategory: PropTypes.func.isRequired,
    getCategories: PropTypes.func.isRequired,
    getSubCategories: PropTypes.func.isRequired,
    updateCategory: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
    // getItems,
    categoryUP,
    categoryDOWN,
    delCategory,
    addCategory,
    updateCategory,
    subCategoryUP,
    subCategoryDOWN,
    delSubCategory,
    addSubCategory,
    getCategories,
    getSubCategories,
    getExpenses
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer)

