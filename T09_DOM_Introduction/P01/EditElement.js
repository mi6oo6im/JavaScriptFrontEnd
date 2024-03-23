function editElement(ref, matchStr, replaceStr) {
    while (ref.textContent.includes(matchStr)) {
        ref.textContent = ref.textContent.replace(matchStr, replaceStr)
    }
}