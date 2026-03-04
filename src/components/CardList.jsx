import employees from "../data/employees"
import IdCard from "./IdCard"

function CardList() {
  return (
    <div className="flex flex-wrap justify-center gap-8 px-6 py-10">
      {employees.map((person) => (
        <IdCard
          key={person.id}
          id={person.id}
          name={person.name}
          role={person.role}
          department={person.department}
          avatar={person.avatar}
        />
      ))}
    </div>
  )
}

export default CardList