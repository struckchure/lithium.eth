import "@mdxeditor/editor/style.css";

import {
  AdmonitionDirectiveDescriptor,
  codeBlockPlugin,
  codeMirrorPlugin,
  diffSourcePlugin,
  directivesPlugin,
  frontmatterPlugin,
  headingsPlugin,
  imagePlugin,
  KitchenSinkToolbar,
  linkDialogPlugin,
  linkPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  quotePlugin,
  tablePlugin,
  thematicBreakPlugin,
  toolbarPlugin,
} from "@mdxeditor/editor";
import { useState } from "react";

export function CreateArticlePage() {
  const [content, setContent] = useState<string>("");

  return (
    <div>
      <MDXEditor
        markdown={content}
        onChange={setContent}
        contentEditableClassName="prose"
        plugins={[
          toolbarPlugin({ toolbarContents: () => <KitchenSinkToolbar /> }),
          listsPlugin(),
          quotePlugin(),
          headingsPlugin(),
          linkPlugin(),
          linkDialogPlugin(),
          imagePlugin({
            imageUploadHandler: (file) => {
              // TODO: upload file here
              return Promise.resolve("https://picsum.photos/200/300");
            },
          }),
          tablePlugin(),
          thematicBreakPlugin(),
          frontmatterPlugin(),
          codeBlockPlugin({ defaultCodeBlockLanguage: "txt" }),
          codeMirrorPlugin({
            codeBlockLanguages: {
              js: "JavaScript",
              css: "CSS",
              txt: "text",
              tsx: "TypeScript",
            },
          }),
          directivesPlugin({
            directiveDescriptors: [AdmonitionDirectiveDescriptor],
          }),
          diffSourcePlugin({ viewMode: "rich-text", diffMarkdown: "boo" }),
          markdownShortcutPlugin(),
        ]}
      />

      <div className="fixed top-[9.5%] right-[12%]">
        <button className="pill">Publish</button>
      </div>
    </div>
  );
}
