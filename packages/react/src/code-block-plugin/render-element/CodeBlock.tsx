import { SVGProps, useCallback, useRef } from "react"
import { useSelected } from "slate-react"

import { Menu, MenuItemData } from "../../shared-overlays"
import { ConstrainedRenderElementProps, TablerIcon } from "../../sink"
import { useLayer } from "../../use-layer"
import { $CodeBlock, $CodeBlockLanguage } from "../styles"
import { CodeBlockElement, LanguageList } from "../types"

export function CodeBlock({
  element,
  attributes,
  children,
}: ConstrainedRenderElementProps<CodeBlockElement>) {
  const ref = useRef<HTMLDivElement>(null)
  const selected = useSelected()
  const dropdown = useLayer("code-block-dropdown")
  const onClick = useCallback(() => {
    if (dropdown.layer) dropdown.close()
    const dest = ref.current
    if (dest === null) return
    const items: MenuItemData[] = LanguageList.map((language) => {
      return {
        icon: () => <span />,
        title: language,
        action: (editor) => {
          editor.codeBlock.setCodeBlockLanguage(language, { at: element })
        },
      }
    })
    // Menu
    dropdown.open(() => (
      <Menu dest={dest} items={items} close={dropdown.close} />
    ))
  }, [element])

  return (
    <$CodeBlock className={selected ? "--selected" : ""} {...attributes}>
      <$CodeBlockLanguage contentEditable={false} onClick={onClick} ref={ref}>
        <span>{element.language}</span>
        <ChevronDownIcon />
      </$CodeBlockLanguage>
      <code>{children}</code>
    </$CodeBlock>
  )
}

export const ChevronDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <TablerIcon {...props}>
    <path d="m6 9 6 6 6-6" />
  </TablerIcon>
)
