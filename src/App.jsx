import { useState } from 'react';
import './App.scss'

function App() {

  const [value, setValue] = useState('0');

  const actions = ['C', '+-', '%', '/', 7, 8, 9, 'X', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];

  const handleClick = (actionClicked) => {

    // Botón "C"
    if (actionClicked === 'C') {
      setValue('0');
      return;
    }

     // Botón "+-"
     if (actionClicked === '+-') {
      setValue((parseFloat(value) * -1).toString());
      return;
    }

    //Condifición de si se incluye el punto se convierte en decimal
    if (actionClicked === '.' && !value.includes('.')) {
      setValue(value + actionClicked);
      return;
    }

    if (typeof actionClicked !== 'number') {
      return;
    }

    if (value === '0') {
      setValue(actionClicked.toString());
    } else {
      setValue(value + actionClicked);
    }
  };

  return (
    <div className="calculator">
      <div className="calculator__result">{value}</div>
      <div className="calculator__actions">
        {actions.map((action) => (
          <button key={action} onClick={() => handleClick(action)} className="calculator__action">
            {action}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;