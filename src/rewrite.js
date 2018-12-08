const images = document.querySelectorAll('img');
const imgArr = Array.from(images);
const fa = document.createElement('link');
fa.setAttribute('rel', 'stylesheet');
fa.setAttribute('href', 'https://use.fontawesome.com/releases/v5.5.0/css/all.css');
fa.setAttribute('integrity', 'sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU');
fa.setAttribute('crossorigin', 'anonymous');
document.head.appendChild(fa);

function changeIcon(item, classes, color, style) {
  const parent = item.parentNode;
  const icon = document.createElement('i');
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
  if (item.src === 'https://www.guitarforums.com/guitarforum/buttons/lastpost.gif') {
    changeIcon(item, ['fas', 'fa-arrow-circle-right'], '#384d48');
  }

  // subscribed thread checks
  if (item.src === 'https://www.guitarforums.com/guitarforum/misc/subscribed.gif') {
    changeIcon(item, ['fas', 'fa-check-square'], '#87BCDE');
  }

  // open folder at header
  if (item.src === 'https://www.guitarforums.com/guitarforum/misc/navbits_start.gif') {
    changeIcon(item, ['fas', 'fa-folder-open'], '#083D77');
  }

  // dots to second open folder in header
  if (item.src === 'https://www.guitarforums.com/guitarforum/misc/navbits_finallink_ltr.gif') {
    const parent = item.parentNode;
    const icon = document.createElement('i');
    const classes = ['fas', 'fa-ellipsis-h'];
    classes.forEach(c => {
      icon.classList.add(c);
    });
    icon.style.color = '#000';
    icon.style.marginRight = '4px';
    parent.appendChild(icon);
    //changeIcon(item, ['fas', 'fa-ellipsis-h'], '#000');
    changeIcon(item, ['fas', 'fa-folder-open'], '#083D77');
  }

  // paperclip icon
  if (item.src === 'https://www.guitarforums.com/guitarforum/misc/paperclip.gif') {
    changeIcon(item, ['fas', 'fa-paperclip'], '#083D77');
  }

  // smiley status icon
  if (item.src === 'https://www.guitarforums.com/images/icons/icon7.gif') {
    changeIcon(item, ['fas', 'fa-smile'], '#fff');
  }

  // new thread status icon
  if (item.src === 'https://www.guitarforums.com/guitarforum/statusicon/thread_new.gif') {
    changeIcon(item, ['fas', 'fa-envelope-open', 'fa-2x'], '#af9766');
  }

  // new hot thread status icon
  if (item.src === 'https://www.guitarforums.com/guitarforum/statusicon/thread_hot_new.gif') {
    changeIcon(item, ['fas', 'fa-envelope-open', 'fa-2x'], '#A62639');
  }

  // new thread replied status icon
  if (item.src === 'https://www.guitarforums.com/guitarforum/statusicon/thread_dot_new.gif') {
    changeIcon(item, ['fas', 'fa-reply-all', 'fa-2x'], '#af9766');
  }

  // new hot thread replied status icon
  if (item.src === 'https://www.guitarforums.com/guitarforum/statusicon/thread_dot_hot_new.gif') {
    changeIcon(item, ['fas', 'fa-reply-all', 'fa-2x'], '#A62639');
  }

  // document icon
  if (item.src === 'https://www.guitarforums.com/images/icons/icon1.gif') {
    changeIcon(item, ['fas', 'fa-file-alt'], '#000');
  }

  // folder icon in post header
  if (item.src === 'https://www.guitarforums.com/guitarforum/statusicon/post_new.gif') {
    changeIcon(item, ['fas', 'fa-folder'], '#F18F01');
  }

  // user online icon
  if (item.src === 'https://www.guitarforums.com/guitarforum/statusicon/user_online.gif') {
    changeIcon(item, ['fas', 'fa-dot-circle'], '#23CE6B');
  }

  // user offline icon
  if (item.src === 'https://www.guitarforums.com/guitarforum/statusicon/user_offline.gif') {
    changeIcon(item, ['fas', 'fa-dot-circle'], '#02111b');
  }

  // reputation scale icon
  if (item.src === 'https://www.guitarforums.com/guitarforum/buttons/reputation.gif') {
    changeIcon(item, ['fas', 'fa-balance-scale'], '#384d48');
  }

  // report user icon
  if (item.src === 'https://www.guitarforums.com/guitarforum/buttons/report.gif') {
    changeIcon(item, ['fas', 'fa-exclamation-triangle'], '#A62639');
  }

  // reputation square bright
  if (item.src === 'https://www.guitarforums.com/guitarforum/reputation/reputation_highpos.gif') {
    changeIcon(item, ['fas', 'fa-square'], '#23CE6B', { prop: 'marginRight', value: '1px' });
  }

  // reputation square dark
  if (item.src === 'https://www.guitarforums.com/guitarforum/reputation/reputation_pos.gif') {
    changeIcon(item, ['fas', 'fa-square'], '#384d48', { prop: 'marginRight', value: '1px' });
  }
});