import OnePage from "../OnePage/OnePage";
import prideStyles from "./OnePagePride.module.css";

const OnePagePride = ({ resume }) => {
  return <OnePage resume={resume} styles={prideStyles} />;
};

export default OnePagePride;
