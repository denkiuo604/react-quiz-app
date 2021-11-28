import './App.css';
import QuizBoard from './components/quizboard';
import quiz from './quiz';

function App() {
  return (
    <div className="App">
      <h1>
        Reactで簡単なクイズ画面作成
      </h1>
      {
        quiz.map(q => 
          <QuizBoard
            key={q.id}
            id={q.id}
            statement={q.statement}
            type={q.type}
            choices={q.choices}
            answer={q.answer}
          />
        )
      }
    </div>
  );
}

export default App;
