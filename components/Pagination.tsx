import { ArrowIcon } from "./ui/ArrowIcon";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  // Removed the '?' to make it required, ensuring it's never undefined
  onPageChange: (page: number) => void; 
}

const getPaginationRange = (currentPage: number, totalPages: number) => {
  // Fixed: Removed the unused 'showAmount' variable
  
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const startPages = [1, 2, 3];
  const endPages = [totalPages - 2, totalPages - 1, totalPages];

  if (currentPage <= 2) {
    return [...startPages, "...", ...endPages];
  }

  if (currentPage >= totalPages - 1) {
    return [...startPages, "...", ...endPages];
  }

  return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
};

export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const pages = getPaginationRange(currentPage, totalPages);

  return (
    <nav className="flex items-center justify-between w-full border-t border-feint pt-5 mt-12.5">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center gap-2 hover:text-white disabled:opacity-60 group"
      >
        <ArrowIcon className="w-3 md:w-5 rotate-180" />
        <span className="text-sz-14">Previous</span>
      </button>

      <div className="flex items-center gap-1">
        {pages.map((page, index) => {
          if (page === "...") {
            return (
              <span key={`dots-${index}`} className="px-3 text-foreground/60">
                ...
              </span>
            );
          }

          const isActive = page === currentPage;

          return (
            <button
              key={`page-${page}`}
              onClick={() => onPageChange(Number(page))}
              className={`w-6 md:w-10 aspect-square rounded-lg flex items-center justify-center text-sz-14 font-medium
                ${isActive 
                  ? "bg-brand text-black" 
                  : "text-foreground/70 hover:bg-feint hover:text-foreground"
                }`}
            >
              {page}
            </button>
          );
        })}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center gap-2 hover:text-white disabled:opacity-60 group"
      >
        <span className="text-sz-14">Next</span>
        <ArrowIcon className="w-3 md:w-5" />
      </button>
    </nav>
  );
};