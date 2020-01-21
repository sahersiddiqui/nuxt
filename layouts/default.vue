<template>
<div>
    <header>
        <div class="md-layout">
            <div class="md-layout-item">
                <md-tabs>
                    <md-tab id="tab-home" md-label="Home" to="/" ></md-tab>
                    <md-tab id="tab-pages" md-label="Contact Us" to="/contact"></md-tab>
                </md-tabs>
            </div>
        </div>
    </header>
    <section>
        <nuxt/>
    </section>
    <footer>
        @Copy 2020
    </footer>
</div>
</template>
