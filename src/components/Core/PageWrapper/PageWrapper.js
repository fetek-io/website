import React from "react";
import GlobalHeaderContext, {
  headerDefault,
} from "../../../context/GlobalHeaderContext";
import Link from "../Link";
import HeaderButton from "../Header/InnerPageHeader";

const PageWrapper = ({
  children,
  headerConfig = null,
  innerPage = false,
  innerPageFooter = false,
}) => {
  const innerPageDefault = {
    // headerClasses:
    //   "light-header site-header--menu-end site-header--button-sep position-relative",
    headerClasses:
      "site-header site-header--menu-start light-header site-header--with-border site-header--sticky",
    containerFluid: false,
    darkLogo: true,
    buttonBlock: (
      <HeaderButton
        as={Link}
        btnText={`Contact us`}
        btnDefault={true}
        btnLink={`/contact`}
      />
    ),
  };
  const activeHeader = innerPage ? innerPageDefault : headerDefault;
  const sitectx = React.useContext(GlobalHeaderContext);

  React.useEffect(() => {
    sitectx.changeHeader({ ...activeHeader, ...headerConfig });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {/* <Nav /> */}
      {children}
    </>
  );
};

export default PageWrapper;
