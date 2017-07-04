/**
 * ProWritingAid API
 * No descripton provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AnalysisSummaryGraphItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AnalysisSummaryGraphItem'));
  } else {
    // Browser globals (root is window)
    if (!root.ProWritingAidApi) {
      root.ProWritingAidApi = {};
    }
    root.ProWritingAidApi.AnalysisSummaryGraph = factory(root.ProWritingAidApi.ApiClient, root.ProWritingAidApi.AnalysisSummaryGraphItem);
  }
}(this, function(ApiClient, AnalysisSummaryGraphItem) {
  'use strict';




  /**
   * The AnalysisSummaryGraph model module.
   * @module model/AnalysisSummaryGraph
   * @version v1
   */

  /**
   * Constructs a new <code>AnalysisSummaryGraph</code>.
   * @alias module:model/AnalysisSummaryGraph
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>AnalysisSummaryGraph</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AnalysisSummaryGraph} obj Optional instance to populate.
   * @return {module:model/AnalysisSummaryGraph} The populated <code>AnalysisSummaryGraph</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('Items')) {
        obj['Items'] = ApiClient.convertToType(data['Items'], [AnalysisSummaryGraphItem]);
      }
    }
    return obj;
  }

  /**
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * @member {Array.<module:model/AnalysisSummaryGraphItem>} Items
   */
  exports.prototype['Items'] = undefined;



  return exports;
}));

