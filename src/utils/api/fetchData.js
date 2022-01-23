const API = "https://www.reddit.com/";

export const fetchData = async (endPoint) => {
  try {
    const response = await fetch(`${API}${endPoint}.json`);

    if (!response.ok) {
      throw Error("Request failed");
    }

    const json = await response.json();

    if (endPoint.includes("comments")) {
      return json[1].data.children.map((data) => data.data);
    } else {
      return json.data.children.map((data) => data.data);
    }
  } catch (error) {
    return error;
  }
};
