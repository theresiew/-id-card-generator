function IdCard({ id, name, role, department, avatar }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg w-72 overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
     
      <div className="h-2 bg-blue-500" />

      <div className="flex justify-center pt-6">
        <img
          src={avatar}
          alt={name}
          className="w-20 h-20 rounded-full border-4 border-blue-100 bg-gray-50"
        />
      </div>

      <div className="text-center px-6 py-4">
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
        <p className="text-blue-500 font-medium text-sm mt-1">{role}</p>
        <span className="inline-block mt-2 px-3 py-1 bg-blue-50 text-blue-600 text-xs rounded-full font-medium">
          {department}
        </span>
      </div>

      <div className="border-t border-gray-100 px-6 py-3 bg-gray-50 text-center">
        <p className="text-xs text-gray-400 font-mono">{id}</p>
      </div>

    </div>
  )
}

export default IdCard