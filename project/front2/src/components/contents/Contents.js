import React,{memo} from 'react';
import {Switch,Route} from "react-router-dom";
import routes from "../../router/index"

function RouteWithSubRoutes(route) {
    return (
      <Route
        path={route.path}
        render={props => (
          <route.component {...props} routes={route.routes} />
        )}
      />
    );
  }
  
const Contents = memo(() => {
    return (
        <Switch>
            {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
            ))}
       </Switch>
    );
});

export default Contents;