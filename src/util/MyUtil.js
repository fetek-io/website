export function getPage(total) {
  if (total < 10) {
    return 1;
  } else {
    return (total % 10) + 1;
  }
}
