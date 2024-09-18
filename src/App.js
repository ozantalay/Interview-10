import React, { useState } from "react";

const ONE =
  "https://images.pexels.com/photos/2249528/pexels-photo-2249528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
const TWO =
  "https://images.pexels.com/photos/1061141/pexels-photo-1061141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const THREE =
  "https://images.pexels.com/photos/2249530/pexels-photo-2249530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const FOUR =
  "https://images.pexels.com/photos/1061139/pexels-photo-1061139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const FIVE =
  "https://images.pexels.com/photos/1010973/pexels-photo-1010973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const SIX =
  "https://images.pexels.com/photos/4772874/pexels-photo-4772874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

function App() {
  return <Captcha />;
}

const Captcha = () => {
  // KODUNUZ BURAYA GELECEK
  const [showModal,setShowModal]=useState(false)
  const[targetNumber,setTargetNumber]=useState()
  const [image, setImage] = useState('');

  const images=[
  "https://images.pexels.com/photos/2249528/pexels-photo-2249528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
"https://images.pexels.com/photos/1061141/pexels-photo-1061141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
"https://images.pexels.com/photos/1061139/pexels-photo-1061139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
"https://images.pexels.com/photos/1010973/pexels-photo-1010973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
"https://images.pexels.com/photos/4772874/pexels-photo-4772874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ]
  const openModal=()=>{
    const randomNumber=Math.floor(Math.random()*6)+1
    setTargetNumber(randomNumber)
    setShowModal(true)
    setImage(`sayı seçin ${randomNumber}`)
  }
  const handleClick=(index)=>{
    if(index +1 ===targetNumber){
      setShowModal(false)
      setImage('Correct! CAPTCHA completed.')
    }

  }
  return (
    <div className="">
      <button onClick={openModal}>Start CAPTCHA</button>
      
      {showModal && (
        <div className="modal">
          <p>{image}</p>
          <div className="images-grid">
            {images.map((src, index) => (
              <img 
                key={index} 
                src={src} 
                alt={`Number ${index}`} 
                onClick={() => handleClick(index)} 
                style={{ width: '150px', height: '150px', cursor: 'pointer', margin: '10px' }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
