import { ReactNode, useState } from "react";
import classNames from "classnames";
import { TableColumn } from "./../types/table";
import SkeletonLoader from "./common/SkeletonLoader";

interface TableProps<T> {
  columns: TableColumn<T>[];
  data?: T[];
  isLoading?: boolean;
  errorMessage?: ReactNode;
  tableClassName?: string;
  tdClassName?: string;
  trClassName?: string;
  thClassName?: string;
  onRowClick?: (item: T) => void;
}

const Table = <T,>({
  columns,
  data,
  isLoading,
  errorMessage,
  tableClassName,
  tdClassName,
  trClassName,
  thClassName,
  onRowClick,
}: TableProps<T>) => {
  const [selectedRow, setSelectedRow] = useState<T>();
  if (!isLoading && !data?.length) {
    return (
      <div
        className={`flex h-[12.5rem] flex-col items-center justify-center gap-1 pt-[2rem]  ${tableClassName}`}
      >
        <p className="text-sm text-sub-text">
          {errorMessage || "Nothing found"}
        </p>
      </div>
    );
  }
  return (
    <div>
      <div className={`${tableClassName} w-full overflow-x-auto`}>
        <table className="w-full rounded-t-[0.38119rem] bg-white">
          <thead>
            <tr className="bg-grey-bg">
              {columns.map((column, index) => (
                <th
                  key={String(index + 1)}
                  className={classNames(
                    `align-left text-13 h-[1.71538rem] whitespace-nowrap px-[0.813rem] py-2 text-left font-medium text-sub-text first:rounded-tl-[0.38119rem] last:rounded-tr-[0.38119rem] ${thClassName}`,
                    {
                      "pl-[3.125rem]": column.header,
                    }
                  )}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-grey-outline">
            {isLoading
              ? // Render a loading skeleton while data is being fetched
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <tr key={num}>
                    {columns.map((_column, columnIndex) => (
                      <td
                        key={String(columnIndex + 1)}
                        aria-label="loader"
                        className="h-14 whitespace-nowrap px-[0.813rem] align-middle text-sm"
                      >
                        <SkeletonLoader />
                      </td>
                    ))}
                  </tr>
                ))
              : data?.map((item, rowIndex) => (
                  <tr
                    onClick={() => {
                      if (onRowClick) {
                        setSelectedRow(item);
                      }
                      onRowClick?.(item);
                    }}
                    key={String(rowIndex + 1)}
                    className={classNames(
                      `transition-all duration-300 ${trClassName}`,
                      {
                        "hover:bg-secondary-light dark:hover:dark:bg-nav-hover-dark cursor-pointer":
                          onRowClick,
                        "bg-secondary-light":
                          JSON.stringify(item) === JSON.stringify(selectedRow),
                      }
                    )}
                  >
                    {columns.map((column, columnIndex) => (
                      <td
                        key={String(columnIndex + 1)}
                        className={classNames(
                          `whitespace-nowrap px-[0.813rem] py-3 align-middle text-sm font-medium ${tdClassName}`
                        )}
                      >
                        {typeof column.cell === "function"
                          ? column.cell(item)
                          : column.cell}
                      </td>
                    ))}
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

Table.defaultProps = {
  tableClassName: "",
  tdClassName: "",
  trClassName: "",
  thClassName: "",
  onRowClick: undefined,
  data: [],
  isLoading: false,
  errorMessage: "",
};

export default Table;
