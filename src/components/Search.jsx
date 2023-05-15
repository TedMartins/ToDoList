const Search = ({ search, setSearch }) => {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="search">
      <h2>Pesquisar</h2>
      <input
        type="text"
        value={search}
        onChange={handleChange}
        placeholder="Digite para pesquisar..."
      />
    </div>
  );
};

export default Search;
