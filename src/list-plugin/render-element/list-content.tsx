import { ConstrainedRenderElementProps } from "~/src/sink"

import { ListContentElement } from ".."

export function ListContent({
  attributes,
  children,
}: ConstrainedRenderElementProps<ListContentElement>) {
  return (
    <div
      {...attributes}
      style={{ background: "rgba(127,127,255,0.5)" }}
      data-list-content
    >
      {children}
    </div>
  )
}