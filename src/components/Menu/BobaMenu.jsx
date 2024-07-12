import { Table } from "react-bootstrap";

export const BobaMenu = () => {
  return (
    <Table hover>
      <thead>
        <tr>
          <th>Drink</th>
          <th>Medium</th>
          <th>Large</th>
          <th>Hot</th>
          <th>
            <em>Notes</em>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>The OG</td>
          <td>$4.25</td>
          <td>$5.25</td>
          <td>$5.25</td>
          <td>
            <em>Classic milk tea</em>
          </td>
        </tr>
        <tr>
          <td>Brown Sugar Boba</td>
          <td>$4.75</td>
          <td>$5.75</td>
          <td>$5.75</td>
          <td>
            <em>Caffeine free</em>
          </td>
        </tr>
        <tr>
          <td>Taro Boba Coconut Boba</td>
          <td>$4.25</td>
          <td>$5.25</td>
          <td>$5.25</td>
          <td>
            <em>Caffeine free, dairy free</em>
          </td>
        </tr>

        <tr>
          <td>Fruit Green/Black Tea</td>
          <td>$4.25</td>
          <td>$5.25</td>
          <td></td>
          <td>
            <em>
              Comes in a variety of flavors: mango, strawberry, passionfruit,
              peach, green apple, lychee, kiwi. Feel free to mix and match!
            </em>
          </td>
        </tr>
        <tr>
          <td>Fruit Black Tea</td>
          <td>$4.25</td>
          <td>$5.25</td>
          <td></td>
          <td>
            <em>
              Comes in a variety of flavors: peach, strawberry. Feel free to mix
              and match!
            </em>
          </td>
        </tr>
        <tr>
          <td>Jasmine/Wintermelon Milk Tea</td>
          <td>$4.25</td>
          <td>$5.25</td>
          <td>$5.25</td>
          <td>
            <em>Dairy free</em>
          </td>
        </tr>

        <tr>
          <td colSpan="5" className="text-center">
            <strong>Toppings +$0.50</strong>: Tapioca pearls, lychee jelly,
            mixed jelly, grass jelly, pop strawberry, pop passionfruit, mango
            stars
          </td>
        </tr>
      </tbody>
    </Table>
  );
};
