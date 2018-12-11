const images = document.querySelectorAll("img");
const imgArr = Array.from(images);
const fa = document.createElement("link");
fa.setAttribute("rel", "stylesheet");
fa.setAttribute(
  "href",
  "https://use.fontawesome.com/releases/v5.5.0/css/all.css"
);
fa.setAttribute(
  "integrity",
  "sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
);
fa.setAttribute("crossorigin", "anonymous");
document.head.appendChild(fa);

function changeIcon(item, classes, color, style) {
  const parent = item.parentNode;
  const icon = document.createElement("i");
  classes.forEach(c => {
    icon.classList.add(c);
  });
  icon.style.color = color;
  if (style) {
    icon.style[style.prop] = style.value;
  }
  parent.appendChild(icon);
  parent.removeChild(item);
}

imgArr.forEach(item => {
  // right pointing arrows in thread list
  if (
    item.src === "https://www.guitarforums.com/guitarforum/buttons/lastpost.gif"
  ) {
    changeIcon(item, ["fas", "fa-arrow-circle-right"], "#384d48");
  }

  // subscribed thread checks
  if (
    item.src === "https://www.guitarforums.com/guitarforum/misc/subscribed.gif"
  ) {
    changeIcon(item, ["fas", "fa-check-square"], "#87BCDE");
  }

  // open folder at header
  if (
    item.src ===
    "https://www.guitarforums.com/guitarforum/misc/navbits_start.gif"
  ) {
    changeIcon(item, ["fas", "fa-folder-open"], "#083D77");
  }

  // dots to second open folder in header
  if (
    item.src ===
    "https://www.guitarforums.com/guitarforum/misc/navbits_finallink_ltr.gif"
  ) {
    const parent = item.parentNode;
    const icon = document.createElement("i");
    const classes = ["fas", "fa-ellipsis-h"];
    classes.forEach(c => {
      icon.classList.add(c);
    });
    icon.style.color = "#000";
    icon.style.marginRight = "4px";
    parent.appendChild(icon);
    //changeIcon(item, ['fas', 'fa-ellipsis-h'], '#000');
    changeIcon(item, ["fas", "fa-folder-open"], "#083D77");
  }

  // paperclip icon
  if (
    item.src === "https://www.guitarforums.com/guitarforum/misc/paperclip.gif"
  ) {
    changeIcon(item, ["fas", "fa-paperclip"], "#083D77");
  }

  // smiley status icon
  if (item.src === "https://www.guitarforums.com/images/icons/icon7.gif") {
    changeIcon(item, ["fas", "fa-smile"], "#fff");
  }

  // new thread status icon
  if (
    item.src ===
    "https://www.guitarforums.com/guitarforum/statusicon/thread_new.gif"
  ) {
    changeIcon(item, ["fas", "fa-envelope-open", "fa-2x"], "#af9766");
  }

  // new hot thread status icon
  if (
    item.src ===
    "https://www.guitarforums.com/guitarforum/statusicon/thread_hot_new.gif"
  ) {
    changeIcon(item, ["fas", "fa-envelope-open", "fa-2x"], "#A62639");
  }

  // new thread replied status icon
  if (
    item.src ===
    "https://www.guitarforums.com/guitarforum/statusicon/thread_dot_new.gif"
  ) {
    changeIcon(item, ["fas", "fa-reply-all", "fa-2x"], "#af9766");
  }

  // new hot thread replied status icon
  if (
    item.src ===
    "https://www.guitarforums.com/guitarforum/statusicon/thread_dot_hot_new.gif"
  ) {
    changeIcon(item, ["fas", "fa-reply-all", "fa-2x"], "#A62639");
  }

  // document icon
  if (item.src === "https://www.guitarforums.com/images/icons/icon1.gif") {
    changeIcon(item, ["fas", "fa-file-alt"], "#000");
  }

  // folder icon in post header
  if (
    item.src ===
    "https://www.guitarforums.com/guitarforum/statusicon/post_new.gif"
  ) {
    changeIcon(item, ["fas", "fa-folder"], "#F18F01");
  }

  // user online icon
  if (
    item.src ===
    "https://www.guitarforums.com/guitarforum/statusicon/user_online.gif"
  ) {
    changeIcon(item, ["fas", "fa-dot-circle"], "#23CE6B");
  }

  // user offline icon
  if (
    item.src ===
    "https://www.guitarforums.com/guitarforum/statusicon/user_offline.gif"
  ) {
    changeIcon(item, ["fas", "fa-dot-circle"], "#02111b");
  }

  // reputation scale icon
  if (
    item.src ===
    "https://www.guitarforums.com/guitarforum/buttons/reputation.gif"
  ) {
    changeIcon(item, ["fas", "fa-balance-scale"], "#384d48");
  }

  // report user icon
  if (
    item.src === "https://www.guitarforums.com/guitarforum/buttons/report.gif"
  ) {
    changeIcon(item, ["fas", "fa-exclamation-triangle"], "#A62639");
  }

  // reputation square bright
  if (
    item.src ===
    "https://www.guitarforums.com/guitarforum/reputation/reputation_highpos.gif"
  ) {
    changeIcon(item, ["fas", "fa-square"], "#23CE6B", {
      prop: "marginRight",
      value: "1px"
    });
  }

  // reputation square dark
  if (
    item.src ===
    "https://www.guitarforums.com/guitarforum/reputation/reputation_pos.gif"
  ) {
    changeIcon(item, ["fas", "fa-square"], "#384d48", {
      prop: "marginRight",
      value: "1px"
    });
  }

  // down arrow beside menu item
  if (
    item.src === "https://www.guitarforums.com/guitarforum/misc/menu_open.gif"
  ) {
    changeIcon(item, ["fas", "fa-sort-down"], "#fbfbf2");
  }

  // smile wink status icon
  if (item.src === "https://www.guitarforums.com/images/icons/icon12.gif") {
    changeIcon(item, ["fas", "fa-smile-wink"], "#87BCDE");
  }

  // poll status icon
  if (
    item.src ===
    "https://www.guitarforums.com/guitarforum/misc/poll_posticon.gif"
  ) {
    changeIcon(item, ["fas", "fa-poll-h"], "#083D77");
  }

  // post edit remove formatting
  if (
    item.src ===
    "https://www.guitarforums.com/guitarforum/editor/removeformat.gif"
  ) {
    changeIcon(item, ["fas", "fa-ban"], "#083D77", {
      prop: "padding",
      value: "4px"
    });
  }

  // post edit bold
  if (item.src === "https://www.guitarforums.com/guitarforum/editor/bold.gif") {
    changeIcon(item, ["fas", "fa-bold"], "#083D77", {
      prop: "padding",
      value: "4px"
    });
  }

  // post edit italic
  if (
    item.src === "https://www.guitarforums.com/guitarforum/editor/italic.gif"
  ) {
    changeIcon(item, ["fas", "fa-italic"], "#083D77", {
      prop: "padding",
      value: "4px"
    });
  }

  // post edit underline
  if (
    item.src === "https://www.guitarforums.com/guitarforum/editor/underline.gif"
  ) {
    changeIcon(item, ["fas", "fa-underline"], "#083D77", {
      prop: "padding",
      value: "4px"
    });
  }

  // post edit image
  if (
    item.src ===
    "https://www.guitarforums.com/guitarforum/editor/insertimage.gif"
  ) {
    changeIcon(item, ["fas", "fa-image"], "#083D77", {
      prop: "padding",
      value: "4px"
    });
  }

  // post edit link
  if (
    item.src ===
    "https://www.guitarforums.com/guitarforum/editor/createlink.gif"
  ) {
    changeIcon(item, ["fas", "fa-link"], "#083D77", {
      prop: "padding",
      value: "4px"
    });
  }

  // post edit quote
  if (
    item.src === "https://www.guitarforums.com/guitarforum/editor/quote.gif"
  ) {
    changeIcon(item, ["fas", "fa-quote-right"], "#083D77", {
      prop: "padding",
      value: "4px"
    });
  }

  // post edit color
  if (
    item.src === "https://www.guitarforums.com/guitarforum/editor/color.gif"
  ) {
    changeIcon(item, ["fas", "fa-palette"], "#083D77", {
      prop: "padding",
      value: "4px"
    });
  }

  // post edit color under part
  if (item.src === "https://www.guitarforums.com/clear.gif") {
    const parent = item.parentNode;
    parent.removeChild(item);
  }

  // post edit down arrow
  if (
    item.src === "https://www.guitarforums.com/guitarforum/editor/menupop.gif"
  ) {
    changeIcon(item, ["fas", "fa-sort-down"], "#083D77", {
      prop: "padding",
      value: "4px"
    });
  }

  // post resize up arrow
  if (
    item.src === "https://www.guitarforums.com/guitarforum/editor/resize_0.gif"
  ) {
    changeIcon(item, ["fas", "fa-angle-double-up"], "#083D77", {
      prop: "padding",
      value: "4px"
    });
  }

  // post resize down arrow
  if (
    item.src === "https://www.guitarforums.com/guitarforum/editor/resize_1.gif"
  ) {
    changeIcon(item, ["fas", "fa-angle-double-down"], "#083D77", {
      prop: "padding",
      value: "4px"
    });
  }

  // currently active users
  if (
    item.src === "https://www.guitarforums.com/guitarforum/misc/whos_online.gif"
  ) {
    changeIcon(item, ["fas", "fa-users", "fa-2x"], "#A62639", {
      prop: "padding",
      value: "4px"
    });
  }

  // stats
  if (item.src === "https://www.guitarforums.com/guitarforum/misc/stats.gif") {
    changeIcon(item, ["fas", "fa-chart-line", "fa-2x"], "#083D77", {
      prop: "padding",
      value: "4px"
    });
  }

  // user cp edit details
  if (
    item.src ===
    "https://www.guitarforums.com/guitarforum/misc/usercp_icons/user_edit.gif"
  ) {
    changeIcon(item, ["fas", "fa-user-edit"], "#A62639");
  }

  // user cp edit privacy
  if (
    item.src ===
    "https://www.guitarforums.com/guitarforum/misc/usercp_icons/key.gif"
  ) {
    changeIcon(item, ["fas", "fa-user-secret"], "#A62639");
  }

  // user cp edit profile picture
  if (
    item.src ===
    "https://www.guitarforums.com/guitarforum/misc/usercp_icons/vcard_edit.gif"
  ) {
    changeIcon(item, ["fas", "fa-camera-retro"], "#A62639");
  }

  // user cp edit avatar
  if (
    item.src ===
    "https://www.guitarforums.com/guitarforum/misc/usercp_icons/picture_edit.gif"
  ) {
    changeIcon(item, ["fas", "fa-user-circle"], "#A62639");
  }

  // user cp edit signature
  if (
    item.src ===
    "https://www.guitarforums.com/guitarforum/misc/usercp_icons/page_red.gif"
  ) {
    changeIcon(item, ["fas", "fa-signature"], "#A62639");
  }

  // user cp email and password
  if (
    item.src ===
    "https://www.guitarforums.com/guitarforum/misc/usercp_icons/lock.gif"
  ) {
    changeIcon(item, ["fas", "fa-key"], "#A62639");
  }

  // user cp edit options
  if (
    item.src ===
    "https://www.guitarforums.com/guitarforum/misc/usercp_icons/cog.gif"
  ) {
    changeIcon(item, ["fas", "fa-cog"], "#A62639");
  }

  // user cp edit ignore list
  if (
    item.src ===
    "https://www.guitarforums.com/guitarforum/misc/usercp_icons/user_delete.gif"
  ) {
    changeIcon(item, ["fas", "fa-shield-alt"], "#A62639");
  }

  // user cp edit reminders
  if (
    item.src ===
    "https://www.guitarforums.com/guitarforum/misc/usercp_icons/time.gif"
  ) {
    changeIcon(item, ["fas", "fa-bell"], "#A62639");
  }

  // user cp attachments
  if (
    item.src ===
    "https://www.guitarforums.com/guitarforum/misc/usercp_icons/attach.gif"
  ) {
    changeIcon(item, ["fas", "fa-paperclip"], "#A62639");
  }

  // user cp contacts and friends
  if (
    item.src ===
    "https://www.guitarforums.com/guitarforum/misc/usercp_icons/user_add.gif"
  ) {
    changeIcon(item, ["fas", "fa-user-friends"], "#083D77");
  }

  // user cp inbox
  if (
    item.src ===
    "https://www.guitarforums.com/guitarforum/misc/usercp_icons/email_open_image.gif"
  ) {
    changeIcon(item, ["fas", "fa-inbox"], "#083D77");
  }

  // user cp sent items
  if (
    item.src ===
    "https://www.guitarforums.com/guitarforum/misc/usercp_icons/email_go.gif"
  ) {
    changeIcon(item, ["fas", "fa-share-square"], "#083D77");
  }

  // user cp list messages
  if (
    item.src ===
    "https://www.guitarforums.com/guitarforum/misc/usercp_icons/email_open.gif"
  ) {
    changeIcon(item, ["fas", "fa-mail-bulk"], "#083D77");
  }

  // user cp send new message
  if (
    item.src ===
    "https://www.guitarforums.com/guitarforum/misc/usercp_icons/email_add.gif"
  ) {
    changeIcon(item, ["fas", "fa-envelope"], "#083D77");
  }

  // user cp track messages
  if (
    item.src ===
    "https://www.guitarforums.com/guitarforum/misc/usercp_icons/email_link.gif"
  ) {
    changeIcon(item, ["fas", "fa-file-contract"], "#083D77");
  }

  // user cp edit folders
  if (
    item.src ===
    "https://www.guitarforums.com/guitarforum/misc/usercp_icons/folder_edit.gif"
  ) {
    changeIcon(item, ["fas", "fa-folder-plus"], "#083D77");
  }

  // user cp edit subscriptions
  if (
    item.src ===
    "https://www.guitarforums.com/guitarforum/misc/usercp_icons/newspaper.gif"
  ) {
    changeIcon(item, ["fas", "fa-newspaper"], "#083D77");
  }

  // thumbtack/sticky thread icon
  if (item.src === "https://www.guitarforums.com/guitarforum/misc/sticky.gif") {
    changeIcon(item, ["fas", "fa-thumbtack"], "#083D77");
  }

  // collapse thead
  if (
    item.src ===
    "https://www.guitarforums.com/guitarforum/buttons/collapse_thead.gif"
  ) {
    changeIcon(item, ["fas", "fa-angle-double-up"], "#fbfbf2");
  }

  // collapse thread alt (tcat)
  if (
    item.src ===
    "https://www.guitarforums.com/guitarforum/buttons/collapse_tcat.gif"
  ) {
    changeIcon(item, ["fas", "fa-angle-double-up"], "#fbfbf2");
  }

  // moderators no new posts
  if (
    item.src ===
    "https://www.guitarforums.com/guitarforum/statusicon/thread.gif"
  ) {
    changeIcon(item, ["fas", "fa-envelope-square", "fa-2x"], "#384d48");
  }

  // moderators thread close
  if (
    item.src ===
    "https://www.guitarforums.com/guitarforum/statusicon/thread_lock.gif"
  ) {
    changeIcon(item, ["fas", "fa-lock", "fa-2x"], "#384d48");
  }

  // moderators hot thread no new posts
  if (
    item.src ===
    "https://www.guitarforums.com/guitarforum/statusicon/thread_hot.gif"
  ) {
    changeIcon(item, ["fas", "fa-fire", "fa-2x"], "#f18f01");
  }

  // moderators - user invisible
  if (
    item.src ===
    "https://www.guitarforums.com/guitarforum/statusicon/thread_dot.gif"
  ) {
    changeIcon(item, ["fas", "fa-dot-circle", "fa-2x"], "#f18f01");
  }

  // moderators you have posted
  if (
    item.src ===
    "https://www.guitarforums.com/guitarforum/statusicon/thread_dot.gif"
  ) {
    changeIcon(item, ["fas", "fa-file-import", "fa-2x"], "#083d77");
  }

  // guitar old post
  if (
    item.src ===
    "https://www.guitarforums.com/guitarforum/statusicon/forum_old.gif"
  ) {
    item.src = "https://i.imgur.com/w7YyVJd.png";
  }

  // guitar new post
  if (
    item.src ===
    "https://www.guitarforums.com/guitarforum/statusicon/forum_new.gif"
  ) {
    item.src = "https://i.imgur.com/f6zf4Kb.png";
  }

  // post reply button
  if (
    item.src === "https://www.guitarforums.com/guitarforum/buttons/reply.gif"
  ) {
    item.src = "https://i.imgur.com/CyUD8N0.png";
  }

  // quote button
  if (
    item.src === "https://www.guitarforums.com/guitarforum/buttons/quote.gif"
  ) {
    item.src = "https://i.imgur.com/dlFGSvr.png";
  }

  // multi-quote button
  if (
    item.src ===
    "https://www.guitarforums.com/guitarforum/buttons/multiquote_off.gif"
  ) {
    item.src = "https://i.imgur.com/T6CEQLD.png";
  }

  // quick reply button
  if (
    item.src ===
    "https://www.guitarforums.com/guitarforum/buttons/quickreply.gif"
  ) {
    item.src = "https://i.imgur.com/qS3h8J2.png";
  }

  // gf logo
  if (item.src === "https://www.guitarforums.com/guitarforum/gf_logo.gif") {
    item.src = "https://i.imgur.com/l4eT06a.png";
  }
});
