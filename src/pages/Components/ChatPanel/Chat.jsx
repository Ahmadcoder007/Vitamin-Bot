import { useState } from "react";
import images from "../../../constants/images"

const Chat = () => {
    
    const [show, setShow] = useState(false)
    return (
      <>
        <div className="chat_wrapper">
            <div className="chat-toggle" onClick={() => setShow(!show)}>
            <img src={images.chat.default} />
            </div>

            <div className={`chat_panel ${show ? 'show' : ''}`}>
                <div className="chat_panel_window">
                    <div className="chat_window card">
                    <div className="card-header">
                        <span>Now chatting</span>
                        <i className="arrow"></i>
                    </div>
                    <div className="card-body">
                        <div className="single_message">
                            <span>Hi</span>
                        </div>
                        <div className="single_message author">
                            <span>Hi, how are you</span>
                        </div>
                        <div className="single_message">
                            <span>I am good</span>
                        </div>
                        <div className="single_message author">
                            <span>What's going on</span>
                        </div>
                        <div className="single_message">
                            <span>Nothing Special</span>
                        </div>
                    </div>
                    <div className="card-footer">
                        <input type="text" className="form-control" placeholder="Type here and hit enter to chat"/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
  };
export default Chat