import { useRef } from 'react';

export function useDoubleTap(callback: () => void, delay = 300) {
	const lastTap = useRef<number>(0);

	return () => {
		const now = Date.now();
		if (now - lastTap.current < delay) {
			callback();
		}
		lastTap.current = now;
	};
}