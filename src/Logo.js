function Logo(props) {

    console.log(props)
    const { siteName } = props;
    return (
        <div>
            { siteName }
        </div>
    )
}

export default Logo;