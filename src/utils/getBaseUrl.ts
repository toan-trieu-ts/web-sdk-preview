function getBaseUrl(url?: string) {
  if (!url) return `${import.meta.env.BASE_URL}/`;
  return `${import.meta.env.BASE_URL}/${url}`;
}

export default getBaseUrl;
