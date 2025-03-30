// components/SearchInput.tsx
import React, { useState } from 'react';
import styles from './SearchInput.module.scss';

interface SearchInputProps {
    placeholder?: string;
    onSearch: (value: string) => void;
    icon?: React.ReactNode;
    iconPosition?: 'start' | 'end';
}

export const SearchInput: React.FC<SearchInputProps> = ({
                                                            placeholder = 'Search...',
                                                            onSearch,
                                                            icon,
                                                            iconPosition = 'start',
                                                        }) => {
    const [value, setValue] = useState('');
    const [suggestions, setSuggestions] = useState<string[]>([]);

    const sampleSuggestions = [
        'nature', 'city', 'people', 'abstract', 'technology',
        'animals', 'food', 'travel', 'art', 'music'
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setValue(inputValue);

        if (inputValue.length > 0) {
            const filteredSuggestions = sampleSuggestions.filter(suggestion =>
                suggestion.toLowerCase().includes(inputValue.toLowerCase())
            );
            setSuggestions(filteredSuggestions.slice(0, 5));
        } else {
            setSuggestions([]);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && value) {
            onSearch(value);
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (suggestion: string) => {
        setValue(suggestion);
        onSearch(suggestion);
        setSuggestions([]);
    };

    return (
        <div className={styles.searchContainer}>
            <div className={`${styles.inputWrapper} ${icon ? styles[iconPosition] : ''}`}>
                {icon && iconPosition === 'start' && <span className={styles.iconStart}>{icon}</span>}
                <input
                    type="text"
                    value={value}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    placeholder={placeholder}
                    className={styles.searchInput}
                />
                {icon && iconPosition === 'end' && <span className={styles.iconEnd}>{icon}</span>}
            </div>
            {suggestions.length > 0 && (
                <ul className={styles.suggestions}>
                    {suggestions.map((suggestion, index) => (
                        <li
                            key={index}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className={styles.suggestionItem}
                        >
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};