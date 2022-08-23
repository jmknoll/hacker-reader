import axios from "axios";

HN_BASE_URL = "https://hacker-news.firebaseio.com/v0";

export const getTopStories = async (start) => {
  const res = await axios.get(`${HN_BASE_URL}/topstories.json?print=pretty`);
  const pageIds = res.data.slice(0, 50);
  const page = await Promise.all(pageIds.map((id) => getItem(id)));
  return page;
};

export const getItem = async (id) => {
  const res = await axios.get(`${HN_BASE_URL}/item/${id}.json`);
  return res.data;
};
