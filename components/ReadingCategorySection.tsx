import type { ReadingCategory } from "@/lib/content";
import BookListItem from "@/components/BookListItem";
import Badge from "@/components/Badge";

interface ReadingCategorySectionProps {
  category: ReadingCategory;
}

export default function ReadingCategorySection({ category }: ReadingCategorySectionProps) {
  return (
    <section className="card space-y-4">
      <div>
        <Badge>{category.name}</Badge>
        {category.description && <p className="mt-2 text-sm text-muted">{category.description}</p>}
      </div>
      <ul className="grid gap-3 md:grid-cols-2">
        {category.books.map((book) => (
          <BookListItem key={`${category.name}-${book.title}`} book={book} />
        ))}
      </ul>
    </section>
  );
}
