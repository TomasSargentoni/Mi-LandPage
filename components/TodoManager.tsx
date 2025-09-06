import V0Task from "./V0Task" // Assuming V0Task is a component that needs to be imported

const TodoManager = () => {
  return (
    <V0Task
      name="TodoManager"
      taskNameActive="Marking all tasks done"
      taskNameComplete="Marked all tasks done"
      input={{ action: "mark_all_done" }}
    />
  )
}

export default TodoManager
