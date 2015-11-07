var h = require('hyperscript')

document.head.appendChild(
  h('link', { rel: 'stylesheet', href: '/node_modules/material-design-lite/material.min.css'})
)
document.head.appendChild(
  h('script', {src: '/node_modules/material-design-lite/material.min.js'})
)

document.head.appendChild(
  h('link', { rel: 'stylesheet', href: '//fonts.googleapis.com/icon?family=Material+Icons'})
)

document.head.appendChild(
  h('link', { rel: 'stylesheet', href: 'custom.css'})
)

function img(name) {
  return h('.mdl-cell.mdl-cell--3-col', [
    h("div." + name + "-card-image.mdl-card.mdl-shadow--2dp", [
      h("div.mdl-card__title.mdl-card--expand"),
      h("div.mdl-card__actions", [
        h("span.avatar-card-image__filename", [ "Males/" + name + ".png" ])
      ])
    ])
  ])
}

document.body.appendChild(
  h("div.mdl-layout.mdl-js-layout.mdl-layout--fixed-header", [
    h("header.mdl-layout__header", [
      h("div.mdl-layout__header-row", [
        h("span.mdl-layout-title", [ "Avatars" ])
      ])
    ]),
    h("main.mdl-layout__content", [
      h("div.page-content", [
        h('.mdl-grid', [
          'a01','a02','a03', 'a04', 'a05',
          'b01','b02','b03', 'b04', 'b05',
          'c01','c02','c03', 'c04', 'c05',
          'd01','d02','d03', 'd04', 'd05',
          'e01','e02','e03', 'e04', 'e05',
          'f01','f02','f03', 'f04', 'f05',
          'g01','g02','g03', 'g04', 'g05',
          'h01','h02','h03', 'h04', 'h05',
          'i01','i02','i03', 'i04', 'i05',
          'fa01','fa02','fa03', 'fa04', 'fa05',
          'fb01','fb02','fb03', 'fb04', 'fb05'
        ].map(img))
      ])
    ])
  ])
)
