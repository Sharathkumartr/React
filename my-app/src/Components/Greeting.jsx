import Home from "./Home";
export default function Greeting(props){
    let greet = "Good Morning";
    return(
        <>
        <h1> Hello World! {props.name}</h1>
        <Home greet={greet}/>
        </>
    )
}