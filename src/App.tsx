import { useRef, useState } from 'react'
import './App.css'
import SignatureCanvas from 'react-signature-canvas';

function App() {
  const [count, setCount] = useState(0)
  const sigCanvas = useRef<SignatureCanvas>(null);
  const [imageURL, setImageURL] = useState<string | null>(null)

  const handleSave = () => {
    if (!sigCanvas.current || sigCanvas.current.isEmpty()) return;
    // full canvas:
    setImageURL(sigCanvas.current.toDataURL('image/png'))

  }

  return (
    <>
      <section id="center">
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>
      <div className="">
        <SignatureCanvas 
          ref={sigCanvas} 
          canvasProps={{
            width: 500,
            height: 500,
            className: 'sigCanvas',
            style: { border: '1px solid #000' },
          }}
        />
      </div>
      <button onClick={handleSave}>Save</button>
      <button type="button" onClick={() => sigCanvas.current?.clear()}>Clear</button>
      <div>
        {imageURL && <img src={imageURL} alt="Signature" style={{ width: 500, height: 500, border: '1px solid #000' }} />}
      </div>
    </>
  )
}

export default App
