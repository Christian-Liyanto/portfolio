import { getStackCategory, stackCategories } from "../lib/project-stack";

type Props = {
  tags: string[];
  layout?: "compact" | "grouped";
};

export default function ProjectStackTags({
  tags,
  layout = "compact",
}: Props) {
  if (layout === "compact") {
    return (
      <ul
        aria-label="Project stack"
        className="flex flex-wrap justify-center gap-2"
      >
        {tags.map((tag) => {
          const category = stackCategories.find(
            (item) => item.id === getStackCategory(tag),
          )!;

          return (
            <li
              key={tag}
              className={`rounded-full border px-3 py-1 text-xs font-semibold ${category.badgeClassName}`}
            >
              {tag}
            </li>
          );
        })}
      </ul>
    );
  }

  const groups = stackCategories
    .map((category) => ({
      category,
      tags: tags.filter((tag) => getStackCategory(tag) === category.id),
    }))
    .filter((group) => group.tags.length > 0);

  return (
    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {groups.map(({ category, tags: categoryTags }) => (
        <section key={category.id} aria-labelledby={`stack-${category.id}`}>
          <h2
            id={`stack-${category.id}`}
            className={`text-xs font-semibold uppercase tracking-[0.16em] ${category.headingClassName}`}
          >
            {category.label}
          </h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {categoryTags.map((tag) => (
              <li
                key={tag}
                className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${category.badgeClassName}`}
              >
                {tag}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
