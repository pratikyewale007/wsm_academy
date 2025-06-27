import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About_Us from "../pages/About_Us";
import Contact_us from "../pages/Contact_us";
import Programs from "../pages/Programs";
import Basic_market from "../pages/Programs/Basic_market";
import Intraday_trading from "../pages/Programs/Intraday_trading";
import Option_trading from "../pages/Programs/Option_trading";
import Telegram_mentorship from "../pages/Programs/Telegram_mentorship";
import Oneto1_mentorship from "../pages/Programs/Oneto1_mentorship";
import Forex_trading from "../pages/Programs/Forex_trading";
import Testimonials from "../pages/Testimonials";


const Routing = createBrowserRouter([
    { path: "", element: <Home /> },
    { path: "aboutus", element: <About_Us /> },
    { path: "contactus", element: <Contact_us /> },
    { path: "testimonials", element: <Testimonials /> },
    {
        path: "", elememt: <Programs />, children: [
            { path: "basics_of_stock_market", element: <Basic_market /> },
            { path: "intraday_trading_masterclass", element: <Intraday_trading /> },
            { path: "option_trading_masterclass", element: <Option_trading /> },
            { path: "forex_masterclass", element: <Forex_trading /> },
            { path: "telegram_mentorship", element: <Telegram_mentorship /> },
            { path: "one-1_mentorship", element: <Oneto1_mentorship /> }
        ]
    }
])

export default Routing;
