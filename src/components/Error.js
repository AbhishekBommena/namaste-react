import { useRouteError } from "react-router-dom";

const Error = () => {
    const {status,statusText} = useRouteError();
    return (
        <div>
            <h2>Error occured!</h2>
            <h3>{status+" "+statusText}</h3>
        </div>
    );
}
export default Error;