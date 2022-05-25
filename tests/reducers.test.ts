import { appReducer } from '../src/store/reducers/appReducer'
import { addItem, saveItem } from '../src/store/actions'
import * as Fixture from './__fixtures__/app'

describe('app Reducer', () => {
  test('Should be return the addItem state', () => {
    expect(appReducer(Fixture.defaultStateFixture, addItem(Fixture.addItemFixture))).toMatchSnapshot()
  })
  test('Should be return the saveItem state', () => {
    expect(appReducer(Fixture.defaultStateFixture, saveItem(Fixture.saveItemFixture))).toMatchSnapshot()
  })
})
