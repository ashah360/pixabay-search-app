import { NextRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';

export default function modifyQueryString(
  router: NextRouter,
  pathname: string,
  modifyQueryFn: (q: ParsedUrlQuery) => ParsedUrlQuery
) {
  router.replace(
    {
      pathname,
      query: modifyQueryFn(router.query),
    },
    undefined,
    {
      shallow: true,
    }
  );
}
