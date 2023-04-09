import getConfig from 'next/config';
import Head from 'next/head';
import React, { useState } from 'react';

export const LayoutContext = React.createContext();

export const LayoutProvider = (props) => {
    const contextPath = getConfig().publicRuntimeConfig.contextPath;
    const [breadcrumbs, setBreadcrumbs] = useState([]);
    const [layoutConfig, setLayoutConfig] = useState({
        ripple: false,
        inputStyle: 'outlined',
        menuMode: 'static',
        menuTheme: 'colorScheme',
        colorScheme: 'dark',
        theme: 'pink',
        scale: 14
    });

    const [layoutState, setLayoutState] = useState({
        staticMenuDesktopInactive: false,
        overlayMenuActive: false,
        overlaySubmenuActive: false,
        profileSidebarVisible: false,
        configSidebarVisible: false,
        staticMenuMobileActive: false,
        menuHoverActive: false,
        resetMenu: false
    });

    const onMenuToggle = () => {
        if (isOverlay()) {
            setLayoutState((prevLayoutState) => ({ ...prevLayoutState, overlayMenuActive: !prevLayoutState.overlayMenuActive }));
        }

        if (isDesktop()) {
            setLayoutState((prevLayoutState) => ({ ...prevLayoutState, staticMenuDesktopInactive: !prevLayoutState.staticMenuDesktopInactive }));
        } else {
            setLayoutState((prevLayoutState) => ({ ...prevLayoutState, staticMenuMobileActive: !prevLayoutState.staticMenuMobileActive }));
        }
    };

    const showProfileSidebar = () => {
        setLayoutState((prevLayoutState) => ({ ...prevLayoutState, profileSidebarVisible: !prevLayoutState.profileSidebarVisible }));
    };

    const isOverlay = () => {
        return layoutConfig.menuMode === 'overlay';
    };

    const isSlim = () => {
        return layoutConfig.menuMode === 'slim';
    };

    const isHorizontal = () => {
        return layoutConfig.menuMode === 'horizontal';
    };

    const isDesktop = () => {
        return window.innerWidth > 991;
    };

    const value = {
        layoutConfig,
        setLayoutConfig,
        layoutState,
        setLayoutState,
        onMenuToggle,
        showProfileSidebar,
        isSlim,
        isHorizontal,
        isDesktop,
        breadcrumbs,
        setBreadcrumbs
    };

    return (
        <LayoutContext.Provider value={value}>
            <>
                <Head>
                    <title>K4NDY</title>
                    <meta charSet="UTF-8" />
                    <meta name="theme-color" content="#000000" />
                    <meta name="description" content="Encuentros, Noviazgo y Citas: Anuncios gratis para adultos." />
                    <meta name="robots" content="index, follow" />
                    <meta name="viewport" content="initial-scale=1, width=device-width" />
                    <meta property="og:type" content="website"></meta>
                    <meta property="og:title" content="K4NDY"></meta>
                    <meta property="og:url" content="https://www.primefaces.org/apollo-react"></meta>
                    <meta property="og:description" content="Encuentros, Noviazgo y Citas: Anuncios gratis para adultos." />
                    <meta property="og:image" content="https://www.primefaces.org/static/social/apollo-nextjs.png"></meta>
                    <meta property="og:ttl" content="604800"></meta>
                    <link rel="icon" href={`${contextPath}/favicon.ico`} type="image/x-icon"></link>
                    <link rel="apple-touch-icon" href={`${contextPath}/icon-192x192.png`} type="image/x-icon"></link>
                    <link rel="manifest" href={`${contextPath}/manifest.json`} />
                </Head>
                {props.children}
            </>
        </LayoutContext.Provider>
    );
};
