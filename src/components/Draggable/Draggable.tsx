import { useDraggable } from "@dnd-kit/core";
import { CSS } from '@dnd-kit/utilities';

function Draggable({ children }: { children: React.ReactNode }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: 'window',
  });
  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (<div ref={setNodeRef} className="w-3/4" style={style} {...listeners} {...attributes}>
    {children}
  </div>);
}

export default Draggable;