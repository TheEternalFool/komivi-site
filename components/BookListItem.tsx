import type { BookEntry } from "@/lib/content";

interface BookListItemProps {
  book: BookEntry;
}

export default function BookListItem({ book }: BookListItemProps) {
  return (
    <li className="flex flex-col gap-1 rounded-xl border border-border px-4 py-3">
      <span className="text-sm font-medium text-text">{book.title}</span>
      {book.author && <span className="text-xs text-muted">{book.author}</span>}
      {book.note && <span className="text-xs text-muted">{book.note}</span>}
    </li>
  );
}
