import client from "~util/request";

export async function findBlogs({ blogName, limit, offset, badge, authorId }) {
  try {
    const res = await client.getEntries({
      skip: offset,
      limit: limit,
      order: "sys.createdAt",
      content_type: "blog",
      "fields.title[match]": blogName,
      "fields.tags[all]": badge,
      "fields.author.sys.id": authorId,
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

export async function getBlog({ keyword }) {
  try {
    const res = await client.getEntries({
      content_type: "blog",
      "fields.keyword": keyword,
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

export async function getAuthor({ id }) {
  try {
    const res = await client.getEntries({
      content_type: "Author",
      "sys.id": id,
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

export async function getNextBlog({ createdAt }) {
  try {
    const res = await client.getEntries({
      content_type: "blog",
      order: "sys.createdAt",
      "sys.createdAt[gt]": createdAt,
      limit: 1,
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

export async function getPreviousBlog({ createdAt }) {
  try {
    const res = await client.getEntries({
      content_type: "blog",
      order: "sys.createdAt",
      "sys.createdAt[lt]": createdAt,
      limit: 1,
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
