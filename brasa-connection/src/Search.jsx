import NavBar from "./NavBar";
function Search () {
  function checkEnterKey(event) {
    if (event.key === 'Enter') {
      window.location.href = window.location.href + "results"
    }
  }
    return (
    <body class="background-overlay">
       <NavBar></NavBar>
      <div id="search">
        <img src="images/logoPlusName.png" alt="Logo" id="main-logo"/>
        <br />
        <input id="search-bar" onKeyDown={checkEnterKey} placeholder="Search course or internship..." />
      </div>
      </body>
    );
}

export default Search;