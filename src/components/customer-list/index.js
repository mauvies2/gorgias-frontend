import React from 'react';

import AddCustomer from '../add-customer';
import './index.css';

function CustomerList() {
  const [list, setList] = React.useState([]);

  return (
    <div className="mt-75 layout-column justify-content-center align-items-center">
      <section className="layout-row align-items-center justify-content-center">
        <AddCustomer addCustomer={setList} />
      </section>

      {list.length > 0 && (
        <ul className="styled mt-50" data-testid="customer-list">
          {list.map(({ id, name }, i) => (
            <li key={id} className="slide-up-fade-in" data-testid={`list-item${i}`}>
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CustomerList;
