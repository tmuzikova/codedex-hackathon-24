import { Table } from "react-bootstrap";

export const HotBitesMenu = () => {
  return (
    <Table hover>
      <thead>
        <tr>
          <th>Meal</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Chicken Poppers</td>
          <td>$6.00</td>
        </tr>
        <tr>
          <td>Mozz Sticks</td>
          <td>$7.00</td>
        </tr>
        <tr>
          <td>Pigs in a Blanket</td>
          <td>$7.00</td>
        </tr>
        <tr>
          <td>Tater Tots</td>
          <td>$5.00</td>
        </tr>
        <tr>
          <td>Chicken Tenders</td>
          <td>$8.00</td>
        </tr>
        <tr>
          <td>Onion Rings</td>
          <td>$5.00</td>
        </tr>
        <tr>
          <td>Fries</td>
          <td>$5.00</td>
        </tr>
        <tr>
          <td>Sweet Potato Fries</td>
          <td>$6.00</td>
        </tr>
      </tbody>
    </Table>
  );
};
