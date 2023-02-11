import HeaderStyles from "../styles/HeaderStyles"

function Header (props) {
    return (
        <header style={HeaderStyles.main}>
            <h1>
                {props.title}
            </h1>
            <div style={HeaderStyles.Header_div}>
                {props.children}
            </div>
        </header>
    );
}

export default Header;
