import styles from "../assets/styles/search.module.css";
function Search({ search, setSearch }) {
  return (
    <input
      className={styles.search}
      type="text"
      placeholder="Type to search.."
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
        console.log(e.target.value);
      }}
    />
  );
}
export default Search;
