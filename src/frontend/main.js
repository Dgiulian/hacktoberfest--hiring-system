import React, { Component } from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import JobsPage from './pages/jobs.page';
import LoginPage from './pages/login.page';
import RegisterPage from './pages/register.page';
import ApplyPage from './pages/apply.page';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';
import AdminPanel from './pages/admin.page';

render(
  <Router>
    <Route path="/login" component={LoginPage} exact />
    <Route path="/register" component={RegisterPage} exact />
    <Route path="/jobs" component={JobsPage} exact />
    <Route path="/apply" component={ApplyPage} />
    <Route path="/" component={JobsPage} exact />
    <Route path="/admin" component={AdminPanel} exact />

  </Router>,
  document.getElementById('root-app')
);
