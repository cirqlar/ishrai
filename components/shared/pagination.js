import cn from "classnames";
import Link from "next/link";
import React from "react";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";

import range from "../../utils/range";

import styles from "./css/pagination.module.css";

function Ellipses() {
  return (
    <div className={styles.ellipses_container}>
      <div className={styles.ellipses}></div>
      <div className={styles.ellipses}></div>
      <div className={styles.ellipses}></div>
    </div>
  );
}

export default function LinkPagination({ currentPage, numPages, baseLink }) {
  const neighbors = 1;
  const LEFT_ELLIPSES = "LEFT_PAGE";
  const RIGHT_ELLIPSES = "RIGHT_PAGE";

  const totalNumbers = neighbors * 2 + 1;

  let pages = [];

  if (totalNumbers < numPages) {
    const startPage = Math.max(1, currentPage - neighbors);
    const endPage = Math.min(numPages, currentPage + neighbors);
    const numbers = range(startPage, endPage);

    const hasLeftSpill = startPage > 1;
    const hasRightSpill = numPages - endPage > 0;

    pages = [...(hasLeftSpill ? [LEFT_ELLIPSES] : []), ...numbers, ...(hasRightSpill ? [RIGHT_ELLIPSES] : [])];
  } else {
    pages = range(1, numPages);
  }

  return (
    <div>
      <ul className={styles.pagination_list}>
        {pages.map((val) => {
          if (val == LEFT_ELLIPSES || val == RIGHT_ELLIPSES)
            return (
              <React.Fragment key={val}>
                {val == LEFT_ELLIPSES && (
                  <li>
                    <Link href={baseLink + "1"}>
                      <a className={styles.pagination_item}><BiChevronsLeft /></a>
                    </Link>
                  </li>
                )}
                <li>
                  <Ellipses />
                </li>
                {val == RIGHT_ELLIPSES && (
                  <li>
                    <Link href={baseLink + numPages}>
                      <a className={styles.pagination_item}><BiChevronsRight /></a>
                    </Link>
                  </li>
                )}
              </React.Fragment>
            );

          return val === currentPage ? (
            <li key={val}>
              <span className={cn(styles.pagination_item, styles.active)}>{val}</span>
            </li>
          ) : (
            <li key={val}>
              <Link href={baseLink + val}>
                <a className={styles.pagination_item}>{val}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
