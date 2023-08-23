export const API_URL = "http://127.0.0.1:5000";
export async function getLanguages() {
  const response = await fetch(`${API_URL}/api/languages`);
  return response.json();
}
export async function get() {
  const response = await fetch(`${API_URL}/api/languages`);
  return response.json();
}
