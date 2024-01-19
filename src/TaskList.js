import HeaderMenu from "./HeaderMenu";

function TaskList(props) {
    console.log(props)
    return(
        <ul>
            <li>{props.siteName}</li>
            <li>{props.version}</li>
            <li>Task 3</li>

            <HeaderMenu version = {props.version}/>
        </ul>
    )
}

export default TaskList;