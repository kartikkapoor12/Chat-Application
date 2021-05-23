import {ChatEngine} from 'react-chat-engine'
import './app.css' 
import ChatFeed from './components/ChatFeed'
import LoginForm from "../src/components/LoginForm"
const projectID ='a95e309b-47e6-453a-9772-46e3671e09fc';
const App=()=>{

    if(!localStorage.getItem('username'))return <LoginForm/>
    return(

        <ChatEngine
        height="100vh"
        projectID={projectID}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
    );
  };
export default App;