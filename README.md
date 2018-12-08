# GF Reskin

I'm a member at [guitarforums.com](https://www.guitarforums.com) and this is just a little project to keep my files and tasks to be used in conjuction with [this chrome extension](https://chrome.google.com/webstore/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld?hl=en) to reskin the site for me while viewing it.

This reskin does the following:

- Changes colors to some that go together better
- Changes fonts to something more pleasing
- Changes icons to something more modern and flat
- Adds shadows and removes some borders

## To install project and make changes:

- You must have Node installed
- You must install [this chrome extension](https://chrome.google.com/webstore/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld?hl=en)

```sh
$ git clone https://github.com/jgdigitaljedi/gfReskin
$ cd gfReskin
$ npm i
$ npm run compile
```

## To just use my theme on your machine:

- You must install [this chrome extension](https://chrome.google.com/webstore/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld?hl=en)
- go to www.guitarforums.com and open the chrome extension
- copy the contents of compiled/rewrite.css to the css side of the editor
- copy the contents of compiled/bundle.min.js to the js side of the editor
- save and reload guitarforums.com

### Todos

- restyle buttons
- deeper look at other parts of the site to restyle

## License

MIT
