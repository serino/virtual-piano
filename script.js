let keys = document.getElementsByClassName(`key`)
let notesParagraph = document.getElementById(`notesParagraph`)
let playButton = document.getElementById(`playButton`)
let twinkleButton = document.getElementById(`twinkleButton`)

let twinkleNotes = `ccggaag-ffeeddc`
let keyIds = []

for (let key of keys) {
  key.addEventListener(`click`, pressKey)
}

playButton.addEventListener(`click`, play)
twinkleButton.addEventListener(`click`, twinkle)

function pressKey() {
  playNote(this.id)
}

function playNote(keyId) {
  let key = document.getElementById(keyId)

  if (key != null) {
    let note = document.getElementById(`${keyId}Note`)
    note.currentTime = 0
    note.play()
  }

  keyIds.push(keyId)
  notesParagraph.innerHTML = keyIds.join(` `).replace(/Sharp/g, `#`)
}

function play() {
  let keyIdsToPlay = keyIds.slice()

  keyIds = []
  notesParagraph.innerHTML = ``

  for (let i = 0; i < keyIdsToPlay.length; i++) {
    setTimeout(playNote, i * 300, keyIdsToPlay[i])
  }
}

function twinkle() {
  keyIds = twinkleNotes.split(``)
  play()
}