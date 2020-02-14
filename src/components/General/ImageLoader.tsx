import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={475}
    viewBox="0 0 400 475"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="-5" y="25" rx="2" ry="2" width="400" height="400" />
  </ContentLoader>
);

export default MyLoader;
