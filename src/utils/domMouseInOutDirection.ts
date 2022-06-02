export const getDirection = (
  offsetX: number,
  offsetY: number,
  boundingClientRect: { width: number; height: number },
) => {
  if (!boundingClientRect) {
    return 0;
  }
  const { width, height } = boundingClientRect;
  const centerP = { x: width / 2, y: height / 2 };
  const currentP = { x: offsetX - centerP.x, y: centerP.y - offsetY };
  const res = Math.atan2(currentP.y, currentP.x) / (Math.PI / 180) + 180;
  const direction1 = Math.atan2(height / 2, -width / 2) / (Math.PI / 180) + 180;
  const direction2 = Math.atan2(height / 2, width / 2) / (Math.PI / 180) + 180;
  const direction3 = Math.atan2(-height / 2, width / 2) / (Math.PI / 180) + 180;
  const direction4 = Math.atan2(-height / 2, -width / 2) / (Math.PI / 180) + 180;
  let direction: number = 0;
  if (res < direction1 && res >= direction2) {
    direction = 1;
  } else if (res < direction2 && res >= direction3) {
    direction = 2;
  } else if (res < direction3 && res >= direction4) {
    direction = 3;
  } else if (res < direction4 || res >= direction1) {
    direction = 4;
  }

  return direction;
};
