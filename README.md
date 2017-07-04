# ProWritingAid.API

Official javascript [prowritingaid.com](https://prowritingaid.com) API. 

- API version: v1
- Package version: v1

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

Install package using command:

```shell
npm install pro_writing_aid_api --save
```

#### git
#
Or install package from the git repo:

```shell
    npm install prowriting/prowritingaid.javascript --save
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var ProWritingAidApi = require('pro_writing_aid_api');

var api = new ProWritingAidApi.TextApi();
var request = new ProWritingAidApi.TextAnalysisRequest(
  "I'd like to by that toy. wood you help me? I have twp more brothers.",
  ['grammar'],
  "General",
  "En"
);
api.textPost(request, "$your API key here$")
  .then(function(data) {
    console.log('API called successfully. Returned data: ');
    console.log(data);
  }, function(error) {
    console.error(error);
  });

```

## Documentation for API Endpoints

All URIs are relative to *https://api.prowritingaid.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ProWritingAidApi.AsyncContextualThesaurusApi* | [**asyncContextualThesaurusPost**](docs/AsyncContextualThesaurusApi.md#asyncContextualThesaurusPost) | **POST** /api/async/contextualthesaurus | 
*ProWritingAidApi.AsyncContextualThesaurusResultApi* | [**asyncContextualThesaurusResultGetResult**](docs/AsyncContextualThesaurusResultApi.md#asyncContextualThesaurusResultGetResult) | **GET** /api/async/result/contextualthesaurus/{taskId} | 
*ProWritingAidApi.AsyncHtmlApi* | [**asyncHtmlPost**](docs/AsyncHtmlApi.md#asyncHtmlPost) | **POST** /api/async/html | 
*ProWritingAidApi.AsyncHtmlResultApi* | [**asyncHtmlResultGetResult**](docs/AsyncHtmlResultApi.md#asyncHtmlResultGetResult) | **GET** /api/async/result/html/{taskId} | 
*ProWritingAidApi.AsyncSummaryApi* | [**asyncSummaryPost**](docs/AsyncSummaryApi.md#asyncSummaryPost) | **POST** /api/async/summary | 
*ProWritingAidApi.AsyncSummaryResultApi* | [**asyncSummaryResultGetResult**](docs/AsyncSummaryResultApi.md#asyncSummaryResultGetResult) | **GET** /api/async/result/summary/{taskId} | 
*ProWritingAidApi.AsyncTextApi* | [**asyncTextPost**](docs/AsyncTextApi.md#asyncTextPost) | **POST** /api/async/text | 
*ProWritingAidApi.AsyncTextResultApi* | [**asyncTextResultGetResult**](docs/AsyncTextResultApi.md#asyncTextResultGetResult) | **GET** /api/async/result/text/{taskId} | 
*ProWritingAidApi.AsyncWordCloudApi* | [**asyncWordCloudPost**](docs/AsyncWordCloudApi.md#asyncWordCloudPost) | **POST** /api/async/wordcloud | 
*ProWritingAidApi.AsyncWordCloudResultApi* | [**asyncWordCloudResultGetResult**](docs/AsyncWordCloudResultApi.md#asyncWordCloudResultGetResult) | **GET** /api/async/result/wordcloud/{taskId} | 
*ProWritingAidApi.ContextualThesaurusApi* | [**contextualThesaurusPost**](docs/ContextualThesaurusApi.md#contextualThesaurusPost) | **POST** /api/contextualthesaurus | 
*ProWritingAidApi.HtmlApi* | [**htmlPost**](docs/HtmlApi.md#htmlPost) | **POST** /api/html | 
*ProWritingAidApi.SummaryApi* | [**summaryPost**](docs/SummaryApi.md#summaryPost) | **POST** /api/summary | 
*ProWritingAidApi.TextApi* | [**textPost**](docs/TextApi.md#textPost) | **POST** /api/text | 
*ProWritingAidApi.WordCloudApi* | [**wordCloudPost**](docs/WordCloudApi.md#wordCloudPost) | **POST** /api/wordcloud | 


## Documentation for Models

 - [ProWritingAidApi.AnalysisSettings](docs/AnalysisSettings.md)
 - [ProWritingAidApi.AnalysisSummary](docs/AnalysisSummary.md)
 - [ProWritingAidApi.AnalysisSummaryGraph](docs/AnalysisSummaryGraph.md)
 - [ProWritingAidApi.AnalysisSummaryGraphItem](docs/AnalysisSummaryGraphItem.md)
 - [ProWritingAidApi.AnalysisSummaryItem](docs/AnalysisSummaryItem.md)
 - [ProWritingAidApi.AnalysisSummarySubItem](docs/AnalysisSummarySubItem.md)
 - [ProWritingAidApi.AsyncResponseContextualThesaurusResponse](docs/AsyncResponseContextualThesaurusResponse.md)
 - [ProWritingAidApi.AsyncResponseHtmlAnalysisResponse](docs/AsyncResponseHtmlAnalysisResponse.md)
 - [ProWritingAidApi.AsyncResponseSummaryAnalysisResponse](docs/AsyncResponseSummaryAnalysisResponse.md)
 - [ProWritingAidApi.AsyncResponseTextAnalysisResponse](docs/AsyncResponseTextAnalysisResponse.md)
 - [ProWritingAidApi.AsyncResponseWordCloudResponse](docs/AsyncResponseWordCloudResponse.md)
 - [ProWritingAidApi.ContextualThesaurusRequest](docs/ContextualThesaurusRequest.md)
 - [ProWritingAidApi.ContextualThesaurusResponse](docs/ContextualThesaurusResponse.md)
 - [ProWritingAidApi.DocTag](docs/DocTag.md)
 - [ProWritingAidApi.HtmlAnalysisRequest](docs/HtmlAnalysisRequest.md)
 - [ProWritingAidApi.HtmlAnalysisResponse](docs/HtmlAnalysisResponse.md)
 - [ProWritingAidApi.SuggestionCategory](docs/SuggestionCategory.md)
 - [ProWritingAidApi.SummaryAnalysisRequest](docs/SummaryAnalysisRequest.md)
 - [ProWritingAidApi.SummaryAnalysisResponse](docs/SummaryAnalysisResponse.md)
 - [ProWritingAidApi.TextAnalysisRequest](docs/TextAnalysisRequest.md)
 - [ProWritingAidApi.TextAnalysisResponse](docs/TextAnalysisResponse.md)
 - [ProWritingAidApi.WordCloudRequest](docs/WordCloudRequest.md)
 - [ProWritingAidApi.WordCloudResponse](docs/WordCloudResponse.md)


## Documentation for Authorization


### licenseCode

- **Type**: API key
- **API key parameter name**: licenseCode
- **Location**: HTTP header
