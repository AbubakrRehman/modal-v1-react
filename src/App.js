import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';

function App() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button className="btn" onClick={() => setShow(true)} type="button">Show Modal</button>
      <Modal
        show={show}
        title="Modal title"
        closeButtonText="Close"
        onClose={() => setShow(false)}
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat itaque quia accusantium fugit esse? Velit totam quam ab alias facilis dolorem quaerat molestias fugit. Minus mollitia eveniet ratione ad culpa!
    alias suscipit beatae odit dignissimos in?Deserunt, corporis, laborum numquam beatae libero inventore voluptate error dolor quibusdam similique aliquam ut ipsum magnam a voluptatibus hic esse nostrum, repellat magni recusandae itaque. Quia tempore voluptas temporibus cumque!"
      />
    </div>
  );
}

export default App;
