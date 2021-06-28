import React, { useRef } from 'react';
import styles from './search_header.module.css';

const SearchHeader = ({ onSearch }) => {

    const keywordRef = useRef();

    const handleSearch = () => {
        const keyword = keywordRef.current.value;
        onSearch(keyword);
    }

    const onClick = (e) => {
        handleSearch();

    }

    const onKeyPress = (e) => {
        if (e.key === 'Enter')
            handleSearch();

    }


    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img className={styles.img} src='images/logo.png' alt="logo" />
                <h1 className={styles.title} >Youtube</h1>
            </div>
            <input
                ref={keywordRef}
                className={styles.input}
                type="search" placeholder="Search.."
                onKeyPress={onKeyPress}
            />
            <button
                className={styles.button}
                type="submit"
                onClick={onClick}>
                <img className={styles.buttonImg} src="images/search.png" alt="search" />
            </button>
        </header>
    )
}

export default SearchHeader;