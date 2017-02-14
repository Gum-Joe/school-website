// ES6
// Vars
const SIDEBAR_IN_PROPS = {
    sidebar: {
        marginLeft: 0
    },
    body: {
        opacity: 0.5
    }
};

const SIDEBAR_OUT_PROPS = {
    sidebar: {
        marginLeft: "-150px"
    },
    body: {
        opacity: 1
    }
};
        
        /**
         * Animate sidebar
         * Using jquery
         * Generally, I would use css classes and a css animation to open the sidebar
         * With JQuery attaching the classes
         * But I am doing it this way so I have JS in my page
         */
        $(".hamburger").click(() => {
          $(".sidebar").animate(SIDEBAR_IN_PROPS.sidebar, 500);
          $(".main").animate(SIDEBAR_IN_PROPS.body, 500);
        });

        $("#sidebar-head").click(() => {
          $(".sidebar").animate(SIDEBAR_OUT_PROPS.sidebar, 500);
          $(".main").animate(SIDEBAR_OUT_PROPS.body, 500);
        });
