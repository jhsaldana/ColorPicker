import { useState } from 'react'


const Color = ({ Color, setSelectedColor }) => {
  return (
    <div 
      className={Color} 
      onClick={() => setSelectedColor(Color)}>
     </div>
  )
}

const App = () => {
  const [selectedColor, setSelectedColor] = useState("")
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color Color="violet" setSelectedColor={setSelectedColor}/>
        <Color Color="blue" setSelectedColor={setSelectedColor}/>
        <Color Color="orange" setSelectedColor={setSelectedColor}/>
      </div>
    </div>
  );
};

export default App;
