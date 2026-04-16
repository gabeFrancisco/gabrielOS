import { DndContext, type DragEndEvent } from "@dnd-kit/core";
// import MenuBar from "../MainToolbar/MenuBar";
import Icon from "./Icon";
import DroppableZone from "../Droppable/DroppableZone";
import { useEffect, useState } from "react";
import { restrictToWindowEdges } from '@dnd-kit/modifiers';
import useSystemStore from "../../hooks/useSystemStore";

// interface Props {
//   menu: boolean
// }

function Desktop() {
  const store = useSystemStore();
  function handleIconDoubleClick(id: string) {
    store.setOpen(id, true);
  }

  // 1. O estado é apenas um objeto: { 'id-da-janela': { x, y } }
  const [positions, setPositions] = useState([
    { id: 'programs', x: 50, y: 50 },
    { id: "resume", x: 50, y: 60 },
    { id: "files", x: 150, y: 100 },
    { id: "web", x: 150, y: 100 },
    { id: "terminal", x: 150, y: 100 },
    { id: "invaders", x: 150, y: 100 },
    { id: "about", x: 50, y: 100 }
  ]);

  function handleDragEnd(event: DragEndEvent) {
    const { active, delta } = event;
    const id = active.id as keyof typeof positions;

    // Atualizamos a posição somando o "delta" (o quanto você moveu)
    setPositions((prev) =>
      prev.map((pos) => {
        if (pos.id === id) {
          return {
            ...pos,
            x: pos.x + delta.x,
            y: pos.y + delta.y,
          };
        }
        return pos;
      })
    );
  }
  return (

    <DndContext autoScroll={false} onDragEnd={handleDragEnd} modifiers={[restrictToWindowEdges]}>
      <div className="flex-1 min-h-0 overflow-hidden w-full">
        <DroppableZone>

          <div className="p-3">
            {store.programs.map((el, key) => (
              <Icon doubleClick={() => handleIconDoubleClick(el.id)} icon={el.icon} label={el.title} key={key} />
            ))}

          </div>
          {/* <>

<Window id="program" title="Some program" position={positions.program}>Some program is running!</Window>
<AboutProgram position={positions.about} />
          </> */}

          {store.programs.filter(i => i.isOpen).map((item, key) => {
            const Component = item.component;
            const currentPos = positions.find((p) => p.id === item.id) || { x: 0, y: 0 };
            return (
              <Component key={key} id={item.id} position={currentPos} />
            )
          })}
        </DroppableZone>
      </div>
    </DndContext>);

}

export default Desktop;