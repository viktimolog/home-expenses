import React from 'react'
import { shallow, mount } from 'enzyme'
import renderer from 'react-test-renderer'
import ItemsContainer from '../src/containers/ItemsContainer'
import Item from '../src/components/Item'
import Search from '../src/components/Search'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// Snapshot for Item React Component
describe('>>>Item --- Snapshot', () => {
  it('+++capturing Snapshot of Home', () => {
    const renderedValue = renderer.create(<Item item={
      {
        'id': '0',
        'general': {
          'firstName': 'Liana',
          'lastName': 'Crooks',
          'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/kevinoh/128.jpg'
        },
        'job': {
          'company': 'Ledner, Johnson and Predovic',
          'title': 'Investor Functionality Coordinator'
        },
        'contact': {
          'email': 'Gerry_Hackett77@gmail.com',
          'phone': '(895) 984-0132'
        },
        'address': {
          'street': '1520 Zemlak Cove',
          'city': 'New Devon',
          'zipCode': '42586-7898',
          'country': 'Guinea-Bissau'
        }
      }
    }

    />).toJSON()
    expect(renderedValue).toMatchSnapshot()
  })
})

describe('>>>ItemsContainer --- REACT-REDUX (Shallow + passing the {store} directly)', () => {
  const mockStore = configureStore();
  let store, container;

  const initialState = {
    items: [
      {
        "id": "0",
        "general": {
          "firstName": "Liana",
          "lastName": "Crooks",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/kevinoh/128.jpg"
        },
        "job": {
          "company": "Ledner, Johnson and Predovic",
          "title": "Investor Functionality Coordinator"
        },
        "contact": {
          "email": "Gerry_Hackett77@gmail.com",
          "phone": "(895) 984-0132"
        },
        "address": {
          "street": "1520 Zemlak Cove",
          "city": "New Devon",
          "zipCode": "42586-7898",
          "country": "Guinea-Bissau"
        }
      }
      ]
  };


  beforeEach(() => {
    store = mockStore(initialState);
    container =
      shallow(<ItemsContainer store={store} />);
  });

  it('+++ render the connected(SMART) component', () => {
    expect(container.length).toEqual(1);
  });

  it('+++ check Prop matches with initialState', () => {
    expect(container.prop('items')).toEqual(initialState.items);
  });
});

