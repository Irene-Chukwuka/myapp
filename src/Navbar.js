const Navbar = () => {
    return ( 
        <nav>
            <h2> My React Lessons </h2>
            <div className="links">
                <a href="/" style={{fontsize: 23, backgroundColor: 'brown', color: "whitesmoke", textDecoration: 'none', margin: '5px', padding: '3px', borderRadius: '7px'}}> Home </a>
                <a href="create" style={{fontsize: 23, backgroundColor: 'brown', color: "whitesmoke", textDecoration: 'none', margin: '5px', padding: '3px', borderRadius: '7px'}}> Create Blog </a> 

            </div>
        </nav>
     );
}
 
export default Navbar;