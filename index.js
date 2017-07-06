function getFirstSelector(selector) {
  return document.querySelector(selector)

}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n)  {
  const list = document.querySelectorAll('.ranked-list')

  for (let i = 0, l = list.length; i < l; i++) {
    let children = list[i].children

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}

function deepestChild() {
  return document.querySelector('div#grand-node div div div div')
}
