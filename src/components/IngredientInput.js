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
    ingredient.name = "ingredient_name";
    ingredient.placeholder = "Ingredient";
    child.appendChild(ingredient);

    let amount = document.createElement("input");
    amount.type = "text";
    amount.name = "ingredient_amt";
    amount.placeholder = "Amount";
    child.appendChild(amount);

    let unit = document.createElement("input");
    unit.type = "text";
    unit.name = "ingredient_unit";
    unit.placeholder = "(tsp,lb,etc.)";
    child.appendChild(unit);

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
    <div className="ingredient-container" id="ingredients">
      <div className="ingredient flex-horoz">
        <i className="bi bi-grip-vertical"></i>
        <input type="text" name="ingredient_name" placeholder="Ingredient" />
        <input type="text" name="ingredient_amt" placeholder="Amount" />
        <input type="text" name="ingredient_unit" placeholder="(tsp,lb,etc.)" />

        <i
          className="bi bi-x-circle-fill"
          onClick={() => toast.error("You must have at least one ingredient.")}
        ></i>
      </div>
      <div className="add-ingredients flex-horoz" onClick={() => addItem()}>
        <i className="bi bi-plus-circle-fill"></i>
        <div>Ingredient</div>
      </div>
    </div>
  );
};
