import React from 'react'
import PropTypes from 'prop-types'
import Category from 'components/Category/Category'

//не нужен, вместо него Config

const Categories = ({categories}) => (
    <div>
        {categories
            .sort((a,b)=>a.rating > b.rating)
            .map(category =>
                <Category
                    key={category.id}
                    category={category}
                />
            )}
    </div>
)

export default Categories

Categories.propTypes = {
    categories: PropTypes.array.isRequired,
}