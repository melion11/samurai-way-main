import React, {useState} from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import state from './Redux/state';

const App = () => {

    const [state, setState] = useState([])


    return (
        <BrowserRouter>
            <div className="app__wrapper">
                <Header/>
                <Navbar/>
                <div className={'app__wrapper_content'}>
                    <Route exact path={'/profile'} render={() => <Profile postsData={postsData}/>}/>
                    <Route exact path={'/dialogs'}
                           render={() => <Dialogs dialogsData={dialogsData} messagesData={messagesData}/>}/>
                    <Route exact path={'/news'} render={() => <News/>}/>
                    <Route exact path={'/music'} render={() => <Music/>}/>
                    <Route exact path={'/settings'} render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
