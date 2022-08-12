import React from 'react';
import Dropdown from '../common/dropdown/Dropdown';

const MenuDropdown = ({ menuLabel, items }: any) => {
  return (
    <>
      <Dropdown menuLabel={menuLabel}>
        {items.map((menuItem: any, index: number) => {
          return (
            <React.Fragment key={index}>
              <div className="p-4 hover:bg-slate-100 cursor-pointer" onClick={menuItem.method}>
                {menuItem.name}
              </div>
            </React.Fragment>
          );
        })}
      </Dropdown>
    </>
  );
};

export default MenuDropdown;
