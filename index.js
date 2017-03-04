// I would ES6 here, but my transpiler won't allow local files to be used
// Vars
var SIDEBAR_IN_PROPS = {
    sidebar: {
        marginLeft: 0
    },
    body: {
        opacity: 0.5
    }
};

var SIDEBAR_OUT_PROPS = {
    sidebar: {
        marginLeft: "-150px"
    },
    body: {
        opacity: 1
    }
};

var YOUTUBE_URLS = [
  "https://www.youtube.com/embed/dODyiK0kFUw",
  "https://www.youtube.com/embed/UyRxVJjRq8w",
  "https://www.youtube.com/embed/HeiDJAGcmz0",
  "https://www.youtube.com/embed/LfsNMc3VckQ",
  "https://www.youtube.com/embed/DuBfdTCYRAk",
  "https://www.youtube.com/embed/xIZN5m4H_hU",
  "https://www.youtube.com/embed/ep9NLtCdF4k",
  "https://www.youtube.com/embed/eeCdJ9LQaaQ",
  "https://www.youtube.com/embed/fiWY4cHTilM",
  "https://www.youtube.com/embed/tuVArXqY8Nc",
  "https://www.youtube.com/embed/TUMWygC_PI8",
  "https://www.youtube.com/embed/s74r2nIUJyI",
  "https://www.youtube.com/embed/v_IdEcbQPTw",
  "https://www.youtube.com/embed/HdFBKcQik_U"
]

/**
 * Animate sidebar
 * Using jquery
 * Generally, I would use css classes and a css animation to open the sidebar
 * With JQuery attaching the classes
 * But I am doing it this way so I have JS in my page
 */
$(".hamburger").click(function () {
  $(".sidebar").animate(SIDEBAR_IN_PROPS.sidebar, 500);
  $(".main").animate(SIDEBAR_IN_PROPS.body, 500);
});

$("#sidebar-head").click(function () {
  $(".sidebar").animate(SIDEBAR_OUT_PROPS.sidebar, 500);
  $(".main").animate(SIDEBAR_OUT_PROPS.body, 500);
});

/**
  * Fill in YouTUbe vids
  */
for (var i = 0; i < YOUTUBE_URLS.length; i++) {
  $(".youtube .cards").append("<div class=\"card card-no-shadow\">" + "<iframe src=\"" + YOUTUBE_URLS[i] + "\" frameborder=\"0\" allowfullscreen></iframe></div>"
  )
}
