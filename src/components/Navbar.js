
const Navbar = () => {
    return (
        <nav style={style.navStyle}>
            <h1>Products App</h1>

            <ul>
                <li>Home</li>
                <li>Products</li>
            </ul>
        </nav>
    )
}

const style = {
    navStyle: {
        display: 'flex',
        justifyContent: 'space-around',
        border: 'solid red 2px'
    }
}

export default Navbar