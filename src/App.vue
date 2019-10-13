<template>
    <div id="app">
        <div id="nav">
            <b-navbar variant="faded" type="light">
                <b-navbar-brand to="/">
                    <img id="logo" alt="Recipe Reverse" src="./assets/logo.png">
                    Recipe Reverse
                </b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item to="/about">About</b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>
        <router-view/>
        <footer class="align-content-center">
            <p>
                Made with
                <unicon name="heartbeat" fill="red"></unicon>
            </p>
        </footer>
    </div>
</template>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #008577;
            }
        }

        img {
            vertical-align: middle;

            &#logo {
                height: 50px;
            }
        }
    }

    footer {
        padding: 50px;
    }
</style>
