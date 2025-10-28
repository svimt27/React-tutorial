import React, { useEffect, useRef, useState } from 'react'

const SearchBar = () => {
    const [search, setSearch] = useState('');
    const inputRef = useRef(null);
    // const debouncedSearch = useDebounce(search, 300);

    // useEffect(() => {
    //     onSearch(debouncedSearch);
    // }, [debouncedSearch, onSearch]);

    const handleClear = () => {
        setSearch('');
        inputRef.current.focus();
    };

    return (
        <div className="mb-6">
            <div className="relative">
                <input
                    ref={inputRef}
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search tasks..."
                    className="w-full p-3 pr-20 border rounded-lg"
                />
                {search && (
                    <button
                        onClick={handleClear}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                        Clear
                    </button>
                )}
            </div>
        </div>
    )
}

export default SearchBar