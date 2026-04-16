import { useDraggable } from "@dnd-kit/core";
import { CSS } from '@dnd-kit/utilities';

interface WindowProps {
  id: string;
  title: string;
  children: React.ReactNode;
  position: { x: number; y: number };
  onClose: () => void,
}

function Window({ id, title, children, position, onClose }: WindowProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });

  const style: React.CSSProperties = {
    position: 'absolute',
    left: position.x,
    top: position.y,
    transform: CSS.Translate.toString(transform),
    backgroundColor: '#c0c0c0',
    border: '2px solid white #808080 #808080 white',
    boxShadow: '1px 1px 0 0 #333',
    zIndex: transform ? 1000 : 1,

    // ✅ Define um tamanho máximo para a janela não vazar
    maxWidth: '600px',
    maxHeight: '90vh',
    display: 'flex',
    flexDirection: 'column',
  };
  return (
    <div ref={setNodeRef} style={style}>
      <div
        {...listeners}
        {...attributes}
        className="flex flex-col"
        style={{
          border: '2px outset #ccc',
          color: 'white',
          padding: '1px 1px',
          cursor: 'default',
          display: 'flex',
          justifyContent: 'space-between',
          fontWeight: 'bold',
          userSelect: 'none'
        }}
      >

        <div className="border-gray-200 h-full w-full flex flex-row justify-between font-bold bg-blue-900 text-white pl-1 pr-0.5 text-sm py-0.5">
          {title}
          <div className="flex flex-row">
            <div style={{ border: 'outset 1px' }} className="bg-gray-200 text-black hover:bg-gray-400 px-1 cursor-poi nter">
              _
            </div>
            <div style={{ border: 'outset 1px' }} className="bg-gray-200 text-black hover:bg-gray-400 px-1 ml-0.5 cursor-pointer font-bold">
              ◻
            </div>
            <div style={{ border: 'outset 1px' }} onPointerDown={(e) => e.stopPropagation()} onClick={onClose} className="bg-gray-200 text-black hover:bg-gray-400 px-1 ml-0.5 cursor-pointer">
              X
            </div>
          </div>
        </div>
        <div className="flex-1 min-h-0 overflow-y-auto bg-gray-300 text-gray-800 p-1">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Window;