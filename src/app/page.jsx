"use client";
import Editor from "@/components/Editor";
import {
  toggleBold,
  toggleItalic,
  toggleUnderline,
  toggleSuperscript,
  toggleSubscript,
  toggleMonospace,
  changeBlockType,
  changeFontSize,
  changeFontFamily,
} from "@/utils/editarTexto";
import { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";

export default function Home() {
  const divRef = useRef(null);

  return (
    <main>
      <Container fluid className="py-5 d-flex align-items-center justify-content-center bg-light">
        <Editor />
      </Container>
    </main>
  );
}
