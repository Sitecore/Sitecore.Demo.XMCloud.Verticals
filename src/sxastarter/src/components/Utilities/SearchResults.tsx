import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { WidgetsProvider } from '@sitecore-search/react';
import SearchResultsStyledWidget from 'components/Search/SearchResultsWidget';
import { useSearchParams } from 'next/navigation';

interface Fields {
  EmptyResultsMessage: Field<string>;
}
interface Props {
  fields: Fields;
  params: { [key: string]: string };
}
const SearchBox = (props: Props) => {
  const searchParams = useSearchParams();
  const customerKey = process.env.NEXT_PUBLIC_SEARCH_CUSTOMER_KEY;
  const apiKey = process.env.NEXT_PUBLIC_SEARCH_API_KEY;
  return (
    <WidgetsProvider env="prod" apiKey={apiKey} customerKey={customerKey} publicSuffix={true}>
      <SearchResultsStyledWidget
        rfkId="rfkid_7"
        emptyMessage={props.fields.EmptyResultsMessage.value} //read from the field
        keyphrase={searchParams.get('q') ?? ''}
      />
    </WidgetsProvider>
  );
};

export default SearchBox;
