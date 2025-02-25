import { useSearchParams } from 'next/navigation';
import SearchResultsWidget from './SearchResultsWidget';
import { isSearchSDKEnabled } from 'src/services/SearchSDKService';

export const Default = (): JSX.Element => {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  return isSearchSDKEnabled ? (
    <SearchResultsWidget key={`${query}-search`} rfkId="rfkid_7" defaultKeyphrase={query} />
  ) : (
    <h3>Search has not been enabled</h3>
  );
};
