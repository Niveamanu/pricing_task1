import logo from './logo.svg';
import './App.css';
import Details from './Details';

function App() {
    const details = [{
            t1: 'Free',

            t3: '0',
            features: {
                active: [
                    "Single User",
                    "5GB Storage",
                    "Unlimited Public Projects",
                    "Community Access",
                ],
                inactive: [
                    "Unlimited Private Projects",
                    "Dedicated Phone Support",
                    "Free Subdomain",
                    "Monthly Status Reports",
                ]
            }
        },
        {
            t1: 'Plus',

            t3: '9',
            features: {
                active: [
                    "5 Users",
                    "50GB Storage",
                    "Unlimited Public Projects",
                    "Community Access",
                    "Unlimited Private Projects",
                    "Dedicated Phone Support",
                    "Free Subdomain",
                ],
                inactive: ["Monthly Status Reports"],
            },
        },

        {
            t1: 'Pro',
            t3: '49',
            features: {
                active: [
                    "Unlimited Users",
                    "150GB Storage",
                    "Unlimited Public Projects",
                    "Community Access",
                    "Unlimited Private Projects",
                    "Dedicated Phone Support",
                    "Unlimited Free Subdomains",
                    "Monthly Status Reports",
                ],
                inactive: [],
            },

        }
    ]

    return ( <
            div className = "App" >
            <
            div className = "home" >
            <
            div className = "cards" > {
                details.map((item) => < Details data = { item }
                    />)} <
                    /div> <
                    /div> <
                    /div>
                );
            }

            export default App;