export function getPage(total, limit) {
  if (total < limit) {
    return 1;
  } else {
    return (total % 10) + 1;
  }
}
