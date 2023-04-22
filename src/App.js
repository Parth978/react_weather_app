import Search from "./components/search";

function App() {

  const handleSearchChange = (searchData) => {
    console.log(searchData);
  }
  return (
    <div className="App">
      <Search onSearchChange={handleSearchChange}/>
    </div>
  );
}

export default App;
