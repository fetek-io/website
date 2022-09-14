import client from "~util/request";

export async function findProjects({ projectName, limit, offset, category }) {
  try {
    const allCategoryData = await getCategories();
    const categories = allCategoryData?.data?.items;
    const categoryId =
      category !== "all" &&
      categories.find((item) => item?.fields?.name === category)?.sys?.id;
    const res = await client.getEntries({
      skip: offset,
      limit: limit,
      order: "sys.createdAt",
      content_type: "project",
      "fields.name[match]": projectName,
      "fields.category.sys.id[all]": categoryId ? categoryId : undefined,
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

export async function getProject({ keyword }) {
  try {
    const res = await client.getEntries({
      content_type: "project",
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

export async function getCategories() {
  try {
    const res = await client.getEntries({
      content_type: "category",
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

export async function getNextProject({ createdAt }) {
  try {
    const res = await client.getEntries({
      content_type: "project",
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

export async function getPreviousProject({ createdAt }) {
  try {
    const res = await client.getEntries({
      content_type: "project",
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
