function Menu(props) {

    const buyCourse = (id) => {
        console.log(id)
    }

    return (
        <>
            {props.siteName}

            <ul>
                {props.courses.map(el => (
                    <li key={el.id}>
                    <strong>{el.title}</strong>, Price: ${el.price}
                    <button onClick={() => buyCourse(el.id)}>Buy</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Menu;