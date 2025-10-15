import { useDraggable } from "@dnd-kit/core";
import { CSS } from '@dnd-kit/utilities';

function Draggable({children} : {children: React.ReactNode}) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: 'unique-id',
  });
  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (<div>
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      { children}
    </button>
  </div>);
}

export default Draggable;