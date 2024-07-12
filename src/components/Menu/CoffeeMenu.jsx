import { Table } from "react-bootstrap";

export const CoffeeMenu = () => {
  return (
    <Table hover>
      <thead>
        <tr>
          <th>Drink</th>
          <th>Hot</th>
          <th>Cold</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Latte</td>
          <td>$4.75</td>
          <td>$5.25</td>
        </tr>
        <tr>
          <td>Cortado</td>
          <td>$4.25</td>
          <td>$4.75</td>
        </tr>
        <tr>
          <td>Drip Coffee</td>
          <td>
            Small: $3
            <br />
            Medium: $3.50
            <br />
            Large: $4
          </td>
          <td>
            Small: $3.50
            <br />
            Large: $4.25
          </td>
        </tr>
        <tr>
          <td>Cafe au Lait</td>
          <td>$3.25</td>
          <td></td>
        </tr>
        <tr>
          <td>Cappuccino</td>
          <td>$4.50</td>
          <td></td>
        </tr>
        <tr>
          <td>Mocha</td>
          <td>$5.75</td>
          <td>$6.25</td>
        </tr>
        <tr>
          <td>Red Eye</td>
          <td>$4.50</td>
          <td>$4.75</td>
        </tr>
        <tr>
          <td>Americano</td>
          <td>$3.75</td>
          <td>$4.25</td>
        </tr>
      </tbody>
    </Table>
  );
};
