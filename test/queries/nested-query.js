import nestedQuery from '../../src/queries/nested-query'
import {expect} from 'chai'

describe('nestedQuery', () => {

  it('should create a nested query', () => {
    let query = {match: {"obj1.name": 'this is a test'}}
    let result = nestedQuery('obj1', 'avg',  query)
    expect(result).to.eql({
      nested: {
        path : 'obj1',
        score_mode: 'avg',
        query:
          {
            match: {
              "obj1.name": 'this is a test'
            }
          }        
      }
    })
  })

})
