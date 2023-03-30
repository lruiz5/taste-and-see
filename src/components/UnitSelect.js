import { useState } from "react";

export const UnitSelect = () => {
  const [unit, setUnit] = useState("");
  return (
    <select
      name="ingredient_unit"
      id="unit-select"
      value={unit}
      onChange={(e) => setUnit(e.target.value)}
    >
      <option value="tsp">tsp</option>
      <option value="tbsp">tbsp</option>
      <option value="mg">mg</option>
      <option value="kg">kg</option>
      <option value="oz">oz</option>
      <option value="lb">lb</option>
      <option value="g">g</option>
      <option value="whole">whole</option>
    </select>
  );
};
