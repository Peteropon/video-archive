import content from "../content.json";

export function getBandData(path) {
  const bandInfo = content.find((b) => b.path == path.band);
  console.log(path);
  return { path, ...bandInfo };
}

export function getPaths() {
  return content.map((band) => {
    return {
      params: {
        band: band.path,
      },
    };
  });
}
