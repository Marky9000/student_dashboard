import React from "react";


const Select = props => {
  let items = props.listData.map(item => (
    <option key={item.id} value={item.name}>
      {`${item.name}`}
    </option>
  ));
  return (
    <div>
      <form autoComplete="off">
        <select
          onChange={props.onChange}
          name="chooseItem"
        >
          <option >{props.innerHTML}</option>
          {items}
        </select>
      </form>
    </div>

  );
};

export default Select;
