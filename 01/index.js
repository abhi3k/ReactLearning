
// # ReactDOM.render(what, where)
// ReactDOM.render(<h1>Hello, EveryOne.!! in react render</h1>, document.getElementById('root'));
// ReactDOM.render(<h1>Or, we can do..</h1>, document.querySelector('#root'));
// ReactDOM.render(<ul>UL<li>one</li><li>two</li><li>three</li><li>four</li></ul>, document.getElementById('root'));

/*

function MyNav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-divider"></a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
};

function MainContent() {
    return (
        <h1>Main Component in Custom component</h1>
    )
};

ReactDOM.render(
    <div>
        <MyNav />
        <MainContent />
    </div>,
    document.getElementById('root')
);

*/

console.log('checking')


// ceating component and appending in some parent element
// const h = document.createElement('h1');
// h.textContent = 'learning program of React';
// document.getElementById('root').append(h);


//JSX - Java Script XML-(Executable Markup Language)
const navs = (
    <nav>
        <h1>Brand of the website</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact Us</li>
        </ul>
    </nav>
)

ReactDOM.render(navs, document.getElementById('root'));