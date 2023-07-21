import {
  useEditor,
  EditorContent,
  BubbleMenu,
  FloatingMenu,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Blockquote from "@tiptap/extension-blockquote";
import Placeholder from "@tiptap/extension-placeholder";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import TextStyle from "@tiptap/extension-text-style";
import TextAlign from "@tiptap/extension-text-align";
import { RxFontBold, RxFontItalic, RxStrikethrough } from "react-icons/rx";
import { AiOutlineUnorderedList, AiOutlineOrderedList } from "react-icons/ai";
import { BsBlockquoteLeft } from "react-icons/bs";
import {
  LuHeading6,
  LuHeading5,
  LuHeading4,
  LuHeading3,
  LuHeading2,
  LuHeading1,
  LuUndo2,
  LuRedo2,
  LuAlignCenter,
  LuAlignJustify,
  LuAlignLeft,
  LuAlignRight,
} from "react-icons/lu";

export default function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Blockquote,
      Document,
      Paragraph,
      Text,
      TextStyle,
      Placeholder.configure({
        includeChildren: true,
        placeholder: 'Pressione "/" para comandos',
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: `
      <h1>Where does it come from?</h1>
      <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>

      <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
    `,
  });

  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <div className="mb-3">
          {editor && (
            <div className="bubbleMenu">
              <button
                onClick={() => editor.chain().focus().undo().run()}
                disabled={!editor.can().undo()}
              >
                <LuUndo2 className="f-24px" />
              </button>
              <button
                onClick={() => editor.chain().focus().redo().run()}
                disabled={!editor.can().redo()}
              >
                <LuRedo2 className="f-24px" />
              </button>
              <button
                onClick={() =>
                  editor.chain().focus().toggleHeading({ level: 1 }).run()
                }
                className={
                  editor.isActive("heading", { level: 1 }) ? "is-active" : ""
                }
              >
                <LuHeading1 className="f-24px" />
              </button>
              <button
                onClick={() =>
                  editor.chain().focus().toggleHeading({ level: 2 }).run()
                }
                className={
                  editor.isActive("heading", { level: 2 }) ? "is-active" : ""
                }
              >
                <LuHeading2 className="f-24px" />
              </button>
              <button
                onClick={() =>
                  editor.chain().focus().toggleHeading({ level: 3 }).run()
                }
                className={
                  editor.isActive("heading", { level: 3 }) ? "is-active" : ""
                }
              >
                <LuHeading3 className="f-24px" />
              </button>
              <button
                onClick={() =>
                  editor.chain().focus().toggleHeading({ level: 4 }).run()
                }
                className={
                  editor.isActive("heading", { level: 4 }) ? "is-active" : ""
                }
              >
                <LuHeading4 className="f-24px" />
              </button>
              <button
                onClick={() =>
                  editor.chain().focus().toggleHeading({ level: 5 }).run()
                }
                className={
                  editor.isActive("heading", { level: 5 }) ? "is-active" : ""
                }
              >
                <LuHeading5 className="f-24px" />
              </button>
              <button
                onClick={() =>
                  editor.chain().focus().toggleHeading({ level: 6 }).run()
                }
                className={
                  editor.isActive("heading", { level: 6 }) ? "is-active" : ""
                }
              >
                <LuHeading6 className="f-24px" />
              </button>
              <button
                onClick={() =>
                  editor.chain().focus().setTextAlign("left").run()
                }
                className={
                  editor.isActive({ textAlign: "left" }) ? "is-active" : ""
                }
              >
                <LuAlignLeft className="f-24px" />
              </button>
              <button
                onClick={() =>
                  editor.chain().focus().setTextAlign("center").run()
                }
                className={
                  editor.isActive({ textAlign: "center" }) ? "is-active" : ""
                }
              >
                <LuAlignCenter className="f-24px" />
              </button>
              <button
                onClick={() =>
                  editor.chain().focus().setTextAlign("right").run()
                }
                className={
                  editor.isActive({ textAlign: "right" }) ? "is-active" : ""
                }
              >
                <LuAlignRight className="f-24px" />
              </button>
              <button
                onClick={() =>
                  editor.chain().focus().setTextAlign("justify").run()
                }
                className={
                  editor.isActive({ textAlign: "justify" }) ? "is-active" : ""
                }
              >
                <LuAlignJustify className="f-24px" />
              </button>
              <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={editor.isActive("bold") ? "is-active" : ""}
              >
                <RxFontBold className="f-24px" />
              </button>
              <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className={editor.isActive("italic") ? "is-active" : ""}
              >
                <RxFontItalic className="f-24px" />
              </button>
              <button
                onClick={() => editor.chain().focus().toggleStrike().run()}
                className={editor.isActive("strike") ? "is-active" : ""}
              >
                <RxStrikethrough className="f-24px" />
              </button>
              <button
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={editor.isActive("blockquote") ? "is-active" : ""}
              >
                <BsBlockquoteLeft className="f-24px" />
              </button>
            </div>
          )}
        </div>
        <EditorContent style={{ background: "#fff" }} editor={editor} />
      </div>
      {editor && (
        <FloatingMenu
          className="floatingMenu"
          editor={editor}
          tippyOptions={{ duration: 200 }}
          shouldShow={({ state }) => {
            const { $from } = state.selection;
            const currentLineText = $from.nodeBefore?.textContent;
            return currentLineText === "/";
          }}
        >
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className={
              editor.isActive("heading", { level: 1 }) ? "is-active" : ""
            }
          >
            <span className="pe-2">
              <LuHeading1 className="f-32px" />
            </span>
            <div className="d-flex flex-column text-start border-start ps-2">
              <span className="f-12px">Título 1</span>
              <span className="f-10px">Título de seção grande.</span>
            </div>
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            className={
              editor.isActive("heading", { level: 2 }) ? "is-active" : ""
            }
          >
            <span className="pe-2">
              <LuHeading2 className="f-32px" />
            </span>
            <div className="d-flex flex-column text-start border-start ps-2">
              <span className="f-12px">Título 2</span>
              <span className="f-10px">Título de seção médio.</span>
            </div>
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
            className={
              editor.isActive("heading", { level: 3 }) ? "is-active" : ""
            }
          >
            <span className="pe-2">
              <LuHeading3 className="f-32px" />
            </span>
            <div className="d-flex flex-column text-start border-start ps-2">
              <span className="f-12px">Título 3</span>
              <span className="f-10px">Título de seção pequeno.</span>
            </div>
          </button>

          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive("bulletList") ? "is-active" : ""}
          >
            <span className="pe-2">
              <AiOutlineUnorderedList className="f-32px" />
            </span>
            <div className="d-flex flex-column text-start border-start ps-2">
              <span className="f-12px">Lista com marcadores</span>
              <span className="f-10px">
                Criar uma lista com marcadores simples.
              </span>
            </div>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={editor.isActive("orderedlist") ? "is-active" : ""}
          >
            <span className="pe-2">
              <AiOutlineOrderedList className="f-32px" />
            </span>
            <div className="d-flex flex-column text-start border-start ps-2">
              <span className="f-12px">Lista numerada</span>
              <span className="f-10px">Criar uma lista com numeração</span>
            </div>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={editor.isActive("blockquote") ? "is-active" : ""}
          >
            <span className="pe-2">
              <BsBlockquoteLeft className="f-32px" />
            </span>
            <div className="d-flex flex-column text-start border-start ps-2">
              <span className="f-12px">Citação</span>
              <span className="f-10px">Crie uma citação</span>
            </div>
          </button>
        </FloatingMenu>
      )}

      {editor && (
        <BubbleMenu
          className="bubbleMenu"
          editor={editor}
          tippyOptions={{ duration: 100 }}
        >
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className={
              editor.isActive("heading", { level: 1 }) ? "is-active" : ""
            }
          >
            <LuHeading1 className="f-24px" />
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            className={
              editor.isActive("heading", { level: 2 }) ? "is-active" : ""
            }
          >
            <LuHeading2 className="f-24px" />
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
            className={
              editor.isActive("heading", { level: 3 }) ? "is-active" : ""
            }
          >
            <LuHeading3 className="f-24px" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive("bold") ? "is-active" : ""}
          >
            <RxFontBold className="f-24px" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive("italic") ? "is-active" : ""}
          >
            <RxFontItalic className="f-24px" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={editor.isActive("strike") ? "is-active" : ""}
          >
            <RxStrikethrough className="f-24px" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={editor.isActive("blockquote") ? "is-active" : ""}
          >
            <BsBlockquoteLeft className="f-24px" />
          </button>
        </BubbleMenu>
      )}
    </>
  );
}
