import { onSaveItemEpic } from '../src/store/epics/appEpics'
import { testEpic } from './helpers'
import { saveItem, setEditableItem } from '../src/store/actions'
import { saveItemFixture } from './__fixtures__/app'

describe('epic tests', () => {
  test('Should be returned setEditableItem action', (done) => {
    testEpic(
      onSaveItemEpic,
      saveItem(saveItemFixture),
      () => {
        expect(setEditableItem).toBe(setEditableItem)
        done()
      },
      {},
    )
  })
})
