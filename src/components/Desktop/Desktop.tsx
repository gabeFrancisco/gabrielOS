import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import { desktopData } from "../../utils/desktopData";
import Window from "../Windows/Window";
// import MenuBar from "../MainToolbar/MenuBar";
import Icon from "./Icon";
import DroppableZone from "../Droppable/DroppableZone";
import { useState } from "react";
import { restrictToWindowEdges } from '@dnd-kit/modifiers';

// interface Props {
//   menu: boolean
// }

function Desktop() {
  // 1. O estado é apenas um objeto: { 'id-da-janela': { x, y } }
  const [positions, setPositions] = useState({
    program: { x: 50, y: 50 },
    explorer: { x: 150, y: 100 },
  });

  function handleDragEnd(event: DragEndEvent) {
    const { active, delta } = event;
    const id = active.id as keyof typeof positions;

    // Atualizamos a posição somando o "delta" (o quanto você moveu)
    setPositions((prev) => ({
      ...prev,
      [id]: {
        x: prev[id].x + delta.x,
        y: prev[id].y + delta.y,
      },
    }));
  }
  return (
    <DndContext autoScroll={false} onDragEnd={handleDragEnd} modifiers={[restrictToWindowEdges]}>
      <DroppableZone>

        <div className="p-3">
          {desktopData.map((el, key) => (
            <Icon icon={el.icon} label={el.label} key={key} />
          ))}

        </div>
        {/* {props.menu && <MenuBar />} */}
        <Window id="program" title="Some program" position={positions.program}>Some program is running!</Window>
        {/* <Window id="explorer" title="Explorer" position={positions.explorer}>Explorer de arquivos</Window> */}
      </DroppableZone>
    </DndContext>);
}

export default Desktop;