import { useState } from 'react';
import './App.scss'

const actions = ['C', '+-', '%', '/', 7, 8, 9, 'X', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];

function App() {

  const [value, setValue] = useState('0');
  const [operation, setOperation] = useState();

  console.log('render', { value, operation });

  const handleClick = (actionClicked) => {
    
    // Botón "%"
    if (actionClicked === '%') {
      setValue((value / 100).toFixed(2));
      return;
    }
    /*if (actionClicked === '%') {
      setValue((value / 100).toString());
      return;
    }*/

    // Botón "+-"
    if (actionClicked === '+-') {
      setValue(((value) * -1).toString());
      return;
    }

    // Botón "C"
    if (actionClicked === 'C') {
      setValue('0');
      return;
    }

    //Condifición de si se incluye el punto se convierte en decimal
    if (actionClicked === '.' && !value.includes('.')) {
      setValue(value + actionClicked);
      return;
    }

    if (actionClicked === '=') {
      setOperation('=');
      if (typeof operation === 'undefined' || operation === '=') {
        return;
      }

      //Ver en vídeo el por que se declaran así las constantes
      const numbers = value.split(operation);
      const num1 = numbers[0];
      const num2 = numbers.lenght === 0 || numbers[1] === '' ? num1 : numbers[1];

      if (operation === 'X') {
        setValue(num1 * num2);
        return;
      }

      if (operation === '+') {
        setValue((Number(num1) + Number(num2)).toString());
        return;
      }

      if (operation === '-') {
        setValue((Number(num1) - Number(num2)).toString());
        return;
      }

      if (operation === '/') {
        setValue((Number(num1) / Number(num2)).toString());
        return;
      }

    }

    if (typeof actionClicked !== 'number') {
      const lastChar = value.slice(-1);
      console.log('antes', (operation, actionClicked))
      setOperation(actionClicked)
      /*Situar aquí para que se ejecute y trabajar conla variable de estado operation con el valor anterior*/
      console.log('despues', {operation, actionClicked})


      // Si escribo un símbolo sin escribir un número → lo reemplazo if (lastChar === '/' || lastChar === '+' || lastChar === 'X' || lastChar === '-') -> pero lo sustituyo para el siguiente paso
      if (lastChar === operation) {
        const newValue = value.replace(lastChar, actionClicked);
        setValue(newValue);
        return;
      }

      setValue(value + actionClicked);
    
      return;
    }

    //Condición de pulsar el 0 varias veces y que no los acumule
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

