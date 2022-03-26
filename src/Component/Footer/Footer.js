import React from 'react';
import "./Footer.css"
const Footer = () => {
    return (
        <div>
            <div className="QnA-container">
                <h1 className="faqs">Frequently Asked Questions</h1>

                <div className="QnA">
                    <h3>How React Works?</h3>
                    <p>React is a javascript library, is used to create user interfaces. React is declarative and component based. We make components through JSX. JSX allows us to write HTML elements in JavaScript and place them in the DOM .It creates two dom, One is Virutal dom and another is browser dom.Both dom are completely similar.As reacts created the virtual dom its going render the same as it is into the browser as a real dom and the browser will display the output. When we make any changes in our data or component, it makes a new virtual dom and compares it with old virtual dom to find the changes. After comparing it only re renders the changed data instead of reloading the whole page.For this process the perfomance of our web page become more faster, easy to load and a good user interface. </p>

                    <h3>Difference Between Props and State?</h3>
                    <p>Props is the short form of properties.Props are used to pass data to child components from parent components.The data of props is Read Only. Whereas the states are used to manage the internal environment of a component means the data changes inside the component.State is changable in the component.It is used to update the value in the component</p>
                </div>

                <footer>
                    <p className="creator">© Made By Mohammad Jahid</p>
                </footer>
            </div>
        </div>
    );
};

export default Footer;