import React from 'react';
import {InstaDriverHome} from "./components/InstadriverHome/InstaDriverHome";
import {NavigationBar} from "./components/InstadriverHome/NavigationBar";
import {FooterBar} from "./components/InstadriverHome/FooterBar";

export const Home = () => {
    return (
        <div>
            <NavigationBar />
            <InstaDriverHome />
            <FooterBar />
        </div>
    )
}
