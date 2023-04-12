import { ImageBlockElement } from "wysimark/src/image-plugin/types"

import { serializeImageShared } from "../serialize-image-shared"

export function serializeImageBlock(element: ImageBlockElement): string {
  return serializeImageShared(element)
}
