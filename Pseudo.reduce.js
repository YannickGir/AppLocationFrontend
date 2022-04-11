export default function (pseudo = "", action) {
  if (action.type == "savePseudo") {
    var newpseudo = action.pseudo;
    return newpseudo;
  } else {
    return pseudo;
  }
}
