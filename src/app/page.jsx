"use client";
import Comands from "@/components/Comands";
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
import { Col, Container, Row } from "react-bootstrap";
import { RiAppleFill, RiWindowsFill } from "react-icons/ri";
import { TbKeyboard } from "react-icons/tb";

export default function Home() {
  const divRef = useRef(null);

  return (
    <main>
      <div className="hero">
        <div className="hero-1 p-4">
          <div className="d-flex align-items-center justify-content-between">
            <span className="fw-bold f-18px">Comandos do teclado</span>
            <span className="fw-bold f-24px"><TbKeyboard /></span>
          </div>
          <hr />
          <Row className="align-items-center">
            <Col xs="5">
              <span className="f-12px">Comando</span>
            </Col>
            <Col xs className="text-center">
              <span>
                <RiWindowsFill />
              </span>
            </Col>
            <Col xs className="text-center">
              <span>
                <RiAppleFill />
              </span>
            </Col>
          </Row>
          <hr />
          <Comands
            comand="Título nível1"
            windows="Ctrl Alt 1"
            mac="Cmd Alt 1"
          />
          <Comands
            comand="Título nível2"
            windows="Ctrl Alt 2"
            mac="Cmd Alt 2"
          />
          <Comands
            comand="Título nível3"
            windows="Ctrl Alt 3"
            mac="Cmd Alt 3"
          />
          <Comands
            comand="Título nível4"
            windows="Ctrl Alt 4"
            mac="Cmd Alt 4"
          />
          <Comands
            comand="Título nível5"
            windows="Ctrl Alt 5"
            mac="Cmd Alt 5"
          />
          <Comands
            comand="Título nível6"
            windows="Ctrl Alt 6"
            mac="Cmd Alt 6"
          />
          <hr />
          <Comands
            comand="Alinhar à esquerda"
            windows="Ctrl Shift L"
            mac="Cmd Shift L"
          />
          <Comands
            comand="Alinhar ao centro"
            windows="Ctrl Shift E"
            mac="Cmd Shift E"
          />
          <Comands
            comand="Alinhar à direita"
            windows="Ctrl Shift R"
            mac="Cmd Shift R"
          />
          <Comands
            comand="Justificar texto "
            windows="Ctrl Shift J"
            mac="Cmd Shift J"
          />
          <hr />
          <Comands
            comand="Lista com marcador"
            windows="Ctrl Shift 8"
            mac="Cmd Shift 8"
          />
          <Comands
            comand="Lista numerada"
            windows="Ctrl Shift 7"
            mac="Cmd Shift 7"
          />
          <hr />
          <Comands comand="Subscrito" windows="Ctrl ," mac="Cmd ," />
          <Comands comand="Sobrescrito" windows="Ctrl ," mac="Cmd ," />
          <hr />
          <Comands comand="Negrito" windows="Ctrl B" mac="Cmd B" />
          <Comands comand="Italico" windows="Ctrl I" mac="Cmd I" />
          <Comands comand="Traçado" windows="Ctrl Shift X" mac="Cmd Shift X" />
          <Comands comand="Sublinhado" windows="Ctrl U" mac="Cmd U" />
          <hr />
          <Comands comand="Citação" windows="Ctrl Shift B" mac="Cmd Shift B" />
        </div>
        <div className="hero-2">
          <Container
            fluid
            className="py-5 d-flex align-items-center justify-content-center"
          >
            <Editor />
          </Container>
        </div>
      </div>
    </main>
  );
}
