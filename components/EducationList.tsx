import type { EducationEntry } from "@/lib/content";

interface EducationListProps {
  entries: EducationEntry[];
}

export default function EducationList({ entries }: EducationListProps) {
  return (
    <div className="space-y-6">
      {entries.map((entry) => (
        <div key={`${entry.institution}-${entry.degree}`} className="card">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-text">{entry.degree}</h3>
              <p className="text-sm text-muted">{entry.institution}</p>
            </div>
            <p className="text-sm font-mono text-muted">{entry.startYear}–{entry.endYear}</p>
          </div>
          {entry.description && <p className="mt-3 text-sm text-muted">{entry.description}</p>}
        </div>
      ))}
    </div>
  );
}
