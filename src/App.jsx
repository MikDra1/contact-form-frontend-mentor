import { useState } from "react"
import Form from "./components/Form"
import ThankYou from "./components/ThankYou"

function App() {
  const [isFinished, setIsFinished] = useState(false)


  return (
    <div className="container">
      {isFinished && <ThankYou isFinished={isFinished} />}
      <Form setIsFinished={setIsFinished} />
    </div>
  )
}

export default App
