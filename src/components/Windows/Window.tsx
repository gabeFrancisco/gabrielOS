import { useDraggable } from "@dnd-kit/core";
import { CSS } from '@dnd-kit/utilities';

interface WindowProps {
  id: string;
  title: string;
  children: React.ReactNode;
  position: { x: number; y: number };
}

function Window({ id, title, children, position }: WindowProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });

  const style: React.CSSProperties = {
    position: 'absolute',
    left: position.x,
    top: position.y,
    // O transform do dnd-kit soma o movimento temporário enquanto você arrasta
    transform: CSS.Translate.toString(transform),

    // Estilos visuais do Win95
    width: '300px',
    backgroundColor: '#c0c0c0',
    border: '2px solid white #808080 #808080 white',
    boxShadow: '1px 1px 0 0 black',
    zIndex: transform ? 1000 : 1, // Traz a janela para frente ao arrastar
  };
  return (
    <div ref={setNodeRef} style={style}>
      <div
        className="flex flex-col"
        {...listeners}
        {...attributes}
        style={{
          color: 'white',
          padding: '1px 1px',
          cursor: 'default',
          display: 'flex',
          justifyContent: 'space-between',
          fontWeight: 'bold',
          userSelect: 'none'
        }}
      >

        <div className="border-gray-200 flex flex-row justify-between font-bold bg-blue-900 text-white w-full pl-1 pr-0.5 text-sm py-0.5">
          {title}
          <div className="flex flex-row">
            <div style={{ border: 'outset 1px' }} className="bg-gray-200 text-black px-1 cursor-pointer">
              _
            </div>
            <div style={{ border: 'outset 1px' }} className="bg-gray-200 text-black px-1 ml-0.5 cursor-pointer font-bold">
              ◻
            </div>
            <div style={{ border: 'outset 1px' }} className="bg-gray-200 text-black px-1 ml-0.5 cursor-pointer">
              X
            </div>
          </div>
        </div>
        <div className="h-full grow bg-gray-300 text-gray-800 p-12">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Window;