export const createOrder = (order) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const fakeId = "ORDER-" + Math.floor(Math.random() * 1000000);
      console.log("Orden simulada creada:", { id: fakeId, ...order });
      resolve(fakeId);
    }, 800);
  });
};