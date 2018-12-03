import React from 'react';
import { Drawer } from 'abtd';
import SiderMenu from './SiderMenu';
import { getFlatMenuKeys } from './SiderMenuUtils';

const SiderMenuWrapper = React.memo( props => {
  const { isMobile, menuData, collapsed, onCollapse }  = props;
  const flatMenuKeys = getFlatMenuKeys(menuData);
  return isMobile? (
    <Drawer visible={ !collapsed } placement='left' onClose= { () => onCollapse(true) } >
      <SiderMenu {...props} flatMenuKeys={flatMenuKeys} collapsed={ isMobile? false : collapsed } />
    </Drawer>
  ) : (
    <SiderMenu {...props} flatMenuKeys={flatMenuKeys} />
  )
})

export default SiderMenuWrapper;