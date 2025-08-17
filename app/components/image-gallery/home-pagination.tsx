import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "~/components/ui/pagination";

interface HomePaginationProps {
  page: number;
  setPage: (page: number) => void;
}

export const HomePagination = ({ page, setPage }: HomePaginationProps) => {
  const handlePageClick = (newPage: number) => {
    setPage(newPage);
  };

  const renderPageNumbers = () => {
    const items = [];
    const delta = 2;

    if (page > delta + 2) {
      items.push(
        <PaginationItem key={1}>
          <PaginationLink
            className="cursor-pointer"
            onClick={() => handlePageClick(1)}
            isActive={page === 1}
          >
            1
          </PaginationLink>
        </PaginationItem>
      );

      if (page > delta + 3) {
        items.push(
          <PaginationItem key="ellipsis1">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
    }

    const start = Math.max(1, page - delta);
    const end = page + delta;

    for (let i = start; i <= end; i++) {
      items.push(
        <PaginationItem key={i}>
          <PaginationLink
            className="cursor-pointer"
            onClick={() => handlePageClick(i)}
            isActive={page === i}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    items.push(
      <PaginationItem key="ellipsis2">
        <PaginationEllipsis />
      </PaginationItem>
    );

    return items;
  };

  return (
    <Pagination className="ml-auto">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => page > 1 && handlePageClick(page - 1)}
            className={
              page === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"
            }
          />
        </PaginationItem>

        {renderPageNumbers()}

        <PaginationItem>
          <PaginationNext
            className="cursor-pointer"
            onClick={() => handlePageClick(page + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
