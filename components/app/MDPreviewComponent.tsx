import ReactMarkdown from "react-markdown"
import { pathColorMapping } from "@/constans"
import Link from "next/link"

interface ProjectData {
  title: string
  description?: string
  id: string
  content: string
  tags: string[]
  slug: string
}

interface MDPreviewProps {
  project: ProjectData
}

export const CustomLink = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => {
  return (
    <Link
      target="_blank"
      href={href}
      className="text-blue-400 hover:underline "
    >
      {children}
    </Link>
  )
}

export default function MDPreviewComponent({ project }: MDPreviewProps) {
  const { title, description, id, content, tags, slug } = project

  const idParts = slug.split("/")
  const extractedPath = idParts[idParts.length - 1].replace(".md", "")
  const titleColor = pathColorMapping[extractedPath] || "text-[var(--text)]"

  return (
    <>
      <h1 className={`mb-2 text-4xl font-bold ${titleColor}`}>{title}</h1>
      <div className="markdown-content text-text mt-2">
        <ReactMarkdown
          components={{
            a: ({ href, children }) => (
              <CustomLink href={href || ""}>{children}</CustomLink>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </>
  )
}
