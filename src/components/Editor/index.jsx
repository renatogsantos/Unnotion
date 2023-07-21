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
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import TextAlign from "@tiptap/extension-text-align";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import Typography from "@tiptap/extension-typography";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import Image from "@tiptap/extension-image";

import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import Gapcursor from "@tiptap/extension-gapcursor";

import { RxFontBold, RxFontItalic, RxStrikethrough } from "react-icons/rx";
import { AiOutlineUnorderedList, AiOutlineOrderedList } from "react-icons/ai";
import { BsBlockquoteLeft } from "react-icons/bs";
import {
  RiInsertColumnRight,
  RiInsertColumnLeft,
  RiDeleteColumn,
  RiDeleteRow,
  RiInsertRowBottom,
  RiInsertRowTop,
  RiMergeCellsHorizontal,
  RiSplitCellsHorizontal,
} from "react-icons/ri";
import {
  TbTable,
  TbTableOff,
  TbFreezeColumn,
  TbFreezeRow,
  TbSquaresFilled,
  TbSquareToggle,
  TbSquareArrowRight,
  TbSquareArrowLeft,
  TbCheckbox,
  TbMinus,
} from "react-icons/tb";
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
  LuSubscript,
  LuSuperscript,
  LuImagePlus,
} from "react-icons/lu";
import { ContentText } from "@/utils/ContentText";
import { useCallback } from "react";

export default function Editor() {
  const editor = useEditor({
    extensions: [
      Image,
      StarterKit,
      Blockquote,
      Document,
      Paragraph,
      Text,
      Typography,
      TextStyle,
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      Subscript,
      Superscript,
      Gapcursor,
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
      HorizontalRule,
      Placeholder.configure({
        includeChildren: true,
        placeholder: 'Pressione "/" para comandos',
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: ContentText,
    autofocus: true,
    editable: true,
    injectCSS: false,
  });

  const addImage = useCallback(() => {
    const url = window.prompt("URL");

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

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
              <div className="divisor"></div>
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
              <div className="divisor"></div>
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
              <div className="divisor"></div>
              <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={editor.isActive("bulletList") ? "is-active" : ""}
              >
                <AiOutlineUnorderedList className="f-24px" />
              </button>
              <button
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={editor.isActive("orderedlist") ? "is-active" : ""}
              >
                <AiOutlineOrderedList className="f-24px" />
              </button>
              <div className="divisor"></div>
              <button
                onClick={() => editor.chain().focus().toggleSubscript().run()}
                className={editor.isActive("subscript") ? "is-active" : ""}
              >
                <LuSubscript className="f-24px" />
              </button>
              <button
                onClick={() => editor.chain().focus().toggleSuperscript().run()}
                className={editor.isActive("superscript") ? "is-active" : ""}
              >
                <LuSuperscript className="f-24px" />
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
              <button
                onClick={() => editor.chain().focus().toggleTaskList().run()}
                className={editor.isActive("taskList") ? "is-active" : ""}
              >
                <TbCheckbox className="f-24px" />
              </button>
              <button
                onClick={() => editor.chain().focus().setHorizontalRule().run()}
              >
                <TbMinus className="f-24px" />
              </button>
              <button onClick={addImage}>
                <LuImagePlus className="f-24px" />
              </button>
            </div>
          )}
        </div>
        <div className="mb-3">
          {editor && (
            <div className="bubbleMenu">
              <button
                onClick={() =>
                  editor
                    .chain()
                    .focus()
                    .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
                    .run()
                }
              >
                <TbTable className="f-24px" />
              </button>
              <button
                onClick={() => editor.chain().focus().deleteTable().run()}
              >
                <TbTableOff className="f-24px" />
              </button>
              <button
                onClick={() => editor.chain().focus().addColumnBefore().run()}
              >
                <RiInsertColumnLeft className="f-24px" />
              </button>
              <button
                onClick={() => editor.chain().focus().addColumnAfter().run()}
              >
                <RiInsertColumnRight className="f-24px" />
              </button>
              <button
                onClick={() => editor.chain().focus().deleteColumn().run()}
              >
                <RiDeleteColumn className="f-24px" />
              </button>
              <button
                onClick={() => editor.chain().focus().addRowBefore().run()}
              >
                <RiInsertRowTop className="f-24px" />
              </button>
              <button
                onClick={() => editor.chain().focus().addRowAfter().run()}
              >
                <RiInsertRowBottom className="f-24px" />
              </button>
              <button onClick={() => editor.chain().focus().deleteRow().run()}>
                <RiDeleteRow className="f-24px" />
              </button>
              <button onClick={() => editor.chain().focus().mergeCells().run()}>
                <RiMergeCellsHorizontal className="f-24px" />
              </button>
              <button onClick={() => editor.chain().focus().splitCell().run()}>
                <RiSplitCellsHorizontal className="f-24px" />
              </button>
              <button
                onClick={() =>
                  editor.chain().focus().toggleHeaderColumn().run()
                }
              >
                <TbFreezeColumn className="f-24px" />
              </button>
              <button
                onClick={() => editor.chain().focus().toggleHeaderRow().run()}
              >
                <TbFreezeRow className="f-24px" />
              </button>
              <button
                onClick={() => editor.chain().focus().toggleHeaderCell().run()}
              >
                <TbSquaresFilled className="f-24px" />
              </button>
              <button
                onClick={() => editor.chain().focus().mergeOrSplit().run()}
              >
                <TbSquareToggle className="f-24px" />
              </button>
              <button
                onClick={() => editor.chain().focus().goToPreviousCell().run()}
              >
                <TbSquareArrowLeft className="f-24px" />
              </button>
              <button
                onClick={() => editor.chain().focus().goToNextCell().run()}
              >
                <TbSquareArrowRight className="f-24px" />
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
            onClick={() => editor.chain().focus().toggleSubscript().run()}
            className={editor.isActive("subscript") ? "is-active" : ""}
          >
            <LuSubscript className="f-24px" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleSuperscript().run()}
            className={editor.isActive("superscript") ? "is-active" : ""}
          >
            <LuSuperscript className="f-24px" />
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
          <button
            onClick={() => editor.chain().focus().toggleTaskList().run()}
            className={editor.isActive("taskList") ? "is-active" : ""}
          >
            <TbCheckbox className="f-24px" />
          </button>
          <button
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
          >
            <TbMinus className="f-24px" />
          </button>
        </BubbleMenu>
      )}
    </>
  );
}
