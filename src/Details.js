import { unstable_renderSubtreeIntoContainer } from "react-dom";

function Details(props) {
    return (

        <
        div className = "card" >
        <
        div className = "pricing py-5" >
        <
        p className = "cardTitle text-center" > { props.data.t1 } < /p> <
        p class = "text-center" >
        <
        span className = "cardPrice " > $ { props.data.t3 } < /span> <
        span className = "spanPrice" > /month</span >
        <
        /p> <
        hr / >
        <
        div className = "feat" > {
            props.data.features["active"].map((feat) => {
                return ( <
                    div className = "activeFeat " >
                    <
                    li class = "fa li fa fa-check" / > { feat } <
                    /div>
                );
            })
        } {
            props.data.features["inactive"].map((feat) => {
                return ( <
                    div className = "inactiveFeat" >

                    <
                    li class = "fa li fa fa-times" / > { feat } <
                    /div>
                );
            })
        } <
        /div> <
        div class = "d-grid" >
        <
        div className = "btn btn btn-primary text-uppercase text-center" > Button < /div></div > < /div> <
        /div>



    )
}
export default Details;