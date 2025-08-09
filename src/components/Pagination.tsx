import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    if (currentPage <= 4) {
      pages.push(1, 2, 3, 4, 5, "...", totalPages);
    } else if (currentPage >= totalPages - 3) {
      pages.push(
        1,
        "...",
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages
      );
    } else {
      pages.push(
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPages
      );
    }
    return pages;
  };

  const handleClick = (page: number) => {
    if (page !== currentPage && typeof page === "number") {
      onPageChange(page);
    }
  };

  return (
    <div className="flex items-center justify-center gap-1 sm:gap-2 mt-8 flex-wrap">
      {/* Prev */}
      <button
        disabled={currentPage === 1}
        onClick={() => handleClick(currentPage - 1)}
        className="flex items-center gap-1 px-3 py-2 text-sm rounded-full bg-white text-gray-700 hover:cursor-pointer
                   hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed shadow-sm transition-all"
      >
        <HiChevronLeft className="text-lg" />
        <span className="hidden sm:inline">Prev</span>
      </button>

      {/* Page Numbers */}
      {getPageNumbers().map((page, idx) => (
        <button
          key={idx}
          onClick={() => handleClick(page as number)}
          disabled={page === "..."}
          className={`px-4 py-2 text-sm rounded-full transition-all min-w-[40px] shadow-sm hover:cursor-pointer
            ${
              page === currentPage
                ? "bg-gray-900 text-white font-medium"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }
            ${
              page === "..."
                ? "cursor-default text-gray-400 bg-transparent shadow-none"
                : ""
            }
          `}
        >
          {page}
        </button>
      ))}

      {/* Next */}
      <button
        disabled={currentPage === totalPages}
        onClick={() => handleClick(currentPage + 1)}
        className="flex items-center gap-1 px-3 py-2 text-sm rounded-full bg-white text-gray-700 hover:cursor-pointer 
                   hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed shadow-sm transition-all"
      >
        <span className="hidden sm:inline">Next</span>
        <HiChevronRight className="text-lg" />
      </button>
    </div>
  );
}
