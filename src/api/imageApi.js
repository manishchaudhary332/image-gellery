const ACCESS_KEY = "Qyc1brMVbxaJ6xCspLfclbkjLnD4nFqs8WdZ2YBb0Bs"; // Baad me replace karenge
const URL = `https://api.unsplash.com/photos/random?count=15&client_id=${ACCESS_KEY}`;

export const fetchImages = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
};
