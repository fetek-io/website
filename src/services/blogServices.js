import client from "~util/request";

export async function findBlogs() {
  try {
    const res = await client.getEntries({
      skip: 0,
      limit: 10,
      order: "sys.createdAt",
      content_type: "blog",
    });
    return {
      success: true,
      data: res,
    };
  } catch (e) {
    return {
      success: false,
      data: e,
    };
  }
}
