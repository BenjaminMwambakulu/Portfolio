
export const importImage = (imageName) => {
  try {
    return new URL(`../assets/icons/${imageName}`, import.meta.url).href;
  } catch (error) {
    console.warn(`Image ${imageName} not found, using placeholder`);
    return 'https://placehold.co/100';
  }
};