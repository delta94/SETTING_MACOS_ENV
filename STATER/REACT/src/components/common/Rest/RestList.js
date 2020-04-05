/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import i18next from 'i18next';
import MaterialBreadcrumb from 'components/common/MaterialBreadcrumb';
import PropTypes from 'prop-types';
import { DEFAULT_QUERY } from 'utils/url';
import actions from 'redux/utils/actions';
import { useDispatch } from 'react-redux';
import useRouter from 'hooks/useRouter';

const RestList = ({ breadCrumbList, defaultQuery, table, resource }) => {
  const dispatch = useDispatch();
  const { location, history } = useRouter();

  useEffect(() => {
    if (location.search) {
      dispatch(
        actions[resource].getAllData({
          query: location.search,
        }),
      );
    } else {
      history.replace(defaultQuery);
    }
  }, [dispatch, location.search, history]);
  return (
    <>
      <MaterialBreadcrumb
        data={
          breadCrumbList || [
            { path: '#', title: i18next.t(`${resource}.breadCrumb`) },
          ]
        }
      />
      <div style={{ marginBottom: 115, marginTop: 19 }}>
        {React.createElement(table)}
      </div>
    </>
  );
};

RestList.propTypes = {
  breadCrumbList: PropTypes.array,
  table: PropTypes.any,
  resource: PropTypes.string,
  defaultQuery: PropTypes.string,
};

RestList.defaultProps = {
  defaultQuery: DEFAULT_QUERY,
};

export default RestList;
