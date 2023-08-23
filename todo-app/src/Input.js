export default function Input() {
  return (
    <div>
      <label for="newtask">New task: </label>
      <input type="text" id="newtask" name="newtask" />
      <button type="button">Add task</button>
    </div>
  );
}
