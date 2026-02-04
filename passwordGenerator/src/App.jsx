import { useCallback,useState,useRef } from "react";
import "./App.css";

function App() {
  const [length, SetLength] = useState(8);
  const [numAllow, SetNumAllow] = useState(false);
  const [charAllow, SetCharAllow] = useState(false);
  const [password, SetPassword] = useState("");

  const InputRef = useRef(null);

  const CopyPass = useCallback(()=>{
    InputRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password])

  const GenPassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllow) str += "0123456789";
    if (charAllow) str += "!@#$%^&*()_+-=[]{}|;':/<>?~";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    SetPassword(pass);
  }, [length, numAllow, charAllow,SetPassword]);

  /* useEffect(() => {
    GenPassword();
  }, [GenPassword]); */

  return (
    <div className="main">
      <h1>Password Generator</h1>

      <div className="in-one">
        <input
          type="text"
          className="input-1"
          value={password}
          readOnly
          ref={InputRef}
        />
        <button onClick={CopyPass} className="copy">Copy</button>
      </div>

      <div className="in-two">
        <input
          type="range"
          min="8"
          max="100"
          value={length}
          onChange={(e) => SetLength(Number(e.target.value))}
        />
        <label>Length ({length})</label>

        <input
          type="checkbox"
          checked={numAllow}
          onChange={() => SetNumAllow((p) => !p)}
        />
        <label>Number</label>

        <input
          type="checkbox"
          checked={charAllow}
          onChange={() => SetCharAllow((p) => !p)}
        />
        <label>Character</label>
      </div>
      <div>
        <button className="gen-btn" onClick={GenPassword}>Generate</button>
      </div>
    </div>
    
  );
}

export default App;
