import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import Home from './containers/home'
import Detail from './pages/detail'
import Test1 from './pages/normal'
import RenderProps from './pages/renderProps'
import Hoc from './pages/hoc'
import Three from './pages/three'

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/detail" component={Detail}/>
            <Route exact path="/normal" component={Test1}/>
            <Route exact path="/renderProps" component={RenderProps}/>
            <Route exact path="/hoc" component={Hoc}/>
            <Route exact path="/three" component={Three}/>
        </Switch>
    </HashRouter>
)


export default BasicRoute