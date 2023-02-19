import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import Image from 'next/image'
const SearchBar = () => {
  return (
    <div
    data-cy="search-input"
    className="w-full max-w-[410px] w-full grow rounded text-gray-primary search relative mb-[40px] "
  >
    <ReactSearchAutocomplete
      styling={{ zIndex: 4, backgroundColor:'#785C9436',color:'#595959'}} // To display it on top of the search box below
      autoFocus
      placeholder="Search"
    />
    <Image
      src="/icons/search.svg"
      alt="search"
      className="searchIcon z-10 absolute"
      width={20}
      height={20}
    />
  </div>
  )
}
export default SearchBar
