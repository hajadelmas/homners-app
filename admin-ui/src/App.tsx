import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { MonBienList } from "./monBien/MonBienList";
import { MonBienCreate } from "./monBien/MonBienCreate";
import { MonBienEdit } from "./monBien/MonBienEdit";
import { MonBienShow } from "./monBien/MonBienShow";
import { ContreRenduVisiteList } from "./contreRenduVisite/ContreRenduVisiteList";
import { ContreRenduVisiteCreate } from "./contreRenduVisite/ContreRenduVisiteCreate";
import { ContreRenduVisiteEdit } from "./contreRenduVisite/ContreRenduVisiteEdit";
import { ContreRenduVisiteShow } from "./contreRenduVisite/ContreRenduVisiteShow";
import { ActionsAgentList } from "./actionsAgent/ActionsAgentList";
import { ActionsAgentCreate } from "./actionsAgent/ActionsAgentCreate";
import { ActionsAgentEdit } from "./actionsAgent/ActionsAgentEdit";
import { ActionsAgentShow } from "./actionsAgent/ActionsAgentShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"My app"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="MonBien"
          list={MonBienList}
          edit={MonBienEdit}
          create={MonBienCreate}
          show={MonBienShow}
        />
        <Resource
          name="ContreRenduVisite"
          list={ContreRenduVisiteList}
          edit={ContreRenduVisiteEdit}
          create={ContreRenduVisiteCreate}
          show={ContreRenduVisiteShow}
        />
        <Resource
          name="ActionsAgent"
          list={ActionsAgentList}
          edit={ActionsAgentEdit}
          create={ActionsAgentCreate}
          show={ActionsAgentShow}
        />
      </Admin>
    </div>
  );
};

export default App;
