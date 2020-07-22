import React from 'react';
import { Result } from 'antd';
import check, { IAuthorityType } from './CheckPermissions';

import AuthorizedRoute from './AuthorizedRoute';
import Secured from './Secured';

const Authorized = ({
  children,
  authority,
  noMatch = (
    <Result
      status={403}
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
    />
  ),
}) => {
  const childrenRender = typeof children === 'undefined' ? null : children;
  const dom = check(authority, childrenRender, noMatch);
  return <>{dom}</>;
};

export default Authorized;
