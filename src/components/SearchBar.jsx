
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import s from '../Style.module.css';

const SearchBar = ({ onSubmit }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (query.trim() === '') {
            toast.error('Please enter a search query');
            return;
        }
        onSubmit(query);
        setQuery('');
    };

    return (
        <header className={s.header}>
            <form onSubmit={handleSubmit} className={s.searchForm}>
                <input
                    type="text"
                    value={query} 
                    onChange={(e) => setQuery(e.target.value)}
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    className={s.input}
                />
                <button type="submit" className={s.buttonForm}>Search</button>
            </form>
        </header>
    );
};

export default SearchBar;


