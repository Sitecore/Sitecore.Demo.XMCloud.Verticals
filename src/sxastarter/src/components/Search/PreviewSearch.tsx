/* eslint-disable @typescript-eslint/no-unused-vars */
import type { PreviewSearchInitialState, PreviewSearchWidgetQuery } from '@sitecore-search/react';

import {
  FilterAnd,
  FilterEqual,
  PageController,
  WidgetDataType,
  usePreviewSearch,
  widget,
} from '@sitecore-search/react';
import { ChangeEvent, FormEvent, useState } from 'react';

type ArticleModel = {
  id: string;
  name: string;
  url: string;
  source_id?: string;
};

articles: Array<ArticleModel>;

type InitialState = PreviewSearchInitialState<'itemsPerPage' | 'suggestionsList'>;

interface Props {
  defaultItemsPerPage: number;
}

export const PreviewSearch = ({ defaultItemsPerPage }: Props) => {
  const [search, setSearch] = useState<string>('');
  const [isSearching, setIsSearching] = useState<boolean>();
  const sources = process.env.NEXT_PUBLIC_SEARCH_SOURCES;

  PageController.getContext().setLocale({ country: 'au', language: 'en' });

  const {
    actions: { onKeyphraseChange },
    queryResult: { data: { content: previewArticles = [] } = {} } = {},
  } = usePreviewSearch<ArticleModel, InitialState>({
    query: (query: PreviewSearchWidgetQuery) => {
      query
        .getRequest()
        .setSearchFilter(new FilterAnd([new FilterEqual('rfk_source.source_id', sources)]));
    },
    state: {
      suggestionsList: [],
      itemsPerPage: defaultItemsPerPage,
    },
  });

  function keypharaseChangeHandler(e: ChangeEvent<HTMLInputElement>): void {
    const keyphrase = e.target.value;
    setIsSearching(true);
    if (keyphrase.length === 0) setIsSearching(false);
    setSearch(keyphrase);
    onKeyphraseChange({ keyphrase: keyphrase });
  }

  const handleBlur = () => {
    setTimeout(() => {
      setIsSearching(false);
    }, 110);
  };

  const inputFocus = () => {
    if (search.length >= 1) {
      setIsSearching(true);
    }
  };

  function handleSearchFormSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    window.location.href = `/en/search?q=${search}`;
    //router.push(`/en/search?q=${search}`);
  }

  function handleRedirect(article: ArticleModel): void {
    window.location.href = article.url;
  }

  return (
    <>
      <form
        className="search-container"
        onSubmit={handleSearchFormSubmit}
        onBlur={handleBlur}
        onFocus={inputFocus}
      >
        <input
          value={search}
          onChange={keypharaseChangeHandler}
          className="input-field"
          placeholder="search here..."
        />

        {isSearching && previewArticles && previewArticles?.length >= 1 && (
          <ul className="results-list">
            {previewArticles.map(
              (article, index) =>
                article.name && (
                  <li key={index} onClick={() => handleRedirect(article)}>
                    {article.name}
                  </li>
                )
            )}
          </ul>
        )}
      </form>
    </>
  );
};
const PreviewSearchWidget = widget(PreviewSearch, WidgetDataType.PREVIEW_SEARCH, 'content');
export default PreviewSearchWidget;
