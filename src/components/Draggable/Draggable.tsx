import { useDraggable } from "@dnd-kit/core";
import { CSS } from '@dnd-kit/utilities';

function Draggable({ children, id }: { children: React.ReactNode, id: string }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });
  const style = {
    transform: CSS.Translate.toString(transform),
    touchAction: 'none'
  };

  return (<div ref={setNodeRef} className="w-3/4" style={style} {...listeners} {...attributes}>
    {children}
  </div>);
}

export default Draggable;