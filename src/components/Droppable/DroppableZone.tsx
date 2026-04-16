import { useDroppable } from '@dnd-kit/core';

function DroppableZone({ children }: { children: React.ReactNode }) {
  const { setNodeRef } = useDroppable({
    id: 'window',
  });

  return (
    <div ref={setNodeRef}>
      <div className="relative flex flex-col items-start w-full h-full">
        {children}
      </div>
    </div>
  );
}

export default DroppableZone;