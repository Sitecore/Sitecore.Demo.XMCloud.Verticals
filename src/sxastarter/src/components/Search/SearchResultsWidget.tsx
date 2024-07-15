import {
  FilterAnd,
  FilterEqual,
  SearchResultsInitialState,
  SearchResultsStoreState,
  SearchResultsWidgetQuery,
  useSearchResults,
  widget,
  WidgetDataType,
} from '@sitecore-search/react';
import Link from 'next/link';

type ArticleModel = {
  id: string;
  type?: string;
  title?: string;
  name?: string;
  url?: string;
  description?: string;
  longdescription?: string;
  source_id?: string;
};

type ArticleSearchResultsProps = {
  defaultSortType?: SearchResultsStoreState['sortType'];
  defaultPage?: SearchResultsStoreState['page'];
  defaultItemsPerPage?: SearchResultsStoreState['itemsPerPage'];
  keyphrase: SearchResultsStoreState['keyphrase'];
  emptyMessage: string;
};

type InitialState = SearchResultsInitialState<'itemsPerPage' | 'keyphrase' | 'page' | 'sortType'>;
const sources = process.env.NEXT_PUBLIC_SEARCH_SOURCES;

export const SearchResultsWidget = (props: ArticleSearchResultsProps): JSX.Element => {
  const {
    widgetRef,
    queryResult: { isLoading, data: { content: articles = [] } = {} },
  } = useSearchResults<ArticleModel, InitialState>({
    query: (query: SearchResultsWidgetQuery) => {
      query
        .getRequest()
        .setSearchFilter(new FilterAnd([new FilterEqual('rfk_source.source_id', sources)]));
    },
    state: {
      sortType: 'featured_asc',
      page: 1,
      itemsPerPage: 10,
      keyphrase: props.keyphrase,
    },
  });

  // const totalPages = Math.ceil(totalItems / itemsPerPage);
  // const selectedSortIndex = sortChoices.findIndex((s: any) => s.name === sortType);
  // const selectedFacetsFromApi = useSearchResultsSelectedFacets();
  if (isLoading) {
    return <div> Loading ... </div>;
  }

  function handleResultClick(result: ArticleModel): void {
    if (result.url) window.location.href = result.url;
  }

  if (!articles?.length)
    return (
      <div ref={widgetRef} className="search-results-container">
        <h1>Searching for {props.keyphrase}</h1>
        <div className="no-results">{props.emptyMessage}</div>
      </div>
    );

  return (
    <div ref={widgetRef} className="search-results-container">
      <h1>Search Results for {props.keyphrase}</h1>
      {articles.map((result, index) => (
        <div key={index} className="result-item" onClick={() => handleResultClick(result)}>
          <h2> {result.name}</h2>
          <p>{result.description}</p>
          <Link href={result.url ?? ''}>Details</Link>
        </div>
      ))}
    </div>
  );
};
const SearchResultsStyledWidget = widget(
  SearchResultsWidget,
  WidgetDataType.SEARCH_RESULTS,
  'content'
);
export default SearchResultsStyledWidget;
