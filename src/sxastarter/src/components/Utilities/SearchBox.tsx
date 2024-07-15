import { WidgetsProvider } from '@sitecore-search/react';
import PreviewSearchWidget from 'components/Search/PreviewSearch';

const SearchBox = () => {
  const customerKey = process.env.NEXT_PUBLIC_SEARCH_CUSTOMER_KEY;
  const apiKey = process.env.NEXT_PUBLIC_SEARCH_API_KEY;
  return (
    <WidgetsProvider env="prod" apiKey={apiKey} customerKey={customerKey} publicSuffix={true}>
      <PreviewSearchWidget defaultItemsPerPage={6} rfkId="rfkid_6" />
    </WidgetsProvider>
  );
};

export default SearchBox;
