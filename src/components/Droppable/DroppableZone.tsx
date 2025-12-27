import { useDroppable } from '@dnd-kit/core';

function DroppableZone({ children }: { children: React.ReactNode }) {
  const { isOver, setNodeRef } = useDroppable({
    id: 'window',
  });

  return (
    <div ref={setNodeRef}>
      <div className="flex text-white flex-col flex-wrap w-full items-start">
        {isOver ? 'Pode soltar!' : 'Arraste algo para cá'}
        {children}
      </div>
    </div>
  );
}

export default DroppableZone;