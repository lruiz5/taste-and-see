import { toast } from "react-toastify";
import "./IngredientInput.css";

export const IngredientInput = () => {
  function removeItem(el) {
    el.parentElement.remove();
  }

  function addItem() {
    let child = document.createElement("div");
    child.className = "ingredient flex-horoz";

    let dragHandle = document.createElement("i");
    dragHandle.className = "bi bi-grip-vertical";
    child.appendChild(dragHandle);

    let ingredient = document.createElement("input");
    ingredient.type = "text";
    ingredient.placeholder = "Ingredient";
    child.appendChild(ingredient);

    let amount = document.createElement("input");
    amount.type = "text";
    amount.placeholder = "Amount";
    child.appendChild(amount);

    let removeButton = document.createElement("i");
    removeButton.className = "bi bi-x-circle-fill";
    removeButton.onclick = function () {
      removeItem(removeButton);
    };
    child.appendChild(removeButton);

    let i = document.getElementById("ingredients");
    i.insertBefore(child, i.lastElementChild);
  }

  return (
    <div class="ingredient-container" id="ingredients">
      <div class="ingredient flex-horoz">
        <i class="bi bi-grip-vertical"></i>
        <input type="text" placeholder="Ingredient" />
        <input type="text" placeholder="Amount" />
        <select>
          <option value="tsp">tsp</option>
          <option value="tbsp">tbsp</option>
          <option value="mg">mg</option>
          <option value="kg">kg</option>
          <option value="oz">oz</option>
          <option value="lb">lb</option>
          <option value="g">g</option>
          <option value="whole">whole</option>
        </select>
        <i
          class="bi bi-x-circle-fill"
          onClick={() => toast.error("You must have at least one ingredient.")}
        ></i>
      </div>
      <div class="add-ingredients flex-horoz" onClick={() => addItem()}>
        <i class="bi bi-plus-circle-fill"></i>
        <div>Ingredient</div>
      </div>
    </div>
  );
};
