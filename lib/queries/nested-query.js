'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = nestedQuery;

var SCORE_MODE_MAP = {
  avg: 'avg',
  sum: 'sum',
  min: 'min',
  max: 'max',
  none: 'none'
};

/**
 * Construct a Nested query.
 *
 * elastic.co/guide/en/elasticsearch/reference/current/query-dsl-nested-query.html
 * 
 * @param  {String} path  Name of the field containing the nested fields.
 * @param  {String} score_mode  Determines how inner child matching affects scoring of parent.
 * @param  {Object} query     Fully-formed query.
 * @return {Object}           Nested query.
 */
function nestedQuery(path, score_mode, query) {
  score_mode = SCORE_MODE_MAP[score_mode];
  return {
    nested: {
      path: path,
      score_mode: score_mode,
      query: query["query"]
    }
  };
}