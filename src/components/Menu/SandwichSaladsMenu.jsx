import { Table } from "react-bootstrap";

export const SandwichSaladMenu = () => {
  return (
    <Table hover>
      <thead>
        <tr>
          <th>Meal</th>
          <th>Price</th>
          <th>
            <em>Notes</em>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Beyond Bussin Sandwich</td>
          <td>$15.00</td>
          <td>
            <em>
              Our new VEGAN sandwich highlighting the beyond burger and our
              house-made vegan chipotle aioli alongside lettuce, onion and
              avocado. Comes with a side of our house made chipotle aioli and
              chips
            </em>
          </td>
        </tr>
        <tr>
          <td>Spicy Chicken Sandwich</td>
          <td>$13.00</td>
          <td>
            <em>
              Spicy mayo, grilled chicken, crispy bacon and avocado on Italian
              herb focaccia. Comes with chips
            </em>
          </td>
        </tr>
        <tr>
          <td>Italian Panini</td>
          <td>$11.00</td>
          <td>
            <em>
              Prosciutto, pesto, and mozzarella in between herb focaccia and
              pressed til golden brown and crispy (pesto contains pine nuts).
              Comes with chips
            </em>
          </td>
        </tr>
        <tr>
          <td>Tuna Melt</td>
          <td>$11.00</td>
          <td>
            <em>
              House-made tuna salad with American cheese on Italian herb
              focaccia pressed to perfection (can be spicy on request). Comes
              with chips
            </em>
          </td>
        </tr>
        <tr>
          <td>Zesto Chicken Sandwich</td>
          <td>$13.00</td>
          <td>
            <em>
              Basil pesto, grilled chicken, fresh mozzarella and lemon zest on
              Italian herb focaccia (pesto contains pine nuts). Comes with chips
            </em>
          </td>
        </tr>
        <tr>
          <td>Turkey Club</td>
          <td>$11.00</td>
          <td>
            <em>
              Roast turkey, lettuce, tomato, crispy bacon and American cheese on
              sourdough. Comes with chips
            </em>
          </td>
        </tr>
        <tr>
          <td>Grilled Cheese</td>
          <td>$6.50</td>
          <td>
            <em>Comes with chips. +bacon/tomato/turkey: $1.50</em>
          </td>
        </tr>
        <tr>
          <td>Mixed Green Salad</td>
          <td>$6.50</td>
          <td>
            <em>w/tomato, vegan</em>
          </td>
        </tr>
        <tr>
          <td>Cobb Salad</td>
          <td>$10.00</td>
          <td>
            <em>
              Romaine lettuce, bacon, egg, chicken, tomato, and avocado tossed
              with ranch
            </em>
          </td>
        </tr>
        <tr>
          <td>Pizza Panini</td>
          <td>$11.00</td>
          <td>
            <em>
              Pepperoni, fresh mozzarella, marinara and olive oil on Italian
              herb focaccia and pressed to perfection! Comes with chips
            </em>
          </td>
        </tr>
        <tr>
          <td>Smoked Salmon Tartine</td>
          <td>$11.00</td>
          <td>
            <em>
              Lemon zest infused cream cheese on toasted heritage wheat. Piled
              high with smoked salmon and topped with pickled red onion. Comes
              with a side salad
            </em>
          </td>
        </tr>
        <tr>
          <td>Avocado Toast</td>
          <td>$10.00</td>
          <td>
            <em>
              Avocado mashed with salt, pepper, lemon juice and olive oil on
              toasted heritage wheat. Comes with a side salad. +egg: $1
            </em>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};
