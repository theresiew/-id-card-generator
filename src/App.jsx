import CardList from "./components/CardList"

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Header */}
      <header className="bg-white shadow-sm py-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800">ID Card Generator</h1>
        <p className="text-gray-400 mt-2 text-sm">NexaCorp — Employee Directory</p>
      </header>

      {/* Cards */}
      <main>
        <CardList />
      </main>

      {/* Footer */}
      <footer className="text-center py-6">
        <p className="text-xs text-gray-300">NexaCorp · Confidential · 2026</p>
      </footer>

    </div>
  )
}

export default App