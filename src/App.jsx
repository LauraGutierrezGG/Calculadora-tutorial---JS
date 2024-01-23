import './App.scss'

const actions = ['C', '+-', '%', '/', 7, 8, 9, 'X', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];

function App() {
  return (
    <div className="calculator">
      <div className="calculator__result">0</div>
      <div className="calculator__actions">
        {actions.map((action) => (
          <button key={action} className="calculator__action">
            {action}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App
