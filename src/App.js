import './App.css';
import Header from "./components/header/header";
import {themeOptions} from "./index";
import Footer from "./components/footer/footer";
import Body from "./components/body/body";

function App() {
    // const [, setClientStomp] = useState(null)
    // const [, setNotificacao] = useState(null)

    // useEffect(() => {
    //     const socket = new SockJS("http://localhost:8080/ws")
    //     const stomp = Stomp.over(socket)
    //     stomp.connect({}, () => {
    //         setClientStomp(stomp)
    //         stomp.subscribe("/produto/novo-produto", message => {
    //             setNotificacao(message.body)
    //         })
    //     })
    // }, []);

    return (
        <>
            <Header></Header>
            <Body></Body>
            <Footer></Footer>
        </>
    );
}

export default App;
