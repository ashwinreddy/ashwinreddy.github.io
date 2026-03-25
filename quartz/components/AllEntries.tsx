import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { byDateAndAlphabetical } from "./PageList"
import { formatDate } from "./Date"
import { resolveRelative } from "../util/path"

const AllEntries: QuartzComponent = (props: QuartzComponentProps) => {
  const { allFiles, fileData, cfg } = props
  const pages = allFiles
    .filter((f) => f.slug !== "index" && f.frontmatter?.date !== undefined)
    .sort(byDateAndAlphabetical(cfg))

  return (
    <div class="all-entries">
      <ul class="all-entries-ul">
        {pages.map((page) => {
          const title = page.frontmatter?.title ?? "Untitled"
          const published = page.dates?.published
          const modified = page.dates?.modified
          const showUpdated =
            published && modified && Math.abs(modified.getTime() - published.getTime()) > 86400000

          return (
            <li class="all-entries-li">
              <span class="all-entries-date">
                {published && <span>{formatDate(published, cfg.locale)}</span>}
                {showUpdated && (
                  <span class="all-entries-updated"><br />updated {formatDate(modified!, cfg.locale)}</span>
                )}
              </span>
              <a href={resolveRelative(fileData.slug!, page.slug!)} class="internal all-entries-title">
                {title}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

AllEntries.css = `
  .all-entries-ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .all-entries-li {
    display: grid;
    grid-template-columns: 8em 1fr;
    align-items: baseline;
    padding: 0.3em 0;
  }
  .all-entries-date {
    opacity: 0.6;
    white-space: nowrap;
  }
  .all-entries-updated {
    font-size: 0.85em;
    opacity: 0.7;
  }
  .all-entries-title {
    font-weight: bold;
    background-color: transparent !important;
    border-bottom: none !important;
  }
`

export default (() => AllEntries) satisfies QuartzComponentConstructor
