import { useCallback, useState } from 'react';

export default function useForceUpdate(): () => void {
  const [ , dispatch ] = useState<{}>(Object.create(null));

  // Turn dispatch(required_parameter) into dispatch().
  const memoizedDispatch = useCallback(
    (): void => {
      dispatch(Object.create(null));
    },
    [ dispatch ],
  );
  return memoizedDispatch;
}
