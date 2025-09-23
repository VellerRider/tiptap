import { createDefaultSlashMenu } from '@tiptap/extension-slash-menu'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

export default () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      // Use a reusable default Slash Menu with override capability
      createDefaultSlashMenu(),
    ],
    content: `
			<p>Type <code>/</code> to open the Slash Menu and try e.g. 
			<strong>Heading 1</strong>, <strong>Bullet List</strong>, or <strong>Code Block</strong>.</p>
			<p></p>
		`,
  })

  return (
    <>
      <EditorContent editor={editor} />
    </>
  )
}
