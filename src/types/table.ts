import { ReactNode } from "react";

export interface TableColumn<T> {
  header: string | JSX.Element;
  cell: ReactNode | ((item: T) => ReactNode) | string;
  loader?: ReactNode;
}
