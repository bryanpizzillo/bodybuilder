import nestedQuery from '../../src/queries/nested-query'
import {expect} from 'chai'

describe('nestedQuery', () => {

  it('should create a nested query', () => {    
    let query = {
      query: { 
        bool: {
          must: [
            {
              match: {
                "obj1.name": 'john'
              }
            },
            {
              match: {
                "obj1.age": 28
              }
            }
          ]
        }
      }
    };

    let result = nestedQuery('obj1', 'avg',  query)
    expect(result).to.eql({
      nested: {
        path : 'obj1',
        score_mode: 'avg',
        query: {
          bool: {
            must: [
              {
                match: {
                  "obj1.name": 'john'
                }
              },
              {
                match: {
                  "obj1.age": 28
                }
              }
            ]
          }
        }
      }
    })
  })

})
