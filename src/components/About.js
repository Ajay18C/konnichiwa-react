import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component{
    constructor(props){
        super(props);
        // console.log("Parent constructor");
    }

    render(){
        // console.log("Parent Render");
        return (
            <div>
                <h1>About</h1>
                <div>
                    LoggedIn User
                    <UserContext.Consumer>
                        {({loggedInUser}) => <h1>{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <h2>This is namaste react series</h2>
                <UserClass name="Ajay"/>
            </div>
        )
    }

    componentDidMount(){
        console.log("Parent Component Did Mount");
    }
}

// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is namaste react series</h2>
//             <UserClass name="Ajay"/>
//         </div>
//     )
// }

export default About;