import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface ListPaginationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const ListPagination = ({ page, setPage }: ListPaginationProps) => {
  const windowSize: number = 3;
  const maxPage: number = 500;

  const getNumberPage = (current: number, total: number, size: number) => {
    let start = Math.max(current - 1, 1);
    let end = start + size - 1;

    if (end > total) {
      end = total;
      start = Math.max(end - size + 1, 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };
  const pages = getNumberPage(page, maxPage, windowSize);

  return (
    <Pagination>
      <PaginationContent className="cursor-pointer">
        <PaginationItem>
          <PaginationPrevious onClick={() => setPage((p) => Math.max(p - 1, 1))} />
        </PaginationItem>
        {pages.map((p) => {
          return (
            <PaginationItem key={p}>
              <PaginationLink onClick={() => setPage(p)} isActive={p === page}>
                {p}
              </PaginationLink>
            </PaginationItem>
          );
        })}
        <PaginationItem className="cursor-default">
          <PaginationEllipsis />
        </PaginationItem>

        <PaginationItem>
          <PaginationNext onClick={() => setPage((p) => Math.min(p + 1, 500))} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default ListPagination;
