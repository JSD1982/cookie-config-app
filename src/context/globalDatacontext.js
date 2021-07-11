import React from 'react';
import { useCookies } from 'react-cookie';
export const globalDatacontext = React.createContext();

const GlobalDatacontextTag = ({ children }) => {
  const [dataInfo, setDataInfo] = React.useState({
    iebs_consent: window.iebs_consent,
  });
  const [open, setOpen] = React.useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['data_iebs']);
  const [bottomDrawer, setBottomDrawer] = React.useState(false);

  const [state, setState] = React.useState({
    fun: true ? 1 : 0,
    ana: true ? 1 : 0,
    mar: false ? 1 : 0,
  });
  return (
    <globalDatacontext.Provider
      value={{
        dataInfo,
        open,
        setOpen,
        cookies,
        setCookie,
        bottomDrawer,
        setBottomDrawer,
        state,
        setState,
      }}
    >
      {children}
    </globalDatacontext.Provider>
  );
};

export default GlobalDatacontextTag;
