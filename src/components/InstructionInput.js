import { toast } from "react-toastify";
import "./styles/Instructions.css";
export const InstructionInput = () => {
  function removeItem(el) {
    el.parentElement.remove();
  }

  function addItem() {
    let child = document.createElement("div");
    child.className = "instruction flex-horoz";

    let dragHandle = document.createElement("i");
    dragHandle.className = "bi bi-grip-vertical";
    child.appendChild(dragHandle);

    let instruction = document.createElement("input");
    instruction.type = "text";
    instruction.name = "instruction_name";
    instruction.placeholder = "Instruction";
    child.appendChild(instruction);

    let removeButton = document.createElement("i");
    removeButton.className = "bi bi-x-circle-fill";
    removeButton.onclick = function () {
      removeItem(removeButton);
    };
    child.appendChild(removeButton);

    let i = document.getElementById("instructions");
    i.insertBefore(child, i.lastElementChild);
  }

  return (
    <div className="instruction-container" id="instructions">
      <div className="instruction flex-horoz">
        <i className="bi bi-grip-vertical"></i>
        <input type="text" name="instruction_name" placeholder="Instruction" />
        <i
          className="bi bi-x-circle-fill"
          onClick={() => toast.error("You must have at least one instruction.")}
        ></i>
      </div>
      <div className="add-instructions flex-horoz" onClick={() => addItem()}>
        <i className="bi bi-plus-circle-fill"></i>
        <div>Instruction</div>
      </div>
    </div>
  );
};
